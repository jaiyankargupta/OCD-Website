document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const messageSubmit = document.getElementById('messageSubmit');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        submitButton.style.display = 'none';
        messageSubmit.style.display = 'block';

        setTimeout(() => {
            contactForm.reset();
            submitButton.style.display = 'block';
            messageSubmit.style.display = 'none';
        }, 2000);
    });
});

// JS code for valid contact number

var contactNumber = document.getElementById('contactNumber').value;
    if (!/^\d{10}$/.test(contactNumber)) {
        alert('Please enter a valid 10-digit contact number.');
    }

// JS code for Pop-up section 

document.addEventListener('DOMContentLoaded', function() {
    var popupBanner = document.getElementById("popup-banner");
    var closeBtn = document.getElementById("close-btn");

    // Function to show the popup banner
    function showPopup() {
        popupBanner.style.display = 'block';
    }

    // Function to close the popup banner
    closeBtn.addEventListener("click", function() {
        popupBanner.style.display = "none";
    });

    setTimeout(showPopup, 1000);
});

// JS for dark mode toggle button

document.addEventListener('DOMContentLoaded', () => {
    
    const toggleButton = document.getElementById('dark-mode-toggle');


    let Count = 0;

    
    toggleButton.addEventListener('click', () => {
       
        Count++;

        if (Count % 2 === 0) {
            document.body.className = 'light-mode';
            toggleButton.textContent = 'Dark Mode';
        } else {
            document.body.className = 'dark-mode';
            toggleButton.textContent = 'Light Mode';
        }
    });
});


const storebtn=document.getElementById("formbtn");
storebtn.addEventListener("click",()=>{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;
    const contactnumber=document.getElementById("contact").value;
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("message",message);
    localStorage.setItem("contact",contactnumber);
})

// JS for option to choose between programms
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');

    // Show the popup after a delay (e.g., 1 second)
    setTimeout(() => {
        popup.style.display = 'block';
    }, 1000);

    // Close the popup when the user clicks the close button
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    };

    // Close the popup when the user clicks anywhere outside of the popup content
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    };
});

function selectOption(option) {
    let url = '';
    switch(option) {
        case 'DSA':
            url = 'https://example.com/dsa-demo';
            break;
        case 'CP':
            url = 'https://example.com/cp-demo';
            break;
        case 'JavaScript':
            url = 'https://example.com/javascript-demo';
            break;
    }
    window.location.href = url;
}
