document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const openMenu = document.getElementById('open-menu');
  const closeMenu = document.getElementById('close-menu');

  // Open menu when clicking the bars icon
  openMenu.addEventListener('click', () => {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden'; // Disable scrolling when menu is open
  });

  // Close menu when clicking the cross icon
  closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.style.overflow = ''; // Enable scrolling when menu is closed
  });
});


//-----------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', () => {
//   const menuToggle = document.querySelector('.menu-toggle'); // Replace with your toggle button's class
//   const navMenu = document.querySelector('nav ul');

//   menuToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('active'); // Toggle the active class to trigger the animation
//   });
// });
//-----------------------------------------------------------------------------second page
document.addEventListener('DOMContentLoaded', () => {
  const leftSection = document.querySelector('.left-section');
  const rightSection = document.querySelector('.right-section');

  // Trigger animations on page load
  setTimeout(() => {
    leftSection.classList.add('animate');
  }, 1000);

  setTimeout(() => {
    rightSection.classList.add('animate');
  }, 1000);
});


/*services----------------------------------------------------------------------------------------*/
document.querySelectorAll('.circle').forEach(circle => {
  circle.addEventListener('mouseover', () => {
    console.log(`Hovered over: ${circle.textContent}`);
  });
});
   

// Get all the circles
const circles = document.querySelectorAll('.circle');

// Create an IntersectionObserver to trigger the animation when circles come into view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the circle is visible

// Observe each circle
circles.forEach(circle => observer.observe(circle));

// Add background darkening effect on scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const sectionHeight = document.querySelector('.services-section').offsetHeight;
  
  // Darken the background based on scroll position
  const darkenAmount = Math.min(scrollPosition / sectionHeight, 0.5);
  document.querySelector('.services-section').style.backgroundColor = `rgba(0, 0, 0, ${darkenAmount})`;
});



/*portfolio----------------------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the card is visible
      }
    );

    cards.forEach((card) => observer.observe(card));
  } else {
    // Fallback for browsers that do not support IntersectionObserver
    cards.forEach((card) => card.classList.add('animate'));
  }
});


/*clients----------------------------------------------------------------------------------------*/


// Adding Smooth Scroll for Anchor Links
document.querySelectorAll('.logo-item').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const targetId = item.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Target not found:', targetId);
    }
  });
});

// Adding Interactive Feedback on Click
document.querySelectorAll('.logo-item').forEach(item => {
  item.addEventListener('mousedown', () => {
    item.querySelector('img').style.transform = 'scale(0.95)';
  });

  item.addEventListener('mouseup', () => {
    item.querySelector('img').style.transform = 'scale(1.1)';
  });
});

// Adjust the section to be 100vh on all devices and prevent overflow
function adjustViewportHeight() {
  const logosSection = document.querySelector('.logos-section');
  const viewportHeight = window.innerHeight; // Get the viewport height
  logosSection.style.height = `${viewportHeight}px`; // Set the height to 100vh dynamically
}

// Call the function on page load and window resize
window.addEventListener('load', adjustViewportHeight);
window.addEventListener('resize', adjustViewportHeight);





//About page----------------------------------------------------------------------------------------



document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.image-slider img');
  let currentIndex = 0;

  function showNextSlide() {
    // Remove active class from the current image
    slides[currentIndex].classList.remove('active');
    // Move to the next image
    currentIndex = (currentIndex + 1) % slides.length;
    // Add active class to the new image
    slides[currentIndex].classList.add('active');
  }

  // Set the first image as active
  slides[currentIndex].classList.add('active');
  // Change image every 3 seconds
  setInterval(showNextSlide, 3000);
});



//lastpage----------------------------------------------------------------------------------------


// Add functionality to open a blank page when the button is clicked
document.getElementById('diagnosis-btn').addEventListener('click', function () {
  window.open('', '_blank');
});


//contact form
