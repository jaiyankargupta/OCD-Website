document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.querySelector('.user-icon');
    const userInfoContainer = document.getElementById('user-info-container');

    userIcon.addEventListener('click', function(event) {
      event.stopPropagation();
      
      if (userInfoContainer.style.display === 'none' || userInfoContainer.style.display === '') {
        fetch('userID.html')
          .then(response => response.text())
          .then(data => {
            userInfoContainer.innerHTML = data;
            userInfoContainer.style.display = 'block';
          })
          .catch(error => console.error('Error loading userID.html:', error));
      } else {
        userInfoContainer.style.display = 'none';
      }
    });

    document.addEventListener('click', function(event) {
      if (!userInfoContainer.contains(event.target) && event.target !== userIcon) {
        userInfoContainer.style.display = 'none';
      }
    });
});
