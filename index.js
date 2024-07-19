document.addEventListener("DOMContentLoaded", function () {
  // Handle Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  const messageSubmit = document.getElementById("messageSubmit");
  const submitButton = contactForm.querySelector('button[type="submit"]');

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    submitButton.style.display = "none";
    messageSubmit.style.display = "block";

    setTimeout(() => {
      contactForm.reset();
      submitButton.style.display = "block";
      messageSubmit.style.display = "none";
    }, 2000);
  });

  // JS code for valid contact number
  const contactInput = document.getElementById("contact");
  contactInput.addEventListener("input", function () {
    if (!/^\d{10}$/.test(contactInput.value)) {
      alert("Please enter a valid 10-digit contact number.");
    }
  });

  // JS code for Pop-up section
  const popupBanner = document.getElementById("popup-banner");
  function showPopup() {
    popupBanner.style.display = "block";
  }

  setTimeout(showPopup, 2000);

  window.hidepopup = function () {
    popupBanner.style.display = "none";
  };

  // JS for dark mode toggle button
  const toggleButton = document.getElementById("dark-mode-toggle");
  let count = 0;

  toggleButton.addEventListener("click", () => {
    count++;
    if (count % 2 === 0) {
      document.body.className = "light-mode";
      toggleButton.textContent = "Dark Mode";
    } else {
      document.body.className = "dark-mode";
      toggleButton.textContent = "Light Mode";
    }
  });

  // Store form data in localStorage
  const storebtn = document.getElementById("formbtn");
  storebtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const contactnumber = document.getElementById("contact").value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);
    localStorage.setItem("contact", contactnumber);
  });

  // JS for option to choose between programs
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close");

  setTimeout(() => {
    popup.style.display = "block";
  }, 1000);

  closeBtn.onclick = function () {
    popup.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };
});

function selectOption(option) {
  let url = "";
  switch (option) {
    case "DSA":
      url = "https://example.com/dsa-demo";
      break;
    case "CP":
      url = "https://example.com/cp-demo";
      break;
    case "JavaScript":
      url = "https://example.com/javascript-demo";
      break;
  }
  window.location.href = url;
}
