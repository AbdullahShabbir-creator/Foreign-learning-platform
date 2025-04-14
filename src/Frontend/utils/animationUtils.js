// Animation utility functions

// Handles revealing elements as they come into view
export const handleScrollAnimation = () => {
  const staggerItems = document.querySelectorAll('.stagger-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('stagger-item-visible');
      }
    });
  }, { threshold: 0.1 });

  staggerItems.forEach(item => {
    observer.observe(item);
  });

  return () => {
    staggerItems.forEach(item => {
      observer.unobserve(item);
    });
  };
};

// Handles the progress bar at the top of the page
export const handleScrollProgress = () => {
  const scrollHandler = () => {
    const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;
    const progressWidth = `${(scrolled / totalScroll) * 100}%`;
    
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      progressBar.style.width = progressWidth;
    }
  };

  window.addEventListener('scroll', scrollHandler);
  
  return () => {
    window.removeEventListener('scroll', scrollHandler);
  };
};

// Toggle dark/light mode
export const toggleDarkMode = () => {
  document.body.classList.toggle('dark-theme');
  const isDarkMode = document.body.classList.contains('dark-theme');
  localStorage.setItem('darkMode', isDarkMode);
};

// Initialize dark mode from user preference
export const initializeDarkMode = () => {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  if (savedDarkMode) {
    document.body.classList.add('dark-theme');
  }
};
