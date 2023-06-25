function navbar() {
  const openNavMenu = document.querySelector(".open-nav-menu");
  const closeNavMenu = document.querySelector(".close-nav-menu");
  const navMenu = document.querySelector(".nav-menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) => {
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;

      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenu();
      } else {
        if (navMenu.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu();
        }
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });

  function collapseSubMenu() {
    navMenu.querySelector(".menu-item-has-children.active .sub-menu").removeAttribute("style");
    navMenu.querySelector(".menu-item-has-children.active").classList.remove("active");
  }

  function resizeFix() {
    if (navMenu.classList.contains("open")) {
      toggleNav();
    }
    if (navMenu.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  }

  window.addEventListener("resize", function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });
}

navbar();

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
})




