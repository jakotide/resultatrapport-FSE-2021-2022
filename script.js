




// // sidebar open close js code
// let navLinks = document.querySelector(".nav-links");
// let menuOpenBtn = document.querySelector(".navbar .bx-menu");
// let menuCloseBtn = document.querySelector(".nav-links .bx-x");

// menuOpenBtn.addEventListener("click", function () {
//   navLinks.style.left = "0";
// });

// menuCloseBtn.addEventListener("click", function () {
//   navLinks.style.left = "-100%";
// });

// // sidebar submenu open close js code
// let subMenuLinks = document.querySelectorAll(".htmlCss-sub-menu > a");

// subMenuLinks.forEach((link) => {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();
//     let subMenu = this.nextElementSibling;
//     subMenu.classList.toggle("show-sub-menu");

//     // Close previously opened submenus
//     let openedSubMenus = document.querySelectorAll(".htmlCss-sub-menu.show-sub-menu");
//     openedSubMenus.forEach((menu) => {
//       if (menu !== subMenu && menu !== subMenu.parentElement) {
//         menu.classList.remove("show-sub-menu");
//       }
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  var menuItems = document.querySelectorAll('.links li');

  menuItems.forEach(function(item) {
    var submenu = item.querySelector('.sub-menu');
    var link = item.querySelector('a');
    var arrow = item.querySelector('.arrow');

    if (arrow) {
      arrow.addEventListener('click', function() {
        submenu.classList.toggle('show-sub-menu');
      });
    }

    if (link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        submenu.classList.remove('show-sub-menu');
      });
    }
  });

  var sidebarToggle = document.querySelector('.bx-menu');
  var sidebarClose = document.querySelector('.bx-x');
  var navLinks = document.querySelector('.nav-links');

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      navLinks.style.left = '0';
    });
  }

  if (sidebarClose) {
    sidebarClose.addEventListener('click', function() {
      navLinks.style.left = '-100%';
    });
  }
});






















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

