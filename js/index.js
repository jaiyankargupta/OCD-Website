// JS for mode toggle button

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    
    if (!toggleButton) {
        console.error('Dark mode toggle button not found');
        return;
    }

    // Check saved mode in localStorage
    
    const currentMode = localStorage.getItem('theme') || 'light';
    document.body.className = `${currentMode}-mode`;
    // toggleButton.textContent = currentMode === 'light' ? 'Dark Mode' : 'Light Mode'; // redundant as we now have icons 

    toggleButton.addEventListener('click', () => {
      const isDarkMode = document.body.classList.contains('dark-mode');
      
      if (isDarkMode) {
          document.body.className = 'light-mode';
          // toggleButton.textContent = 'Dark Mode';// redundant as we now have icons 
          localStorage.setItem('theme', 'light');
      } else {
          document.body.className = 'dark-mode';
          // toggleButton.textContent = 'Light Mode';// redundant as we now have icons 
          localStorage.setItem('theme', 'dark');
      }
    });
    const navToggle = document.getElementById('nav-toggle');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    if (!navToggle) {
        console.error('Navbar toggle button not found');
        return;
    }
    navToggle.addEventListener('click', () => {
      navLeft.classList.toggle('active');
      navRight.classList.toggle('active');
    });
});


// JS code for Pop-up section

document.addEventListener("DOMContentLoaded", function () {
  var popupBanner = document.getElementById("popup-banner");
  //   var closeBtn = document.getElementById("close-btn");

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

// JS code for Pop-up section ends here

// js code for Animation 
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.programs-section');
  const scrollPosition = window.scrollY + window.innerHeight;

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition > sectionTop + sectionHeight / 4) {
          section.classList.remove('hidden');
      } else {
          section.classList.add('hidden');
      }
  });
});

document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.team-section');
  const scrollPosition = window.scrollY + window.innerHeight;

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition > sectionTop + sectionHeight / 4) {
          section.classList.remove('hidden');
      } else {
          section.classList.add('hidden');
      }
  });
});

//for left to right slide effect

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

