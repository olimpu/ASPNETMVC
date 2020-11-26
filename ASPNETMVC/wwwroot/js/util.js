var util = {

    showErrorMsg: function (form, type, msg) {

        var alert = $('<div class="alert alert-' + type + ' alert-dismissible" role="alert"><div class="alert-text">' + msg + '</div><div class="alert-close"><i class="flaticon2-cross kt-icon-sm" data-dismiss="alert"></i></div>');
        form.find('.alert').remove();
        alert.prependTo(form);
        //alert.animateClass('fadeIn animated');
        KTUtil.animateClass(alert[0], 'fadeIn animated');
        alert.find('span').html(msg);        
    },

    initCombo: function (obj) {

        return $("#" + obj.combo).select2({
            ajax: {
                url: obj.url,
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term,
                        'term': params.term
                    };
                },
                processResults: function (data) {
                    return {
                        results: data.data
                    };
                },
                cache: true
            },
            width: '100%',
            minimumInputLength: obj.input > 0 ? obj.input : 2,
            language: {
                inputTooShort: function () {
                    return (obj.inputTooShort != '' && obj.inputTooShort != null ? obj.inputTooShort : "Insira 2 ou mais caracteres para busca");
                },
                noResults: function () {
                    return "Nenhum resultado encontrado";
                },
                searching: function () {
                    return "Pesquisando...";
                },
            },
            placeholder: {
                id: '',
                text: 'Selecione'
            },
            allowClear: obj.allowClear == true ? true : false,
        }).on("select2:unselecting", function (e) {
            var self = $(this);
            setTimeout(function () {
                self.select2('close');
            }, 0);
        });
    }

}