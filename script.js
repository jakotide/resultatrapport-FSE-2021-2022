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