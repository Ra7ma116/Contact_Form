// Form validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    let isValid = true;

    // Reset error messages
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    subjectError.style.display = 'none';
    messageError.style.display = 'none';

    // Name validation
    if (!name) {
        nameError.style.display = 'block';
        isValid = false;
        document.getElementById('name').focus();
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailError.style.display = 'block';
        isValid = false;
        if (isValid) document.getElementById('email').focus();
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
        if (isValid) document.getElementById('email').focus();
    }

    // Subject validation
    if (!subject) {
        subjectError.style.display = 'block';
        isValid = false;
        if (isValid) document.getElementById('subject').focus();
    } else if (subject.length < 5) {
        subjectError.textContent = 'Subject should be at least 5 characters';
        subjectError.style.display = 'block';
        isValid = false;
        if (isValid) document.getElementById('subject').focus();
    }

    // Message validation
    if (!message) {
        messageError.style.display = 'block';
        isValid = false;
        if (isValid) document.getElementById('message').focus();
    } else if (message.length < 10) {
        messageError.textContent = 'Message should be at least 10 characters';
        messageError.style.display = 'block';
        isValid = false;
        if (isValid) document.getElementById('message').focus();
    }

    // If form is valid, submit it
    if (isValid) {
        submitForm();
    }
}

// Form submission
function submitForm() {
    const submitBtn = document.querySelector('.submit-btn');
    const submitText = document.getElementById('submitText');
    const submitLoader = document.getElementById('submitLoader');

    // Show loading state
    submitText.style.display = 'none';
    submitLoader.style.display = 'inline';
    submitBtn.disabled = true;

    // Simulate API call (replace with actual form submission)
    setTimeout(() => {
        // Show success message
        document.getElementById('successMessage').style.display = 'block';

        // Reset form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
        document.getElementById('charCounter').textContent = '0/500';

        // Reset button state
        submitText.style.display = 'inline';
        submitLoader.style.display = 'none';
        submitBtn.disabled = false;

        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);

        // Add celebration effect
        celebrate();
    }, 1500);
}

// Celebration effect
function celebrate() {
    const container = document.querySelector('.contact-form-container');
    const confettiCount = 30;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = ['🎉', '✨', '🌟', '💫'][Math.floor(Math.random() * 4)];
        confetti.style.position = 'absolute';
        confetti.style.fontSize = '24px';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -30 + 'px';
        confetti.style.opacity = '0';
        confetti.style.animation = `confettiFall ${2 + Math.random() * 3}s ease-in forwards`;
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        container.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    // Add animation to CSS
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Character counter
document.getElementById('message').addEventListener('input', function () {
    const count = this.value.length;
    const counter = document.getElementById('charCounter');
    counter.textContent = `${count}/500`;

    if (count > 500) {
        counter.style.color = '#f43f5e';
    } else {
        counter.style.color = '';
    }
});

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    // Add animation to toggle switch
    const toggle = document.querySelector('.toggle-switch');
    toggle.style.animation = 'pulse 0.4s ease';
    setTimeout(() => {
        toggle.style.animation = '';
    }, 400);
}

// Check for saved dark mode preference
document.addEventListener('DOMContentLoaded', function () {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
    }

    // Add input focus animations
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.style.transform = 'scale(1.01)';
        });

        input.addEventListener('blur', function () {
            this.parentElement.style.transform = '';
        });
    });
});
