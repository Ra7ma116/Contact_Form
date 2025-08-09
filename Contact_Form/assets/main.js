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

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    subjectError.style.display = 'none';
    messageError.style.display = 'none';

    if (!name) {
        nameError.style.display = 'block';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    }

    if (!subject) {
        subjectError.style.display = 'block';
        isValid = false;
    }

    if (!message) {
        messageError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
