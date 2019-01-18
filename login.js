var femail, fpassword, i, $, ecount, femaillength, emaillength;
var users = [];

function Submit() {
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    users = JSON.parse(window.localStorage.getItem('Users'));
    femail = document.form.email.value;
    fpassword = document.form.password.value;


    if (femail === "") {
        document.form.email.focus();
        return false;

    } else if (!emailRegex.test(femail)) {
        document.form.email.focus();
        return false;
    }

    if (fpassword === "") {
        document.form.password.focus();

        return false;
    }

    if (femail !== '' && fpassword !== '') {

        for (i = 0; users.length >= i; i + 1) {
            if (users[i].email === femail) {
                if (users[i].password === fpassword) {
                    alert('Login Successfully');
                }
            }
        }
    }

}

ecount = 0;
femaillength = 0;
$(".form-control-email").keypress(function (event) {
    $(".form-group-email").addClass("has-error");
    $(".fcfe").addClass("glyphicon glyphicon-warning-sign");
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var femail = document.form.email.value;
    if (emailRegex.test(femail)) {
        femaillength = femail.length;
        $(".form-group-email").removeClass("has-error");
        $(".form-group-email").addClass("has-success");
        $(".fcfe").removeClass("glyphicon glyphicon-warning-sign");
        $(".fcfe").addClass("glyphicon glyphicon-ok-sign");
    }
    ecount++;
});


$(".form-control-email").keydown(function (event) {
    if (event.which === 8) {

        var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
        femail = document.form.email.value;
        emaillength = femail.length - 2;

        if (emaillength < femaillength) {
            $(".form-group-email").addClass("has-error");
            $(".form-group-email").removeClass("has-success");
            $(".fcfe").removeClass("glyphicon glyphicon-ok-sign");
            $(".fcfe").addClass("glyphicon glyphicon-warning-sign");
        }
        if (!emailRegex.test(femail)) {

            $(".form-group-email").addClass("has-error");
            $(".form-group-email").removeClass("has-success");
            $(".fcfe").removeClass("glyphicon glyphicon-ok-sign");
            $(".fcfe").addClass("glyphicon glyphicon-warning-sign");
            if (femail.length < 2) {
                $(".fcfe").removeClass("glyphicon glyphicon-warning-sign");
                $(".form-group-email").removeClass("has-error");
            }

        }

    }


});
