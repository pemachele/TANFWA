const thePath = window.location.href;
const path = thePath.substring(thePath.lastIndexOf("/") + 1);

function handleLogin(path) {

    localStorage.setItem('path',path)
    window.location=`https://tanfwa.or.tz/signin.html`
}

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
            $('#download_con').replaceWith(" <div  class=\"text-center\" id=\"banking-details-div\" >\n" +
            "                                    <div class=\"text-center\" >\n" +
            "\n" +
            "                                        <button  onclick=\'handleLogin(\"constitution.html\")\' class=\"mt10 btn-2\"\n" +
            "                                             >\n" +
            "                                           SIGN IN\n" +
            "                                        </button>\n" +
            "\n" +
            "\n" +
            "                                    </div>\n" +
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
            $('#download_rules').replaceWith(" <div  class=\"text-center\" id=\"banking-details-div\" >\n" +
                "                                    <div class=\"text-center\" >\n" +
                "\n" +
                "                                        <button  onclick=\'handleLogin(\"rules-and-regulations.html\")\' class=\"mt10 btn-2\"\n" +
                "                                             >\n" +
                "                                           SIGN IN\n" +
                "                                        </button>\n" +
                "\n" +
                "\n" +
                "                                    </div>\n" +
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
            $('#banking-details-div').replaceWith(" <div  class=\"text-center\" id=\"banking-details-div\" >\n" +
                "                                    <div class=\"text-center\" >\n" +
                "\n" +
                "                                        <button  onclick=\'handleLogin(\"banking-details.html\")\' class=\"mt10 btn-2\"\n" +
                "                                             >\n" +
                "                                           SIGN IN\n" +
                "                                        </button>\n" +
                "\n" +
                "\n" +
                "                                    </div>\n" +
                "                                </div>")
        }
    }

    if ( path === "signin.html"){

        if (sessionStorage.getItem('token')) {
            $('#jj').replaceWith(" <div class=\"text-center\">   <div><button id=\"login-submit\" class=\"btn-2\" onclick='handlePortal()'>Dashboard</button></div> </div>")

        } else {
            $('#jj').replaceWith("" +
                "<div  id =\"jj\">\n" +
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
                "                        <div style='display: flex; justify-content: space-between' class=\"col-md-12 mt20\">\n" +
                "                           <div><button id=\"login-submit\" class=\"btn-2\" onclick=send_data()>SIGN IN</button></div>\n" +
                "                            <div><button id=\"register-button\" class=\"btn-2\" onclick=handleRegister()>REGISTER</button></div>\n" +
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