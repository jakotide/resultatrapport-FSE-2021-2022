// const navBar = document.querySelector(".navbar");
// const navContent = document.querySelector(".nav-content");
// const navMenu = document.querySelector(".nav-ul");
// const hamburger = document.querySelector(".hamburger");
// const logo = document.querySelector(".logo");

// function navScroll() {
//   let prevScrollPos = window.pageYOffset;

//   document.addEventListener("scroll", () => {
//     const currentScrollPos = window.pageYOffset;

//     if (currentScrollPos > prevScrollPos) {
//       // Scrolling down
//       navBar.classList.add("navbar-scrolled");
//       navContent.classList.add("nav-content-scrolled");
//       navMenu.style.display = "none";
//       logo.style.display = "none";
//       hamburger.style.display = "none"
//     } else {
//       // Scrolling up
//       navBar.classList.remove("navbar-scrolled");
//       navContent.classList.remove("nav-content-scrolled");
//       navMenu.style.display = ""; 
//       logo.style.display = ""; 
//       hamburger.style.display = ""
//     }

//     prevScrollPos = currentScrollPos;
//   });
// }

// function hamburgerClicked(){
//   hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
//   })
// };

// hamburgerClicked();
// navScroll();

const toTopBtn = document.querySelector(".to-top-btn");

function toTopButton(){
  window.addEventListener("scroll", () => {
    if(window.scrollY) {
      toTopBtn.classList.add("active");
    }
  });
}

toTopButton();

// function checkZoomLevel() {
//   let zoomLevel = Math.round((window.devicePixelRatio || 1) * 100);
//   const navbar = document.querySelector(".navbar");

//   if (zoomLevel >= 250) {
//     navbar.style.display = "none";
//   } else if (zoomLevel <= 75){
//     navbar.style.display = "none";
//   } else {
//     navbar.style.display = "block";
//   }
// }

// // Check the zoom level on window load and resize
// window.addEventListener('load', checkZoomLevel);
// window.addEventListener('resize', checkZoomLevel);

// Modal

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
    toTopBtn.style.display = "none";
  });
});

// Attach a click event listener to the close button
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  document.body.style.overflow = "visible";
  modal.style.display = "none";
  toTopBtn.style.dispaly = "block";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
    toTopBtn.style.dispaly = "block";
  }
});


const navItems = document.querySelectorAll('nav ul li');

navItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.querySelector('.dropdown-menu').style.display = 'block';
  });

  item.addEventListener('mouseout', () => {
    item.querySelector('.dropdown-menu').style.display = 'none';
  });
});


