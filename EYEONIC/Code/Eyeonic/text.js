let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}


// function validateForm(){
//     var email = document.getElementById("email").value;

//     var emailError = document.getElementById("emailError");

//     emailError.innerHTML = "";

//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if(!emailPattern.test(email)){
//         emailError.innerHTML = "Invalid email address";
//         return false;
//     }
//     return true;
// }