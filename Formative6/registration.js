function submitForm() {
    var form = document.getElementById("registrationForm");

    var isValid = form.checkValidity();

    var dateOfBirth = form.elements["DateOfBirth"].value;
    var mobileNumber = form.elements["mobilenumber"].value;
    var radioValue = form.querySelector('input[name="gender"]:checked').value;

    if (!isValid || dateOfBirth.length < 10 || mobileNumber.length < 13) {
        form.reportValidity();
    } else {
        window.location.href = "https://mangklutz.github.io/Formative6/login";
    }
}
