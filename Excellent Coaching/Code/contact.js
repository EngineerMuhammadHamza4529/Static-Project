function validation() {
    let uname = document.getElementById('uname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    let number = document.getElementById('num').value;

    let nameCheck = /^[a-zA-Z].{3,20}$/;
    let emailCheck = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    let passCheck = /^(?=.*\d)(?=.*[!@#$&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let numCheck = /^(\+92|0)[0-9]{10}$/;

    if (nameCheck.test(uname)) {
        document.getElementById('nameError').innerHTML = "";
    }
    else {
        document.getElementById('nameError').innerHTML = "** Invalid username";
        return false;
    }


    if (emailCheck.test(email)) {
        document.getElementById('emailError').innerHTML = "";
    }
    else {
        document.getElementById('emailError').innerHTML = "** Invalid User Email";
        return false;
    }


    if (passCheck.test(password)) {
        document.getElementById('passError').innerHTML = "";
    }
    else {
        document.getElementById('passError').innerHTML = "** Invalid Password";
        return false;
    }


    if (numCheck.test(number)) {
        document.getElementById('numError').innerHTML = "";
    }
    else {
        document.getElementById('numError').innerHTML = "** Invalid Contact Number";
        return false;
    }

    if (nameCheck.test(uname) && emailCheck.test(email) && passCheck.test(password) && numCheck.test(number)) {
        alert("Your Form Has Been Succesfully Submitted")
    }
    else {
        alert("Your Form Was Not Submitted")
    }
    return true;
}