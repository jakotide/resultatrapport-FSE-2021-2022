// function navbar() {
//   const openNavMenu = document.querySelector(".open-nav-menu");
//   const closeNavMenu = document.querySelector(".close-nav-menu");
//   const navMenu = document.querySelector(".nav-menu");
//   const menuOverlay = document.querySelector(".menu-overlay");
//   const mediaSize = 991;

//   openNavMenu.addEventListener("click", toggleNav);
//   closeNavMenu.addEventListener("click", toggleNav);
//   menuOverlay.addEventListener("click", toggleNav);

//   function toggleNav() {
//     navMenu.classList.toggle("open");
//     menuOverlay.classList.toggle("active");
//     document.body.classList.toggle("hidden-scrolling");
//   }

//   navMenu.addEventListener("click", (event) => {
//     if (
//       event.target.hasAttribute("data-toggle") &&
//       window.innerWidth <= mediaSize
//     ) {
//       event.preventDefault();
//       const menuItemHasChildren = event.target.parentElement;

//       if (menuItemHasChildren.classList.contains("active")) {
//         collapseSubMenu();
//       } else {
//         if (navMenu.querySelector(".menu-item-has-children.active")) {
//           collapseSubMenu();
//         }
//         menuItemHasChildren.classList.add("active");
//         const subMenu = menuItemHasChildren.querySelector(".sub-menu");
//         subMenu.style.maxHeight = subMenu.scrollHeight + "px";
//       }
//     }
//   });

//   function collapseSubMenu() {
//     navMenu.querySelector(".menu-item-has-children.active .sub-menu").removeAttribute("style");
//     navMenu.querySelector(".menu-item-has-children.active").classList.remove("active");
//   }

//   function resizeFix() {
//     if (navMenu.classList.contains("open")) {
//       toggleNav();
//     }
//     if (navMenu.querySelector(".menu-item-has-children.active")) {
//       collapseSubMenu();
//     }
//   }

//   window.addEventListener("resize", function () {
//     if (this.innerWidth > mediaSize) {
//       resizeFix();
//     }
//   });
// }

// navbar();

// function navbar() {
//   const openNavMenu = document.querySelector(".open-nav-menu");
//   const closeNavMenu = document.querySelector(".close-nav-menu");
//   const navMenu = document.querySelector(".nav-menu");
//   const menuOverlay = document.querySelector(".menu-overlay");
//   const mediaSize = 991;

//   openNavMenu.addEventListener("click", toggleNav);
//   closeNavMenu.addEventListener("click", toggleNav);
//   menuOverlay.addEventListener("click", toggleNav);

//   function toggleNav() {
//     navMenu.classList.toggle("open");
//     menuOverlay.classList.toggle("active");
//     document.body.classList.toggle("hidden-scrolling");
//   }

//   navMenu.addEventListener("click", (event) => {
//     if (
//       event.target.hasAttribute("data-toggle") &&
//       window.innerWidth <= mediaSize
//     ) {
//       event.preventDefault();
//       const menuItemHasChildren = event.target.parentElement;

//       if (menuItemHasChildren.classList.contains("active")) {
//         collapseSubMenu();
//       } else {
//         if (navMenu.querySelector(".menu-item-has-children.active")) {
//           collapseSubMenu();
//         }
//         menuItemHasChildren.classList.add("active");
//         const subMenu = menuItemHasChildren.querySelector(".sub-menu");
//         subMenu.style.maxHeight = subMenu.scrollHeight + "px";
//       }
//     }
//   });

//   function collapseSubMenu() {
//     navMenu.querySelector(".menu-item-has-children.active .sub-menu").removeAttribute("style");
//     navMenu.querySelector(".menu-item-has-children.active").classList.remove("active");
//   }

//   function toggleSubMenuVisibility(subMenuClassName) {
//     const subMenu = document.querySelector(subMenuClassName);
//     if (subMenu) {
//       subMenu.classList.toggle("hidden");
//     }
//   }

//   function resizeFix() {
//     if (navMenu.classList.contains("open")) {
//       toggleNav();
//     }
//     if (navMenu.querySelector(".menu-item-has-children.active")) {
//       collapseSubMenu();
//     }
//   }

//   window.addEventListener("resize", function () {
//     if (this.innerWidth > mediaSize) {
//       resizeFix();
//     }
//   });

//   const omOssLink = document.querySelector('a[href="#om-oss"]');
//   const sosialeResultaterLink = document.querySelector('a[href="#resultater"]');

//   omOssLink.addEventListener("click", () => {
//     toggleSubMenuVisibility(".om-oss-menu");
//   });

//   sosialeResultaterLink.addEventListener("click", () => {
//     toggleSubMenuVisibility(".sosiale-resultater-menu");
//   });

//   resizeFix(); // Call the function initially to ensure correct visibility

//   // Hide submenus by default
//   document.querySelectorAll(".om-oss-menu, .sosiale-resultater-menu").forEach((subMenu) => {
//     subMenu.classList.add("hidden");
//   });
// }

// navbar();

function navbar() {
  const openNavMenu = document.querySelector(".open-nav-menu");
  const closeNavMenu = document.querySelector(".close-nav-menu");
  const navMenu = document.querySelector(".nav-menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const mediaSize = 991;
  let activeSubMenu = null; // Declare activeSubMenu as a global variable

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
    if (!navMenu.classList.contains("open")) {
      collapseSubMenu();
    }
  }

  navMenu.addEventListener("click", (event) => {
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;

      if (menuItemHasChildren === activeSubMenu) {
        collapseSubMenu();
      } else {
        collapseSubMenu();
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        activeSubMenu = menuItemHasChildren;
      }
    }
  });

  function collapseSubMenu() {
    if (activeSubMenu) {
      activeSubMenu.querySelector(".sub-menu").removeAttribute("style");
      activeSubMenu.classList.remove("active");
      activeSubMenu = null;
    }
  }

  function resizeFix() {
    if (navMenu.classList.contains("open")) {
      toggleNav();
    }
    if (activeSubMenu) {
      collapseSubMenu();
    }
  }

  window.addEventListener("resize", function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });

  const omOssLink = document.querySelector('a[href="#om-oss"]');
  const sosialeResultaterLink = document.querySelector('a[href="#resultater"]');
  const vareSelskaperLink = document.querySelector('a[href="#selskaper"]');

  omOssLink.addEventListener("click", () => {
    toggleSubMenuVisibility(".om-oss-menu");
  });

  sosialeResultaterLink.addEventListener("click", () => {
    toggleSubMenuVisibility(".sosiale-resultater-menu");
  });

  vareSelskaperLink.addEventListener("click", () => {
    toggleSubMenuVisibility(".vare-selskaper-menu");
  });

  function toggleSubMenuVisibility(subMenuClassName) {
    const subMenu = document.querySelector(subMenuClassName);
    if (subMenu) {
      const isActive = subMenu.classList.contains("hidden");
      collapseSubMenu();
      if (isActive) {
        subMenu.classList.remove("hidden");
        activeSubMenu = subMenu.parentElement;
      }
    }
  }

  resizeFix(); // Call the function initially to ensure correct visibility

  // Hide submenus by default
  document.querySelectorAll(".om-oss-menu, .sosiale-resultater-menu, .vare-selskaper-menu").forEach((subMenu) => {
    subMenu.classList.add("hidden");
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
});

