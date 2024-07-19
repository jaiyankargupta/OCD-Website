function showLoginPopup() {
    document.getElementById('loginPopup').style.display = 'flex';
}
function hideLoginPopup() {
    document.getElementById('loginPopup').style.display = 'none';
}
// CAPTCHA Functions
function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captcha').textContent = captcha;
}

document.getElementById('refreshCaptcha').addEventListener('click', generateCaptcha);

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const enteredCaptcha = document.getElementById('captchaInput').value;
    const generatedCaptcha = document.getElementById('captcha').textContent;

    if (enteredCaptcha === generatedCaptcha) {
        alert('Login successful! Redirecting to the main website...');
        hideLoginPopup();
        //go to main website from here . add link
    } else {
        alert('CAPTCHA verification failed. Please try again.');
        generateCaptcha();
        document.getElementById('captchaInput').value = '';
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    formResponse.style.display = 'block';
    setTimeout(() => {
        contactForm.reset();
        formResponse.style.display = 'none';
    }, 2000);
});

generateCaptcha();