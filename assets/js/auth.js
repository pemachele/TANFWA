const thePath = window.location.href;
const path = thePath.substring(thePath.lastIndexOf("/") + 1);


function auth() {

    if(path==="constitution.html"){
        if (sessionStorage.getItem('token')) {
            $('#download_con').replaceWith("<div id=\"download_con\" >\n" +
                "                                    <a href=\"assets/img/tan/TANFWA_CONSTITUTION.pdf\" download=\"TANFWA_CONSTITUTION\" >\n" +
                "\n" +
                "                                        <div class=\"mt10 btn-2\"\n" +
                "                                             style=\"background: #fcb444; justify-content: center; align-items: center; display: flex \">\n" +
                "                                            Download\n" +
                "                                        </div>\n" +
                "\n" +
                "\n" +
                "                                    </a>\n" +
                "                                </div>")

        } else {
            $('#download_con').replaceWith(" <div id=\"download_con\" >\n" +
                "                                    <a href=\"signin.html\">\n" +
                "\n" +
                "                                        <div class=\"mt10 btn-2\"\n" +
                "                                             style=\"background: #fcb444; justify-content: center; align-items: center; display: flex \">\n" +
                "                                            login\n" +
                "                                        </div>\n" +
                "\n" +
                "\n" +
                "                                    </a>\n" +
                "                                </div>")
        }

    }else if ( path === "rules-and-regulations.html"){
        if (sessionStorage.getItem('token')) {
            $('#download_rules').replaceWith("<div id=\"download_rules\" >\n" +
                "                                    <a href=\"assets/img/tan/RULE-AND-REGULATION.pdf\">\n" +
                "\n" +
                "                                        <div class=\"mt10 btn-2\"\n" +
                "                                             style=\"background: #fcb444; justify-content: center; align-items: center; display: flex \">\n" +
                "                                            DOWNLOAD Pdf\n" +
                "                                        </div>\n" +
                "\n" +
                "\n" +
                "                                    </a>\n" +
                "                                </div>")

        } else {
            $('#download_rules').replaceWith(" <div id=\"download_rules\" >\n" +
                "                                    <a href=\"signin.html\">\n" +
                "\n" +
                "                                        <div class=\"mt10 btn-2 \"\n" +
                "                                             style=\"background: #fcb444; justify-content: center; align-items: center; display: flex \">\n" +
                "                                            LOGIN\n" +
                "                                        </div>\n" +
                "\n" +
                "\n" +
                "                                    </a>\n" +
                "                                </div>")
        }

    }
    if ( path === "banking-details.html"){

        if (sessionStorage.getItem('token')) {
            $('#download_rules').replaceWith(" <div id=\"banking-details-div\" >\n" +
                "                                <p>\n" +
                "                                    Payments can be made through T-PESA no: 0733 000 996 or NMB BANK PLC - Account No.\n" +
                "                                    22510063392 – MLIMANI CITY BRANCH;\n" +
                "                                    ACCOUNT NAME: TANZANIA ACADEMIC AND NON-FICTION WRITERS ASSOCIATION\n" +
                "                                </p>\n" +
                "                            </div>")

        } else {
            $('#banking-details-div').replaceWith(" <div id=\"banking-details-div\" >\n" +
                "                                    <a href=\"signin.html\">\n" +
                "\n" +
                "                                        <div class=\"mt10 btn-2\"\n" +
                "                                             style=\"background: #fcb444; justify-content: center; align-items: center; display: flex \">\n" +
                "                                            LOGIN\n" +
                "                                        </div>\n" +
                "\n" +
                "\n" +
                "                                    </a>\n" +
                "                                </div>")
        }
    }

    if ( path === "signin.html"){

        if (sessionStorage.getItem('token')) {
            $('#jj').replaceWith(" <div> </div>")

        } else {
            $('#jj').replaceWith("" +
                "<div   style=\"margin: 0px 100px 0px 100px\" id =\"jj\">\n" +
                "                        <form method=\"post\" id=\"login-form\" >\n" +
                "                            <div class=\"row\" id=\"message_container\">\n" +
                "\n" +
                "                            </div>\n" +
                "                            <div class=\"row\">\n" +
                "                                <div class=\"col-md-12\">\n" +
                "                                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\"\n" +
                "                                           placeholder=\"Email\">\n" +
                "                                </div>\n" +
                "                                <div class=\"col-md-12\">\n" +
                "                                    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\"\n" +
                "                                           placeholder=\"Password\">\n" +
                "                                </div>\n" +
                "\n" +
                "\n" +
                "                            </div>\n" +
                "                        </form>\n" +
                "                        <div class=\"col-md-12 mt20\">\n" +
                "                            <button id=\"login-submit\" class=\"btn-2\" onclick=send_data()>Signin</button>\n" +
                "                        </div>\n" +
                "                    </div>")
        }
    }

    if ( path === "signin.html?code=101"){

        if (sessionStorage.getItem('token')) {
           sessionStorage.removeItem('token')
           sessionStorage.removeItem('user_details')

        }
    }

}






jQuery(document).ready(function () {
   auth()


});