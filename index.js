function submitForm() {
    // Clear previous error messages
    clearErrorMessages();

    // Get form values
    var firstname = document.getElementById('firstname').value.trim();
    var lastname = document.getElementById('lastname').value.trim();
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var profession = document.getElementById('profession').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();  

    // Validate input fields
    var isValid = true;

    if (!firstname) {
        displayErrorMessage('firstname', 'First name is required.');
        isValid = false;
    }

    if (!lastname) {
        displayErrorMessage('lastname', 'Last name is required.');
        isValid = false;
    }

    if (!dob) {
        displayErrorMessage('dob', 'Date of Birth is required.');
        isValid = false;
    }

    if (country === "Choose a country") {
        displayErrorMessage('country', 'Please select a country.');
        isValid = false;
    }

    if (!gender) {
        displayErrorMessage('gender', 'Gender is required.');
        isValid = false;
    }

    if (!profession) {
        displayErrorMessage('profession', 'Profession is required.');
        isValid = false;
    }

    if (!email || !isValidEmail(email)) {
        displayErrorMessage('email', 'Valid email is required.');
        isValid = false;
    }

    if (!phone || !isValidPhoneNumber(phone)) {
        displayErrorMessage('phone', 'Valid phone number is required.');
        isValid = false;
    }

    if (isValid) {
        // Display values in the modal
        document.getElementById('modalFirstname').textContent = firstname;
        document.getElementById('modalLastname').textContent = lastname;
        document.getElementById('modalDOB').textContent = dob;
        document.getElementById('modalCountry').textContent = country;
        document.getElementById('modalGender').textContent = gender.value;
        document.getElementById('modalProfession').textContent = profession;
        document.getElementById('modalEmail').textContent = email;
        document.getElementById('modalPhone').textContent = phone;

        // Show the modal
        document.getElementById('myModal').style.display = 'block';
    }
}

function resetForm() {
    // Reset form
    document.getElementById('registrationForm').reset();
    // Clear previous error messages
    clearErrorMessages();
}

function closeModal() {
    // Close the modal and reset the form
    document.getElementById('myModal').style.display = 'none';
    resetForm();
}

function clearErrorMessages() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}

function displayErrorMessage(fieldId, message) {
    var errorElement = document.getElementById(fieldId + '-error');
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

function isValidEmail(email) {
    // You can implement a more thorough email validation logic here
    return /\S+@\S+\.\S+/.test(email);
}

function isValidPhoneNumber(phone) {
    // You can implement a more thorough phone number validation logic here
    return /^[0-9]{10}$/.test(phone);
}