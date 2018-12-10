
var handleLogin = function () {

    var loginForm = $('#loginForm');

    loginForm.on('submit', function (e) {

        e.preventDefault();

        $(this).parsley({

            errorsWrapper: '<div class="text-danger"></div>',
            errorTemplate: '<span></span>'

        }).validate();

        if ($(this).parsley().isValid()) {

            var data = $(this).serializeArray();
            data = JSON.stringify(data);

            $.ajax({

                type: "GET",

                url: "data/login.json",

                data: data,

                beforeSend: function () {

                    $('.alert').remove();

                },

                success: function (result) {

                    if (result.isSuccess) {

                        location.assign("http://localhost:3000/dashboard.html");

                    } else {

                        var alert = alertBox('danger', 'Wrong username or password!');
                        $(".modal-body").prepend(alert);

                        $('#password').val('');

                        $('#email').val('');

                    }

                },

                complete: function () {

                    $('.alert').fadeOut(5000);

                }

            });

        }

    });

};

function alertBox(type, message) {

    var html = '';

    html += '<div class="alert alert-' + type + ' fade show text-center" role="alert">';

    html += message;

    html += '</div>';

    return html;

};

var App = function () {

    return {

        init: function () {

            handleLogin();

        }

    };

}();

