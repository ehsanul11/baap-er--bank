
// step-1: add event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {
//    get the email address inside the input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    //  step-3: get password and value
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    
    
    //DANGER: DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SITE

    // step-4: verify email and password and check whether valid user or not
    if (email === 'ehsanulhaque12@gmail.com' && password === 'leon') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid!!!!')
    }
})
