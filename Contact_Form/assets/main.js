document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset error states
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('invalid');
    });

    let isValid = true;

    // Validate Full Name
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        showError('fullName', 'nameError');
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        showError('email', 'emailError');
        isValid = false;
    }

    // Validate Subject
    const subject = document.getElementById('subject').value;
    if (subject === '') {
        showError('subject', 'subjectError');
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        showError('message', 'messageError');
        isValid = false;
    }

    // If valid, show popup and reset form
    if (isValid) {
        showSuccessPopup();
        this.reset();
    }
});

function showError(inputId, errorId) {
    document.getElementById(errorId).style.display = 'block';
    document.getElementById(inputId).parentElement.classList.add('invalid');
}

function showSuccessPopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

// Toggle Dark Mode
const toggleBtn = document.getElementById('toggleMode');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save to localStorage
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
});

// Load mode on page load
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
