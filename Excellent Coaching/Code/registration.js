function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    // Reset error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";

    // Validate Name
    if (name === "") {
        nameError.innerHTML = "Name is required";
        return false;
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Invalid email address";
        return false;
    }

    // Validate Password
    if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters";
        return false;
    }

    // Validate Confirm Password
    if (confirmPassword === "") {
        confirmPasswordError.innerHTML = "Please confirm your password";
        return false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.innerHTML = "Passwords do not match";
        return false;
    }

    // Form is valid
    
    else{
        alert("Your form is submitted!")
    }
}
