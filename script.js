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

//herpage----------------------------------------------------------------------------------------


// Optional JavaScript for further interactivity
//hero second page--------------------------

let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;
    const container = document.querySelector(".content-container-22");
    const images = document.querySelectorAll(".content-container-22 img");

    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling forward
        images.forEach(img => {
            img.classList.add("scroll-forward");
            img.classList.remove("scroll-backward");
        });
    } else {
        // Scrolling backward
        images.forEach(img => {
            img.classList.add("scroll-backward");
            img.classList.remove("scroll-forward");
        });
    }

    lastScrollPosition = currentScrollPosition;
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
// document.addEventListener('DOMContentLoaded', () => {
//   const leftSection = document.querySelector('.left-section');
//   const rightSection = document.querySelector('.right-section');

  // Trigger animations on page load
//   setTimeout(() => {
//     leftSection.classList.add('animate');
//   }, 1000);

//   setTimeout(() => {
//     rightSection.classList.add('animate');
//   }, 1000);
// });


/*services----------------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");

  const handleScroll = () => {
    const triggerHeight = window.innerHeight * 0.9; // Adjust trigger point

    circles.forEach((circle) => {
      const circleTop = circle.getBoundingClientRect().top;

      if (circleTop < triggerHeight) {
        circle.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on page load
});



/*portfolio----------------------------------------------------------------------------------------*/
  // Fade-in header
  const header = document.getElementById("header");
  setTimeout(() => {
    // header.style.opacity = "1";
    // header.style.transform = "translateY(0)";
  }, 300); // Delay before showing the header

  // Fade-in cards with staggered delay
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 500 + index * 200); // Staggered delay for each card
  });



/*clients----------------------------------------------------------------------------------------*/


const logoItems = document.querySelectorAll('.logo-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // Optional: Fade out on scroll-out
    }
  });
});

logoItems.forEach((item) => observer.observe(item));





//About page----------------------------------------------------------------------------------------



document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.image-slider img');
  let currentIndex = 0;

  function showNextSlide() {
    // Remove active class from the current image
    // slides[currentIndex].classList.remove('active');
    // Move to the next image
    currentIndex = (currentIndex + 1) % slides.length;
    // Add active class to the new image
    // slides[currentIndex].classList.add('active');
  }

  // Set the first image as active
  // slides[currentIndex].classList.add('active');
  // Change image every 3 seconds
  setInterval(showNextSlide, 3000);
});



//lastpage----------------------------------------------------------------------------------------




//contact form----------------------------------------------------------------------------------------
function submitForm() {
  var form = document.getElementById('contactForm');
  var messageDiv = document.getElementById('formMessage');

  // Prevent form from submitting immediately
  event.preventDefault();

  // Collect form data
  var formData = new FormData(form);

  // Use Fetch API to send form data via POST
  fetch('mail.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    if (data === 'success') {
      messageDiv.style.display = 'block';
      messageDiv.style.color = 'green';
      messageDiv.innerHTML = 'Thank you! Your message has been sent successfully.';
    } else {
      messageDiv.style.display = 'block';
      messageDiv.style.color = 'red';
      messageDiv.innerHTML = 'Oops! Something went wrong. Please try again.';
    }
  })
  .catch(error => {
    messageDiv.style.display = 'block';
    messageDiv.style.color = 'red';
    messageDiv.innerHTML = 'Oops! Something went wrong. Please try again.';
  });

  return false;  // Prevent form from submitting the traditional way
}


    // Show Toastify messages if redirected
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("status") && urlParams.has("message")) {
        const status = urlParams.get("status");
        const message = urlParams.get("message");
        showToast(message, status === "success");
    }

///portfoilio
    // Select all circles
const circles = document.querySelectorAll('.portfolio-section .circle');

// Add click event to each circle
circles.forEach((circle) => {
  circle.addEventListener('click', () => {
    console.log(`${circle.textContent.trim()} clicked!`);
  });
});



let currentImageIndex = 0;
let galleryImages = [];

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the gallery
  galleryImages = Array.from(document.querySelectorAll('.gallery img'));
  galleryImages.forEach((img, index) => img.setAttribute('data-index', index));
});

function openFullScreen(element) {
  const fullScreenOverlay = document.getElementById('fullScreenOverlay');
  const fullScreenContent = document.getElementById('fullScreenContent');

  currentImageIndex = parseInt(element.getAttribute('data-index'), 10);
  updateFullScreenContent();

  fullScreenOverlay.classList.add('active');
  document.body.classList.add('full-screen-active');
}

function updateFullScreenContent() {
  const fullScreenContent = document.getElementById('fullScreenContent');
  fullScreenContent.innerHTML = '';
  const currentImage = galleryImages[currentImageIndex].cloneNode();
  fullScreenContent.appendChild(currentImage);

  document.querySelector('.prev-btn').style.display = currentImageIndex === 0 ? 'none' : 'block';
  document.querySelector('.next-btn').style.display = currentImageIndex === galleryImages.length - 1 ? 'none' : 'block';
}

function closeFullScreen() {
  document.getElementById('fullScreenOverlay').classList.remove('active');
  document.body.classList.remove('full-screen-active');
}

function prevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateFullScreenContent();
  }
}

function nextImage() {
  if (currentImageIndex < galleryImages.length - 1) {
    currentImageIndex++;
    updateFullScreenContent();
  }
}
