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


document.addEventListener('DOMContentLoaded', function() {
    var popupBanner = document.getElementById('popup-banner');
    var closeBtn = document.getElementById('close-btn');

   
    function showPopup() {
        popupBanner.style.display = 'block';
    }

    
    closeBtn.addEventListener('click', function() {
        popupBanner.style.display = 'none';
    });

    setTimeout(showPopup, 1000);
    var navbarLinks = document.querySelectorAll('.navbarlink');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
