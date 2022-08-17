function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function subscribe(){
    event.preventDefault()
    const email =$('#subscriber_email').val()

    if (isEmail(email)){
        const dataObject ={email:email}
        $("#button-load-container" ).empty();

        $("#button-load-container" ).append(
            "<div  style =\"align-self: center; margin: 0px 10px\" class=\"spinner-border text-danger\" role=\"status\">\n" +
            "  <span class=\"sr-only\">Loading...</span>\n" +
            "</div>"
        );
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )

        $.ajax(
            {
                url: 'https://api.tanfwa.or.tz/api/v1/subscribe',
                type: 'POST',
                data: JSON.stringify(dataObject),
                contentType: "application/json; charset=utf-8",
                success: function (response) {
                    /**
                     django returns a dynamic response based on client.
                     Meaning no need to jsonParse as the response is a js object
                     **/
                    var responseObject = response;
                    var code = responseObject.code;
                    if (code === 200) {
                        $("#button-load-container" ).empty();

                        $("#button-load-container" ).append(
                            " <button type=\"submit\" id=\"subscribe-button\" class=\"input-group-text\">Register</button>"
                        );



                    } else if (code === 300) {
                        $("#button-load-container" ).empty();

                        $("#button-load-container" ).append(
                            " <button type=\"submit\" id=\"subscribe-button\" class=\"input-group-text\">Register</button>"
                        );
                    }else{
                        $("#button-load-container" ).empty();

                        $("#button-load-container" ).append(
                            " <button type=\"submit\" id=\"subscribe-button\" class=\"input-group-text\">Register</button>"
                        );
                    }

                }

            }
        )
    }else{
        console.log("invalid email")
    }






}





function handlePortal() {
    if (sessionStorage.getItem('token')) {
        window.location = `https://account.tanfwa.or.tz/verify/${sessionStorage.getItem('token')}`

    } else {
        alert("Please sigin first")
    }
}
