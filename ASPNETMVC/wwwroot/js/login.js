var login = {

    Registrar: function (btn) {
                
        btn.className += ' kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light';
        btn.disabled = true;

        var dados = {
            nomeCompleto: $("#registrar_nome").val(),
            email: $("#registrar_email").val(),
            senha: $("#registrar_senha").val(),
        };

        $("#registrar_nome").val("");
        $("#registrar_email").val("");
        $("#registrar_senha").val("");

        $.ajax({
            dataType: 'script',            
            url: baseUrl + 'Login/RegistrarUsuario',
            type: 'post',
            data: dados,
            success: function (res) {

                btn.classList.remove('kt-spinner', 'kt-spinner--right', 'kt-spinner--sm', 'kt-spinner--light');
                btn.disabled = false;
                displaySignInForm();
                var signInForm = $('#kt_login').find('.kt-login__signin');
                util.showErrorMsg(signInForm, 'success', 'Sua conta tá criada! Agora é so digitar seu login e senha para acessar :D');                
            }
        });
    },

    LogarUsuario: function (btn) {

        btn.className += ' kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light';
        btn.disabled = true;

        var dados = {
            email: $("#login_email").val(),
            senha: $("#login_senha").val()
        };

        $.ajax({
            dataType: 'script',
            url: baseUrl + 'Login/AutenticarUsuario',
            type: 'post',
            data: dados,
            success: function (res) {

                btn.classList.remove('kt-spinner', 'kt-spinner--right', 'kt-spinner--sm', 'kt-spinner--light');
                btn.disabled = false;
                
                if (res == 'false') {

                    var signInForm = $('#kt_login').find('.kt-login__signin');
                    util.showErrorMsg(signInForm, 'danger', 'Email ou senha incorreta :(');
                }
                else
                    document.location.href = "Home/Index";
            }
        });
    }
}