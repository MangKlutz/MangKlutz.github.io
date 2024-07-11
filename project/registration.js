document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const country = document.getElementById('countryRegion').value;
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;

    if (!country || !year || !month || !day) {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
        // Add your form submission logic here
    }
});

let formIsDirty = false;

document.getElementById('registrationForm').addEventListener('change', function () {
    formIsDirty = true;
});

window.addEventListener('beforeunload', function (e) {
    if (formIsDirty) {
        e.preventDefault();
        e.returnValue = '';
    }
});

const confirmExit = document.getElementById('confirmExit');
const exitModal = new bootstrap.Modal(document.getElementById('exitModal'), {
    keyboard: false,
    backdrop: 'static'
});

window.addEventListener('beforeunload', function (e) {
    if (formIsDirty) {
        e.preventDefault();
        exitModal.show();
        return false;
    }
});

confirmExit.addEventListener('click', function () {
    formIsDirty = false;
    exitModal.hide();
    window.location.reload();
});
