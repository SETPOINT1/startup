document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('open');
            if (mainNav.style.display === 'block') {
                mainNav.style.display = 'none';
            } else {
                mainNav.style.display = 'block';
            }
        });

        // Close the nav menu if a link is clicked
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerMenu.classList.remove('open');
                mainNav.style.display = 'none';
            });
        });
    }

    // Form Validation (Login, Register)
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            if (!validateLoginForm()) {
                event.preventDefault(); // Prevent form submission
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            if (!validateRegisterForm()) {
                event.preventDefault(); // Prevent form submission
            }
        });
    }

    function validateLoginForm() {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        if (!emailInput.value || !passwordInput.value) {
            alert('Please fill in all fields.');
            return false;
        }

        // Add more validation logic here (e.g., email format, password strength)

        return true;
    }

    function validateRegisterForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        if (!nameInput.value || !emailInput.value || !passwordInput.value) {
            alert('Please fill in all fields.');
            return false;
        }

        // Add more validation logic here (e.g., email format, password strength)

        return true;
    }

    // Password Strength Meter (Register)
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        const passwordStrengthMeter = document.createElement('div');
        passwordStrengthMeter.classList.add('password-strength-meter');
        passwordInput.parentNode.insertBefore(passwordStrengthMeter, passwordInput.nextSibling);

        passwordInput.addEventListener('input', function() {
            const password = passwordInput.value;
            const strength = calculatePasswordStrength(password);
            updatePasswordStrengthMeter(strength);
        });

        function calculatePasswordStrength(password) {
            let strength = 0;
            if (password.length >= 8) strength++;
            if (password.match(/[a-z]+/)) strength++;
            if (password.match(/[A-Z]+/)) strength++;
            if (password.match(/[0-9]+/)) strength++;
            if (password.match(/[^a-zA-Z0-9]+/)) strength++;
            return strength;
        }

        function updatePasswordStrengthMeter(strength) {
            passwordStrengthMeter.className = 'password-strength-meter';
            switch (strength) {
                case 0:
                    passwordStrengthMeter.textContent = 'Very Weak';
                    passwordStrengthMeter.classList.add('very-weak');
                    break;
                case 1:
                    passwordStrengthMeter.textContent = 'Weak';
                    passwordStrengthMeter.classList.add('weak');
                    break;
                case 2:
                    passwordStrengthMeter.textContent = 'Fair';
                    passwordStrengthMeter.classList.add('fair');
                    break;
                case 3:
                    passwordStrengthMeter.textContent = 'Good';
                    passwordStrengthMeter.classList.add('good');
                    break;
                case 4:
                    passwordStrengthMeter.textContent = 'Strong';
                    passwordStrengthMeter.classList.add('strong');
                    break;
                case 5:
                    passwordStrengthMeter.textContent = 'Very Strong';
                    passwordStrengthMeter.classList.add('very-strong');
                    break;
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                question.setAttribute('aria-expanded', 'false');
            } else {
                answer.style.display = 'block';
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
});