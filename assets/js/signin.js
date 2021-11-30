function send_data(){
    var k=function (t, k, e) {
            var j = $('<div class="kt-alert kt-alert--outline alert alert-' + k + ' alert-dismissible" role="alert">\t\t\t<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\t\t\t<span></span>\t\t</div>');
            t.find(".alert").remove(), j.prependTo(t), KTUtil.animateClass(n[0], "fadeIn animated"), j.find("span").html(e)
        } ,
        d=$('#login-submit'),

        dataObject={
            code:102,
            api:150,
            data:{
                email:$('#email').val(),
                password:$('#password').val()}
        },

        n= $('#login-form');

    n.validate( {
        rules:{
            phone_number: {required: !0},
            password:{required: !0}

        }
    });

    n.valid() && (d.addClass("btn spinner spinner-white spinner-right").attr("disabled", !0),



            $.ajax(
                {
                    url:'"https://farnett.com/api/tanfwa"',
                    type:'POST',
                    data:JSON.stringify(dataObject),
                    content:( 'application/x-www-form-urlencoded; charset=UTF-8'),
                    success:function(response){
                        // decode the json string to a js object
                        var responseObject = JSON.parse(response);
                        // get the code from the create js object using js notation
                        var code  = responseObject.code;
                        // then do the if  for error or success
                        if (code === 200){
                            console.log('yess')
                            sessionStorage.setItem('user_details', responseObject.user_details)

                            setTimeout(function () {
                                d.removeClass("btn spinner spinner-white spinner-right").attr("disabled", !1), n.validate().resetForm();
                                //var n = t.find(".kt-login__signin form");
                                k(n, "success", "Authenticated");
                                window.location = "http://ec2-13-58-137-105.us-east-2.compute.amazonaws.com/adminWeb/grace/dashboard.html";
                            }, 1 )


                        } else if (code === 300) {
                            console.log('error')
                            k(n,"danger",responseObject.msg);
                            d.removeClass("btn spinner spinner-white spinner-right").attr("disabled", !1);

                        }

                    }

                }
            )
    )



}