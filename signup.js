var $, users, firstname, lastname, phone, femail, fpassword, repassword, refferal, ischecked;

window.onload = function () {
    users = JSON.parse(window.localStorage.getItem('Users'));
}


function newregister() {
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var passwordRegex = /^.*(?=.{6,10})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).*$/;


    firstname = document.regform.fname.value;
    lastname = document.regform.lname.value;
    phone = document.regform.regphone.value
    femail = document.regform.regemail.value;
    fpassword = document.regform.regpass.value;
    repassword = document.regform.reegpass.value;
    refferal = document.regform.refferrr.value;
    ischecked = $('input[type = "checkbox"]').prop('checked');

    if (firstname === "") {
        document.regform.fname.focus();
        return false;
    }
    if (lastname === "") {
        document.regform.lname.focus();
        return false;
    }
    if (femail === "") {
        document.regform.regemail.focus();

        return false;
    }

    if (fpassword === "") {
        document.regform.regpass.focus();
        return false;
    }

    if (repassword === "") {
        document.regform.reegpass.focus();
        return false;
    } else if (repassword !== fpassword) {
        document.regform.reegpass.focus();
        return false;
    }
    if (refferal === "") {
        document.regform.refferrr.focus();
        return false;
    }
    if (ischecked === false) {
        alert("please check under terms and condition!");
        return false;

    }

    if (firstname !== " " && lastname !== " " && femail !== " " && fpassword !== " " && repassword !== " " && refferal !== " " && ischecked !== false) {

        var map = {
            'Firstname': firstname,
            'LastName': lastname,
            'email': femail,
            'password': fpassword,
            're-password': repassword,
            'Refferal': refferal,
        }


        users.push(map);
        window.localStorage.setItem('Users', JSON.stringify(users));

        document.regform.fname.value = "";
        document.regform.lname.value = "";
        document.regform.regphone.value = "";
        document.regform.regemail.value = "";
        document.regform.regpass.value = "";
        document.regform.reegpass.value = "";
        document.regform.refferrr.value = "";
        $(".has-feedback").removeClass("has-warning");
        $(".form-control-feedback").removeClass("glyphicon glyphicon glyphicon-warning-sign");

        $(".has-feedback").removeClass("has-success");
        $(".form-control-feedback").removeClass("glyphicon glyphicon glyphicon-ok");

        alert("Registered Successfully");
    }

}
