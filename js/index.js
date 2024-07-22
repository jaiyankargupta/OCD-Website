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

  //js code for hero dsection slider

  let slider = document.querySelector('.slider .list');
  let items = document.querySelectorAll('.slider .list .item');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let dots = document.querySelectorAll('.slider .dots li');
  
  let lengthItems = items.length - 1;
  let active = 0;
  next.onclick = function(){
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
  }
  prev.onclick = function(){
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
  }
  let refreshInterval = setInterval(()=> {next.click()}, 3000);
  function reloadSlider(){
      slider.style.left = -items[active].offsetLeft + 'px';
      // 
      let last_active_dot = document.querySelector('.slider .dots li.active');
      last_active_dot.classList.remove('active');
      dots[active].classList.add('active');
  
      clearInterval(refreshInterval);
      refreshInterval = setInterval(()=> {next.click()}, 3000);
  
      
  }
  
  dots.forEach((li, key) => {
      li.addEventListener('click', ()=>{
           active = key;
           reloadSlider();
      })
  })
  window.onresize = function(event) {
      reloadSlider();
  };
  
  //js code for hero section slider ends