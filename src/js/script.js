
var handleLogin = function () {

    var loginForm = $('#loginForm');

    loginForm.on('submit', function (e) {

        e.preventDefault();

        $(this).parsley({

            errorsWrapper: '<div class="text-danger"></div>',
            errorTemplate: '<span></span>'

        }).validate();

        if ($(this).parsley().isValid()) {

            var data = $(this).serialize();

            console.log(data);

        }

    });

};

var App = function () {

    return {

        init: function () {

            handleLogin();

        }

    };

}();

