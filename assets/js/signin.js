function send_data() {

    var k = function (t, k, e) {
            var j = $('<div class="kt-alert kt-alert--outline alert alert-' + k + ' alert-dismissible" role="alert">\t\t\t<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\t\t\t<span></span>\t\t</div>');
            t.find(".alert").remove(), j.prependTo(t), KTUtil.animateClass(n[0], "fadeIn animated"), j.find("span").html(e)
        },
        d = $('#login-submit'),

        dataObject = {
            code: 123,
            api: 250,
            data: {
                email: $('#email').val(),
                password: $('#password').val()
            }
        },

        n = $('#login-form');

    n.validate({
        rules: {
            phone_number: {required: !0},
            password: {required: !0}

        }
    });
    n.valid() && ($("#login-submit").prop('disabled', true) , $('#message_container').append("<div id=\"message\" style=\" padding:15px;margin: 15px; width:100% ; background:#fcb444 \" > Loading..... </div>"),


            $.ajax(
                {
                    url: 'https://farnett.com/api/tanfwa',
                    type: 'POST',
                    data: JSON.stringify(dataObject),
                    content: ('application/x-www-form-urlencoded; charset=UTF-8'),
                    success: function (response) {
                        // decode the json string to a js object
                        var responseObject = JSON.parse(response);
                        // get the code from the create js object using js notation
                        var code = responseObject.code;
                        // then do the if  for error or success
                        if (code === 200) {
                            console.log('yess')
                            sessionStorage.setItem('user_details', JSON.stringify(responseObject.user_details)  );
                            sessionStorage.setItem('token', responseObject.session_id);
                            setTimeout(function () {
                                d.removeClass("btn spinner spinner-white spinner-right").attr("disabled", !1), n.validate().resetForm();
                                //var n = t.find(".kt-login__signin form");
                                $('#message_container').replaceWith("<div id=\"message\" style=\" padding:15px;margin: 15px; width:100% ; background:lightgreen \" > " + responseObject.msg + " </div>")

                            }, 1)
                            $("#login-submit").prop('disabled', false)

                        } else if (code === 300) {
                            $('#message_container').replaceWith("<div id=\"message\" style=\" padding:15px;margin: 15px; width:100% ; background:#dd4b39 \" > " + responseObject.msg + " </div>")

                            $("#login-submit").prop('disabled', false)
                            // k(n,"danger",responseObject.msg);
                            // d.removeClass("btn spinner spinner-white spinner-right").attr("disabled", !1);

                        }else{
                            $('#message_container').replaceWith("<div id=\"message\" style=\" padding:15px;margin: 15px; width:100% ; background:#dd4b39 \" > something went wrong </div>")

                            $("#login-submit").prop('disabled', false)
                        }

                    }

                }
            )
    )


}


function handlePortal() {
    if (sessionStorage.getItem('token')) {
        window.location = `https://account.tanfwa.or.tz/verify/${sessionStorage.getItem('token')}`

    } else {
        alert("Please sigin first")
    }
}
