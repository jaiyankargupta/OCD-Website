// JS for mode toggle button

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    
    const navToggle = document.getElementById('nav-toggle');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    if (!toggleButton) {
        console.error('Dark mode toggle button not found');
        return;
    }

    if (!navToggle) {
        console.error('Navbar toggle button not found');
        return;
    }
    // Check saved mode in localStorage
    
    const currentMode = localStorage.getItem('theme') || 'light';
    document.body.className = `${currentMode}-mode`;
    toggleButton.textContent = currentMode === 'light' ? 'Dark Mode' : 'Light Mode';

    toggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            document.body.className = 'light-mode';
            toggleButton.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            document.body.className = 'dark-mode';
            toggleButton.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });
    navToggle.addEventListener('click', () => {
        navLeft.classList.toggle('active');
        navRight.classList.toggle('active');
    });
});
