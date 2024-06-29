document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var usernameError = document.getElementById('username-error');
    var passwordError = document.getElementById('password-error');

    errorMessage.style.display = "none";
    usernameError.textContent = "";
    passwordError.textContent = "";

    if (username === "" || password === "") {
        if (username === "") {
            usernameError.textContent = "Please fill out the forms needed";
        }
        if (password === "") {
            passwordError.textContent = "Please fill out the forms needed";
        }
    } else {
        errorMessage.textContent = "User information not found";
        errorMessage.style.display = "block";
    }
});
