// signup.js
document.addEventListener("DOMContentLoaded", function () {
    // DOM is fully loaded
    var signupForm = document.querySelector('form');

    signupForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Reset previous error messages
        resetErrorMessages();

        // Get form field values
        var username = getValue('username');
        var email = getValue('email');
        var password = getValue('password');
        var confirmPassword = getValue('confirmPassword');

        // Perform form validation
        if (!validateRequired(username, 'username')) return;
        if (!validateRequired(email, 'email')) return;
        if (!validateEmail(email)) return;
        if (!validateRequired(password, 'password')) return;
        if (!validateRequired(confirmPassword, 'confirmPassword')) return;
        if (!validatePasswordMatch(password, confirmPassword)) return;

        // If validation passes, simulate form submission success
        alert('Sign Up successful! Redirecting to the Home page.');
        window.location.href = 'index.html';
    });

    function getValue(elementId) {
        return document.getElementById(elementId).value.trim();
    }

    function validateRequired(value, fieldName) {
        if (value === '') {
            displayError(fieldName, 'Please enter ' + fieldName.toLowerCase() + '.');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        // Regular expression for a valid email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            displayError('email', 'Please enter a valid email address.');
            return false;
        }
        return true;
    }

    function validatePasswordMatch(password, confirmPassword) {
        if (password !== confirmPassword) {
            displayError('confirmPassword', 'Passwords do not match.');
            return false;
        }
        return true;
    }

    function displayError(fieldName, message) {
        var errorElement = document.getElementById(fieldName + '-error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function resetErrorMessages() {
        var errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(function (element) {
            element.textContent = '';
            element.style.display = 'none';
        });
    }
});
