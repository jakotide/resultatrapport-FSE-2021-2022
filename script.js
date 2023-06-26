// document.addEventListener('DOMContentLoaded', function() {
//   var menuItems = document.querySelectorAll('.links li');

//   menuItems.forEach(function(item) {
//     var submenu = item.querySelector('.sub-menu');
//     var link = item.querySelector('a');
//     var arrow = item.querySelector('.arrow');

//     if (arrow) {
//       arrow.addEventListener('click', function() {
//         if (submenu) {
//           submenu.classList.toggle('show-sub-menu');
//         }
//       });
//     }

//     if (link) {
//       link.addEventListener('click', function(event) {
//         event.preventDefault();
//         if (submenu) {
//           submenu.classList.toggle('show-sub-menu');
//         }
//       });
//     }
//   });

//   var sidebarToggle = document.querySelector('.bx-menu');
//   var sidebarClose = document.querySelector('.bx-x');
//   var navLinks = document.querySelector('.nav-links');

//   if (sidebarToggle) {
//     sidebarToggle.addEventListener('click', function() {
//       navLinks.style.left = '0';
//     });
//   }

//   if (sidebarClose) {
//     sidebarClose.addEventListener('click', function() {
//       navLinks.style.left = '-100%';
//     });
//   }
// });


// /*=============== SHOW MENU ===============*/
// const showMenu = (toggleId, navId) =>{
//   const toggle = document.getElementById(toggleId),
//         nav = document.getElementById(navId)

//   toggle.addEventListener('click', () =>{
//       // Add show-menu class to nav menu
//       nav.classList.toggle('show-menu')

//       // Add show-icon to show and hide the menu icon
//       toggle.classList.toggle('show-icon')
//   })
// }

// showMenu('nav-toggle','nav-menu')

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  toggle.addEventListener('click', () => {
    // Toggle the show-menu class on the nav menu
    if (nav.classList.contains('show-menu')) {
      nav.classList.remove('show-menu');
    } else {
      nav.classList.add('show-menu');
    }

    // Toggle the show-icon class on the toggle button
    if (toggle.classList.contains('show-icon')) {
      toggle.classList.remove('show-icon');
    } else {
      toggle.classList.add('show-icon');
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

