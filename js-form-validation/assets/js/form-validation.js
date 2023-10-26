const form = document.getElementById('sample-form')
const inputInvalid = `invalid-input`
const inputValid = `invalid-success`
const inputs = form.querySelectorAll('input')

/** Form Submit */
form.addEventListener('submit', function(e){
    e.preventDefault();

    /** Validate input fields value */
    inputs.forEach(input => {
        validateFormInput(input)
    })
    
    /** Check for Invalid Input Values */
    if(form.querySelectorAll('input.input-invalid').length <= 0){
        alert("Form is input fields are valid.")
    }
})

/** Add Listener to input when user input a character */
inputs.forEach(input => {
    /** Validate input fields value */
    input.addEventListener('input', function(e){
        validateFormInput(input)
    })
})


/** Input Validation Checker */
window.validateFormInput = function(input){
    var label = input.parentNode.querySelector('label').innerText || "Input";
    var type = input.getAttribute('type') || "text";

    if(input.value === "" || input.value == null){
        /** Return Input as Invalid if empty */
        InvalidInput(input, `${label} field is required.`)
    }else if((type).toLowerCase() == "email"){
        /** Validate Email field */
        var inputEmail = input.value
        var emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(emailRegx.test(inputEmail)){
            ValidInput(input)
        }else{
            InvalidInput(input, `Please enter a valid email.`)
        }
    }else if((type).toLowerCase() == "url"){
        /** Validate URL field */
        var inputURL = input.value
        var emailRegx = /^(https|http)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
        if(emailRegx.test(inputURL)){
            ValidInput(input)
        }else{
            InvalidInput(input, `Please enter a valid URL. URL must start with https or http.`)
        }
    }else if((type).toLowerCase() == "password"){
        /** Validate Password field */

        var inputPass = input.value
        // Check if Password contains lower case character
        var hasAlphaLower = inputPass.match(/[a-z]/);
        // Check if Password contains upper case character
        var hasAlphaUpper = inputPass.match(/[A-Z]/);
        // Check if Password contains number character
        var hasNumber = inputPass.match(/[0-9]/);
        // Check if Password contains valid symbol character
        var hasSymbol = inputPass.match(/[\!\@\#\%\&\-\_]/);
        // Check if Password Length is >= 8
        var validLen = inputPass.length >= 8 ? true : false;
        // Check if Password contains invalid Characters
        var containsInvalid = (inputPass.replace(/[a-zA-Z0-9\!\@\#\%\&\-\_]/gi,"")).length;
        if(hasAlphaLower != null && hasAlphaUpper != null && hasNumber != null && hasSymbol != null && validLen && containsInvalid === 0){
            ValidInput(input)
        }else{
            InvalidInput(input, `Please enter a valid Password. Password must contain alphanumeric character and at least 1 valid special character.`)
        }
    }else{
        /** Return Success if input is validated */
        ValidInput(input)
    }
}

window.ValidInput = function(input){
    /** Update input as valid */
    input.parentNode.querySelector('.error-msg').innerText = ``
    if(input.classList.contains('input-invalid'))
        input.classList.remove('input-invalid')
    if(!input.classList.contains('input-success'))
        input.classList.add('input-success')
    return;
} 
window.InvalidInput = function(input, msg){
    /** Update input as invalid */
    input.parentNode.querySelector('.error-msg').innerText = `${msg}`
    if(input.classList.contains('input-success'))
        input.classList.remove('input-success')
    if(!input.classList.contains('input-invalid'))
        input.classList.add('input-invalid')
    return;
} 