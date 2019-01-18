$(document).ready(function () {


    var fcount = 0;
    $("#fname").keypress(function (event) {

        fcount++;
        if (fcount < 3) {
            $(".fin").addClass("has-warning");
            $(".form-control-feedback-name").addClass("glyphicon glyphicon glyphicon-warning-sign");
        } else if (fcount > 2) {
            $(".fin").removeClass("has-warning");
            $(".form-control-feedback-name").removeClass("glyphicon glyphicon glyphicon-warning-sign");
            $(".fin").addClass("has-success");
            $(".form-control-feedback-name").addClass("glyphicon glyphicon glyphicon-ok");
        }


    });
    $("#fname").keydown(function (e) {
        if (e.which == 8) {
            fcount--;
            if (fcount < 1) {
                fcount = 0;
                $(".form-control-feedback-name").removeClass("glyphicon glyphicon glyphicon-warning-sign");
                $(".fin").removeClass("has-warning");
                $(".fin").removeClass("has-success");
            } else if (fcount < 3) {

                $(".fin").addClass("has-warning");
                $(".form-control-feedback-name").removeClass("glyphicon glyphicon glyphicon-ok");
                $(".form-control-feedback-name").addClass("glyphicon glyphicon glyphicon-warning-sign");
            }
        }
    });

    //////////////////// validation for lastname/////////////////////////
    var lcount = 0;
    $("#lname").keypress(function (event) {

        lcount++;
        if (lcount < 3) {
            $(".lin").addClass("has-warning");
            $(".form-control-feedback-lname").addClass("glyphicon glyphicon glyphicon-warning-sign");
        } else if (lcount > 2) {
            $(".lin").removeClass("has-warning");
            $(".form-control-feedback-lname").removeClass("glyphicon glyphicon glyphicon-warning-sign");
            $(".lin").addClass("has-success");
            $(".form-control-feedback-lname").addClass("glyphicon glyphicon glyphicon-ok");
        }


    });
    $("#lname").keydown(function (e) {
        if (e.which == 8) {
            lcount--;
            if (lcount < 1) {
                lcount = 0;
                $(".form-control-feedback-lname").removeClass("glyphicon glyphicon glyphicon-warning-sign");
                $(".lin").removeClass("has-warning");
                $(".lin").removeClass("has-success");
            } else if (lcount < 4) {

                $(".lin").addClass("has-warning");
                $(".form-control-feedback-lname").removeClass("glyphicon glyphicon glyphicon-ok");
                $(".form-control-feedback-lname").addClass("glyphicon glyphicon glyphicon-warning-sign");
            }
            console.log(lcount);
        }
    });
    //////////////////////Validation for phone //////////////////////////////
    var ercount = 0;
    var fphone = "";
    $("#phone").keyup(function (event) {
        $(".phonein").addClass("has-error");
        $(".form-control-feedback-phone").addClass("glyphicon glyphicon-warning-sign");
        document.regform.regphone.focus();
        var phoneRegex = /^[0-9]{10}$/;
        var fphone = document.regform.regphone.value;
        if (phoneRegex.test(fphone)) {

            $(".phonein").removeClass("has-error");
            $(".phonein").addClass("has-success");
            $(".form-control-feedback-phone").removeClass("glyphicon glyphicon-warning-sign");
            $(".form-control-feedback-phone").addClass("glyphicon glyphicon-ok");

        }
        ercount++;
    });


    $("#phone").keyup(function (event) {

        var phoneRegex = /^[0-9]{10}$/;
        var ffphone = document.regform.regphone.value;

        if (!phoneRegex.test(ffphone)) {
            $(".phonein").addClass("has-error");
            $(".phonein").removeClass("has-success");
            $(".form-control-feedback-phone").removeClass("glyphicon glyphicon-ok");
            $(".form-control-feedback-phone").addClass("glyphicon glyphicon-warning-sign");
            if (ffphone.length < 2) {
                $(".form-control-feedback-phone").removeClass("glyphicon glyphicon-warning-sign");
                $(".phonein").removeClass("has-error");
            }

        } else if (fphone === ffphone) {
            $(".phonein").removeClass("has-error");
            $(".phonein").addClass("has-success");
            $(".form-control-feedback-phone").removeClass("glyphicon glyphicon-warning-sign");
            $(".form-control-feedback-phone").addClass("glyphicon glyphicon-ok");
        }

    });

    ////////////////////// Validation for email //////////////////////////////
    var ercount = 0;
    $("#email").keypress(function (event) {
        $(".ein").addClass("has-error");
        $(".form-control-feedback-email").addClass("glyphicon glyphicon-warning-sign");
        document.regform.regemail.focus();
        var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
        var femail = document.regform.regemail.value;
        if (emailRegex.test(femail)) {

            $(".ein").removeClass("has-error");
            $(".ein").addClass("has-success");
            $(".form-control-feedback-email").removeClass("glyphicon glyphicon-warning-sign");
            $(".form-control-feedback-email").addClass("glyphicon glyphicon-ok");

        }
        ercount++;
    });


    $("#email").keydown(function (event) {

        var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
        var femail = document.regform.regemail.value;

        if (!emailRegex.test(femail)) {

            $(".ein").addClass("has-error");
            $(".ein").removeClass("has-success");
            $(".form-control-feedback-email").removeClass("glyphicon glyphicon-ok");
            $(".form-control-feedback-email").addClass("glyphicon glyphicon-warning-sign");
            if (femail.length < 2) {
                $(".form-control-feedback-email").removeClass("glyphicon glyphicon-warning-sign");
                $(".ein").removeClass("has-error");
            }

        }

    });

    ///////////////////////// validation for pass/////////////////\
    var pcount = 0;
    var fpass = "";
    $("#pass").keyup(function (event) {
        document.querySelector('.aaa').innerHTML = "Must Contain {a-z,A-Z,@#$,0-9}";
        $(".pin").addClass("has-error");
        $(".form-control-feedback-pass").addClass("glyphicon glyphicon-warning-sign");


        var passRegex = /^.*(?=.{6,10})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).*$/;
        fpass = document.regform.regpass.value;
        if (passRegex.test(fpass)) {
            $(".pin").removeClass("has-error");
            $(".pin").addClass("has-success");
            $(".form-control-feedback-pass").removeClass("glyphicon glyphicon-warning-sign");
            $(".form-control-feedback-pass").addClass("glyphicon glyphicon-ok");
            document.querySelector('.aaa').innerHTML = "";
        }
        pcount++;
    });



    $("#pass").keyup(function (e) {
        var passRegex = /^.*(?=.{6,10})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).*$/;
        var fpasss = document.regform.regpass.value;

        if (!passRegex.test(fpasss)) {

            $(".pin").addClass("has-error");
            $(".pin").removeClass("has-success");
            $(".form-control-feedback-pass").removeClass("glyphicon glyphicon-ok");
            $(".form-control-feedback-pass").addClass("glyphicon glyphicon-warning-sign");
            if (fpasss.length < 2) {
                $(".form-control-feedback-pass").removeClass("glyphicon glyphicon-warning-sign");
                $(".pin").removeClass("has-error");
                document.querySelector('.aaa').innerHTML = "";
            }

        }

    });
    /////////////////////////////////////////////////////////////////////
    $("#rpass").keyup(function (e) {

        var frpasss = document.regform.reegpass.value;

        if ((frpasss === fpass) && (frpasss.length === fpass.length)) {
            $(".form-control-feedback-rpass").removeClass("glyphicon glyphicon-warning-sign");
            $(".rpin").removeClass("has-error");
            $(".rpin").addClass("has-success");
            $(".form-control-feedback-rpass").addClass("glyphicon glyphicon-ok");

            if (frpasss.length < 1) {
                $(".form-control-feedback-rpass").removeClass("glyphicon glyphicon-warning-sign");
                $(".rpin").removeClass("has-error");
            }
        } else if ((frpasss !== fpass)) {
            $(".form-control-feedback-rpass").addClass("glyphicon glyphicon-warning-sign");
            $(".rpin").addClass("has-error");
        }
    });
    var rpassCount = 0;
    $("#rpass").keyup(function (e) {
        rpassCount++;
        if (e.which == 8) {
            var frrpasss = document.regform.reegpass.value;

            if (fpass != frrpasss) {
                $(".rpin").addClass("has-error");
                $(".form-control-feedback-rpass").addClass("glyphicon glyphicon-warning-sign");

                if (frrpasss.length < 2) {
                    $(".form-control-feedback-rpass").removeClass("glyphicon glyphicon-warning-sign");
                    $(".rpin").removeClass("has-error");
                    $(".rpin").removeClass("has-success");
                    $(".form-control-feedback-rpass").removeClass("glyphicon glyphicon-ok");

                }
            }
        }

    });

    $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == true) {
            return true;
        } else if ($(this).prop("checked") == false) {
            return false;
        }
    });




});
