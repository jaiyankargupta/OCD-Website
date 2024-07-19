const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formResponse.style.display = "block";
  setTimeout(() => {
    contactForm.reset();
    formResponse.style.display = "none";
  }, 2000);
});

// JS code for Pop-up section

document.addEventListener("DOMContentLoaded", function () {
  var popupBanner = document.getElementById("popup-banner");
  var closeBtn = document.getElementById("close-btn");

  // Function to show the popup banner
  function showPopup() {
    popupBanner.style.display = "block";
  }
  // function to hide popup banner
  window.hidepopup = function () {
    const popup = document.getElementById("popup-banner");
    popup.style.display = "none";
  };
  setTimeout(showPopup, 700);
});

// JS for dark mode toggle button

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-mode-toggle");

  let Count = 0;

  toggleButton.addEventListener("click", () => {
    Count++;

    if (Count % 2 === 0) {
      document.body.className = "light-mode";
      toggleButton.textContent = "Dark Mode";
    } else {
      document.body.className = "dark-mode";
      toggleButton.textContent = "Light Mode";
    }
  });
});
