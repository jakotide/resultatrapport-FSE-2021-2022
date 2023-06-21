const navBar = document.querySelector(".navbar");
const navContent = document.querySelector(".nav-content");
const navMenu = document.querySelector(".nav-ul");
const hamburger = document.querySelector(".hamburger");
const logo = document.querySelector(".logo");

function navScroll() {
  let prevScrollPos = window.pageYOffset;

  document.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
      // Scrolling down
      navBar.classList.add("navbar-scrolled");
      navContent.classList.add("nav-content-scrolled");
      navMenu.style.display = "none";
      logo.style.display = "none";
      hamburger.style.display = "none"
    } else {
      // Scrolling up
      navBar.classList.remove("navbar-scrolled");
      navContent.classList.remove("nav-content-scrolled");
      navMenu.style.display = ""; 
      logo.style.display = ""; 
      hamburger.style.display = ""
    }

    prevScrollPos = currentScrollPos;
  });
}

function hamburgerClicked(){
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
};

hamburgerClicked();
navScroll();

const toTopBtn = document.querySelector(".to-top-btn");

function toTopButton(){
  window.addEventListener("scroll", () => {
    if(window.scrollY > 800) {
      toTopBtn.classList.add("active");
    } else {
      toTopBtn.classList.remove("active");
    }
  });
}

toTopButton();

function checkZoomLevel() {
  let zoomLevel = Math.round((window.devicePixelRatio || 1) * 100);
  const navbar = document.querySelector('.navbar');

  if (zoomLevel >= 250) {
    navbar.style.display = 'none';
  } else if (zoomLevel <= 75){
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'block';
  }
}

// Check the zoom level on window load and resize
window.addEventListener('load', checkZoomLevel);
window.addEventListener('resize', checkZoomLevel);
