var validate = function(e) {
    var fields = document.querySelectorAll('.form-container textarea, .form-container input[type="text"]');
    var regEx;
    var removeSpan;
    var par;
    var check = false;
    var val;
    var errArr = [];

    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value === "") {
          
            if (fields[i].nextElementSibling.classList.contains('error')) {
              removeSpan = fields[i].nextElementSibling;
              par = fields[i].parentNode;
              par.removeChild(removeSpan);
              fields[i].nextElementSibling.innerHTML = "Hmmm! " + fields[i].placeholder + " is required?";
              fields[i].style.boxShadow = "0 0 1px 1px #cc0001";
              check = false;
              errArr.push(fields[i]);
            }
            fields[i].nextElementSibling.innerHTML = "Hmmm! " + fields[i].placeholder + " is required?";
            fields[i].style.boxShadow = "0 0 1px 1px #cc0001";
            check = false;
            errArr.push(fields[i]);
        } else {

            // check if message and name values contain valid characters.
            if (fields[i].id !== 'email' && fields[i].id !== 'phone') {
                val = isValidChar(fields[i]);
                if(val === false) {
                  fields[i].nextElementSibling.innerHTML = "Required field is not valid";
                  fields[i].style.boxShadow = "0 0 1px 1px #cc0001";
                  check = false;
                  errArr.push(fields[i]);
                } else {
                  fields[i].nextElementSibling.innerHTML = "";
                  fields[i].style.boxShadow = "none";
                  check = true;
                }
            }
          
            if(fields[i].id === 'phone') {
              val = isValidPhone(fields[i]);
              if(val === false) {
                fields[i].nextElementSibling.innerHTML = "Hmmm! Your phone number is not valid?";
                fields[i].style.boxShadow = "0 0 1px 1px #cc0001";
                check = false;
                errArr.push(fields[i]);
              } else {
                fields[i].nextElementSibling.innerHTML = "";
                fields[i].style.boxShadow = "none";
                check = true;  
              }
            }

            if (fields[i].id === 'email') {
                val = isValidEmail(fields[i]);
                if(val === false) {
                    fields[i].nextElementSibling.innerHTML = "Hmmm! Your email address is not valid?";
                    fields[i].style.boxShadow = "0 0 1px 1px #cc0001";
                    check = false;
                    errArr.push(fields[i]);
                } else {
                    fields[i].nextElementSibling.innerHTML = "";
                    fields[i].style.boxShadow = "none";
                    check = true;
                }
            }
        }
    }
  
    if(check === false) {
      var count = 0;
      var toErr = setInterval(function() {
        var e = errArr[0].offsetTop + -25;
        var pos = Math.abs(e);
        if(count < pos) {
          count ++;
          window.scrollTo(0, count);
        } else {
          clearInterval(toErr);
        }
      }, 1);
    }
    
    return check

    // Helper functions.
    function isValidEmail(e) {
        regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email = e.value;
        if (!regEx.test(email)) {
            return false;
        }
    }

    function isValidChar(e) {
        regEx = /^[a-zA-Z ]{2,30}$/;
        var value = e.value;
        if (!regEx.test(value)) {
            return false;
        }
    }
  
    function isValidPhone(e) {
      regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      var value = e.value;
      if(!regEx.test(value)) {
        return false;
      }
    }
};