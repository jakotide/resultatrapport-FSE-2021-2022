// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId);
//   const nav = document.getElementById(navId);

//   toggle.addEventListener('click', () => {
//     nav.classList.toggle('show-menu');
//     toggle.classList.toggle('show-icon');
//   });

//   // Get all dropdown items
//   const dropdownItems = document.querySelectorAll('.dropdown__item');

//   // Attach click event listener to each dropdown item
//   dropdownItems.forEach((item) => {
//     item.addEventListener('click', () => {
//       // Toggle the active class on the clicked dropdown item
//       item.classList.toggle('active');
//     });
//   });
// };

// showMenu('nav-toggle', 'nav-menu');

// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId);
//   const nav = document.getElementById(navId);

//   const closeMenu = () => {
//     nav.classList.remove('show-menu');
//     toggle.classList.remove('show-icon');
//   };

//   toggle.addEventListener('click', () => {
//     nav.classList.toggle('show-menu');
//     toggle.classList.toggle('show-icon');
//   });

//   // Get all dropdown items
//   const dropdownItems = document.querySelectorAll('.dropdown__item');

//   // Attach click event listener to each dropdown item
//   dropdownItems.forEach((item) => {
//     const link = item.querySelector('.nav__link');
//     const submenu = item.querySelector('.dropdown__menu');

//     link.addEventListener('click', () => {
//       const isActive = item.classList.contains('active');

//       // Close the submenu if it's already open
//       if (isActive && submenu.classList.contains('show-submenu')) {
//         submenu.classList.remove('show-submenu');
//         item.classList.remove('active');
//       } else {
//         // Close other open submenus and remove active classes
//         dropdownItems.forEach((otherItem) => {
//           const otherSubmenu = otherItem.querySelector('.dropdown__menu');
//           otherSubmenu.classList.remove('show-submenu');
//           otherItem.classList.remove('active');
//         });

//         // Open the clicked submenu
//         submenu.classList.add('show-submenu');
//         item.classList.add('active');
//       }
//     });
//   });

//   // Close the menu when clicking outside
//   document.addEventListener('click', (event) => {
//     const target = event.target;
//     if (!nav.contains(target) && !toggle.contains(target)) {
//       closeMenu();
//     }
//   });
// };

// showMenu('nav-toggle', 'nav-menu');





// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId);
//   const nav = document.getElementById(navId);

//   const closeMenu = () => {
//     nav.classList.remove('show-menu');
//     toggle.classList.remove('show-icon');
//   };

//   toggle.addEventListener('click', () => {
//     nav.classList.toggle('show-menu');
//     toggle.classList.toggle('show-icon');
//   });

//   const dropdownItems = document.querySelectorAll('.dropdown__item');

//   dropdownItems.forEach((item) => {
//     const link = item.querySelector('.nav__link');
//     const submenu = item.querySelector('.dropdown__menu');

//     link.addEventListener('click', (event) => {
//       event.preventDefault(); // Prevent the link from triggering navigation

//       const isActive = item.classList.contains('active');

//       dropdownItems.forEach((otherItem) => {
//         const otherSubmenu = otherItem.querySelector('.dropdown__menu');
//         otherSubmenu.classList.remove('show-submenu');
//         otherItem.classList.remove('active');
//       });

//       if (!isActive) {
//         submenu.classList.add('show-submenu');
//         item.classList.add('active');
//       } else {
//         submenu.classList.remove('show-submenu');
//         item.classList.remove('active');
//       }
//     });
//   });

//   document.addEventListener('click', (event) => {
//     const target = event.target;

//     if (!nav.contains(target) && !toggle.contains(target)) {
//       closeMenu();
//     }
//   });
// };

// showMenu('nav-toggle', 'nav-menu');

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  const closeMenu = () => {
    nav.classList.remove('show-menu');
    toggle.classList.remove('show-icon');
  };

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
    toggle.classList.toggle('show-icon');
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
        otherSubmenu.classList.remove('show-submenu');
        otherItem.classList.remove('active');
      });

      if (!isActive) {
        submenu.classList.add('show-submenu');
        item.classList.add('active');
      } else {
        submenu.classList.remove('show-submenu');
        item.classList.remove('active');
      }
    });
  });

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

// Modal

// Get the modal element and the image elements
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const images = document.querySelectorAll(".page-container img, .page-container-small img");

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
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  }
});

// Close modal when clicking on modal
modal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
});

