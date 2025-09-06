// Toggle navigation panel
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navPanel = document.getElementById('navPanel');
  
  if (menuToggle && navPanel) {
    menuToggle.addEventListener('click', function() {
      navPanel.classList.toggle('open');
    });
    
    // Swipe to close functionality
    let touchStartX = 0;
    let touchEndX = 0;
    
    navPanel.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    navPanel.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, false);
    
    function handleSwipe() {
      // If swiped left (closing gesture)
      if (touchStartX - touchEndX > 50) {
        navPanel.classList.remove('open');
      }
    }
    
    // Close panel when clicking outside
    document.addEventListener('click', function(e) {
      if (navPanel.classList.contains('open') &&
        !navPanel.contains(e.target) &&
        !menuToggle.contains(e.target)) {
        navPanel.classList.remove('open');
      }
    });
  }
  
  // Image Slideshow (for home page only)
  if (document.querySelector('.mySlides')) {
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 5 seconds (slower)
    }
  }
});