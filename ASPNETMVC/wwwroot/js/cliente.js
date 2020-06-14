var cliente = {

    // --- FUNÇÕES PARA O CADASTRO DE CLIENTE ---
    VerificaTipo: function() {

        var tipo = $("#tipo_pessoa").val();

        if (tipo == 0) {

            document.getElementById("div_cpf").style.display = 'flex';
            document.getElementById("div_data_nascimento").style.display = 'flex';

            document.getElementById("div_razao_social").style.display = 'none';
            document.getElementById("div_cnpj").style.display = 'none';
            document.getElementById("div_ie").style.display = 'none';
            document.getElementById("div_im").style.display = 'none';
        }
        else if (tipo == 1) {

            document.getElementById("div_razao_social").style.display = 'flex';
            document.getElementById("div_cnpj").style.display = 'flex';
            document.getElementById("div_ie").style.display = 'flex';
            document.getElementById("div_im").style.display = 'flex';

            document.getElementById("div_cpf").style.display = 'none';
            document.getElementById("div_data_nascimento").style.display = 'none';

        }
        else if (tipo == 2) {

            document.getElementById("div_data_nascimento").style.display = 'flex';

            document.getElementById("div_razao_social").style.display = 'none';
            document.getElementById("div_cnpj").style.display = 'none';
            document.getElementById("div_ie").style.display = 'none';
            document.getElementById("div_im").style.display = 'none';
            document.getElementById("div_cpf").style.display = 'none';
        }
    },

    OnChangeIeIsento: function () {

        var checkbox = $("#ie_isento").is(":checked");

        if (checkbox === true) {

            $("#ie_numero").val("");
            $("#ie_numero").prop("disabled", true);
        }
        else {

            $("#ie_numero").prop("disabled", false);
        }
    },

    OnChangeImIsento: function () {

        var checkbox = $("#im_isento").is(":checked");

        if (checkbox === true) {

            $("#im_numero").val("");
            $("#im_numero").prop("disabled", true);
        }
        else {

            $("#im_numero").prop("disabled", false);
        }
    },

    Mascara: function () {

        $(".cep").inputmask("mask", { "mask": "99999-999", autoUnmask: true });
        $(".telefone").inputmask("mask", { "mask": "(99)9999-9999[9]", greedy: false, digitsOptional: true, autoUnmask: true });
        $(".cpf").inputmask("mask", { "mask": "999.999.999-99", keepStatic: true, autoUnmask: true });
        $(".cnpj").inputmask("mask", { "mask": "99.999.999/9999-99", keepStatic: true, autoUnmask: true });
        $(".calendario").inputmask("mask", { "mask": "99/99/9999", keepStatic: true, autoUnmask: true });
    },

    Salvar: function () {

        var tipo_pessoa = $("#tipo_pessoa").val();
        var cliente;
        var data_nascimento = moment($("#data_nascimento").val(), "DDMMYYYY");


        if (tipo_pessoa == 0) {

            cliente = {
                documento: $("#cpf").val(),
                nome: $("#nome").val(),
                email: $("#email").val(),
                dataNascimento: data_nascimento.format("MM-DD-YYYY"),
                telefonePrincipal: $("#telefone_principal").val(),
                telefoneSecundario: $("#telefone_secundario").val(),
                observacoes: $("#observacoes").val(),
                cep: $("#cep").val(),
                endereco: $("#endereco").val(),
                numero: $("#numero").val(),
                complemento: $("#complemento").val(),
                bairro: $("#bairro").val(),
                Cidade: { id: $("#combo_cidade").val() }
            }
        }
        else if (tipo_pessoa == 1) {

            cliente = {
                documento: $("#cnpj").val(),
                nome: $("#nome").val(),
                email: $("#email").val(),
                razaoSocial: $("#razao_social").val(),
                ieIsento: $("#ie_isento").is(":checked"),
                ieNumero: $("#ie_numero").val(),
                imIsento: $("#im_isento").is(":checked"),
                imNumero: $("#im_numero").val(),
                telefonePrincipal: $("#telefone_principal").val(),
                telefoneSecundario: $("#telefone_secundario").val(),
                observacoes: $("#observacoes").val(),
                cep: $("#cep").val(),
                endereco: $("#endereco").val(),
                numero: $("#numero").val(),
                complemento: $("#complemento").val(),
                bairro: $("#bairro").val(),
                Cidade: { id: $("#combo_cidade").val() }
            }
        }
        else {

            cliente = {
                nome: $("#nome").val(),
                email: $("#email").val(),
                dataNascimento: data_nascimento.format("MM-DD-YYYY"),
                telefonePrincipal: $("#telefone_principal").val(),
                telefoneSecundario: $("#telefone_secundario").val(),
                observacoes: $("#observacoes").val(),
                cep: $("#cep").val(),
                endereco: $("#endereco").val(),
                numero: $("#numero").val(),
                complemento: $("#complemento").val(),
                bairro: $("#bairro").val(),
                Cidade: { id: $("#combo_cidade").val() }
            }
        }
        
        Swal.fire({
            title: 'Deseja salvar o Cliente?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {

            if (result.value) {

                var remote = $.ajax({
                    dataType: 'script',
                    url: '/Cliente/SalvarCliente/',
                    data: cliente,
                    cache: false,
                    async: false
                }).responseText;

                if (remote) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Cliente salvo com sucesso',
                        showConfirmButton: true
                    }).then(() => {
                        document.location.href = "Cliente/Listar";
                    });
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Não foi possível salvar o Cliente... Se o erro persistir, entre em contato com o suporte técnico.',
                        showConfirmButton: true
                    });
                }
            }
        });

    }
    // --- FUNÇÕES PARA O CADASTRO DE CLIENTE ---
}