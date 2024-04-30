function validateForm() {
    var name = document.getElementById('name').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
 

    var nameError = document.getElementById('nameError');
    var phonenumberError = document.getElementById('phonenumberError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');
   

    // Reset error messages
    nameError.innerHTML = "";
    phonenumberError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";

    // Validate Name
    if (name === "") {
        nameError.innerHTML = "Name is Required";
        return false;
    }

    // Validate phonenumber
    if (phonenumber === "") {
        phonenumberError.innerHTML = "Phone Number is Required";
        return false;
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Invalid Email Address";
        return false;
    }

    // Validate message
    if (message.length < 6) {
        messageError.innerHTML = "Message is Required";
        return false;
    }

   

    // Form is valid
    return true;
}
