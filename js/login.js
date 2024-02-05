// login.js
function updateNavigation(isAuthenticated) {
    var loginLink = document.getElementById('login-link');
    var signupLink = document.getElementById('signup-link');
    var logoutLink = document.getElementById('logout-link');
    var userProfileLink = document.getElementById('user-profile-link');

    // Check if elements exist before modifying style
    if (loginLink) {
        loginLink.style.display = isAuthenticated ? 'none' : 'block';
    }

    if (signupLink) {
        signupLink.style.display = isAuthenticated ? 'none' : 'block';
    }

    if (logoutLink) {
        logoutLink.style.display = isAuthenticated ? 'block' : 'none';
    }

    if (userProfileLink) {
        userProfileLink.style.display = isAuthenticated ? 'block' : 'none';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // DOM is fully loaded
    var loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Reset previous error messages
        resetErrorMessages();

        // Get form field values
        var username = getValue('username');
        var password = getValue('password');

        // Perform form validation
        if (!validateRequired(username, 'username')) return;
        if (!validateRequired(password, 'password')) return;

        // Simulate successful login
        if (username === 'demo' && password === 'password') {
            // Set authentication status to true
            localStorage.setItem('authenticated', 'true');

            // Update the navigation
            updateNavigation(true);

            // Redirect to index.html or user profile page
            window.location.href = 'index.html';
        } else {
            alert('Login failed. Please check your credentials.');
        }
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

    function updateNavigation(isAuthenticated) {
        var loginLink = document.getElementById('login-link');
        var signupLink = document.getElementById('signup-link');
        var logoutLink = document.getElementById('logout-link');
        var userProfileLink = document.getElementById('user-profile-link');

        // Check if elements exist before modifying style
        if (loginLink) {
            loginLink.style.display = isAuthenticated ? 'block' : 'none';
        }

        if (signupLink) {
            signupLink.style.display = isAuthenticated ? 'block' : 'none';
        }

        if (logoutLink) {
            logoutLink.style.display = isAuthenticated ? 'none' : 'block';
        }

        if (userProfileLink) {
            userProfileLink.style.display = isAuthenticated ? 'none' : 'block';
        }
    }
});
