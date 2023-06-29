// Navigation bar

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  const body = document.body;


  const closeMenu = () => {
    nav.classList.remove('show-menu');
    toggle.classList.remove('show-icon');
    body.classList.remove('no-scroll'); // Remove no-scroll class from body
    
  const activeItems = document.querySelectorAll('.active');
  activeItems.forEach((item) => {
    item.classList.remove('active');
    const submenu = item.querySelector('.dropdown__menu');
    if (submenu) {
      submenu.style.maxHeight = '0';
    }
  });
  };

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
    toggle.classList.toggle('show-icon');
    body.classList.toggle('no-scroll'); // Toggle no-scroll class on body
  });

  const dropdownItems = document.querySelectorAll('.dropdown__item');

  dropdownItems.forEach((item) => {
    const link = item.querySelector('.nav__link');
    const submenu = item.querySelector('.dropdown__menu');

    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the link from triggering navigation

      const isActive = item.classList.contains('active');

      dropdownItems.forEach((otherItem) => {
        const otherSubmenu = otherItem.querySelector('.dropdown__menu');
        otherSubmenu.style.maxHeight = '0';
        otherItem.classList.remove('active');
      });

      if (!isActive) {
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
        item.classList.add('active');
      } else {
        submenu.style.maxHeight = '0';
        item.classList.remove('active');
      }
    });
  });

  const dropdownLinks = document.querySelectorAll('.dropdown__link');
  dropdownLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Close the menu after clicking a dropdown link
      closeMenu();
      
    });
  });

  const appendiksLink = document.querySelector(".appendiks-mobil");
  appendiksLink.addEventListener("click", () => {
    closeMenu();
  })

  document.addEventListener('click', (event) => {
    const target = event.target;

    if (!nav.contains(target) && !toggle.contains(target)) {
      closeMenu();
    }
  });
};

showMenu('nav-toggle', 'nav-menu');


// Link offset

// Smooth scrolling behavior with an offset of 100 pixels
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const offset = 90;

    if (target) {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});

// To top button

const toTopBtn = document.querySelector(".to-top-btn");

function toTopButton(){
  window.addEventListener("scroll", () => {
    if(window.scrollY) {
      toTopBtn.classList.add("active");
    }
  });
}

toTopButton();

// Modal Images

  // Get the modal element and the image elements
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const images = document.querySelectorAll(".page-container img");

  // Attach a click event listener to each image
  images.forEach((image) => {
    image.addEventListener("click", () => {
      // Set the clicked image source as the modal image source
      modalImage.src = image.src;
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  // Attach a click event listener to the close button
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    document.body.style.overflow = "visible";
    modal.style.display = "none";
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    // Check if the screen width is still 450px or above
    if (window.matchMedia("(min-width: 450px)").matches && event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "visible";
    }
  });

  // Close modal when clicking on modal
  modal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  });



