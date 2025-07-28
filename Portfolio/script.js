


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const hamburgerIcon = hamburger.querySelector("i");
let menuOpen = false;

function openMenu() {
  menuOpen = true;
  hamburgerIcon.classList.remove("fa-bars");
  hamburgerIcon.classList.add("fa-xmark");

  navLinks.classList.add('active');
}

function closeMenu() {
  if (!menuOpen) return;
  menuOpen = false;
  hamburgerIcon.classList.remove("fa-xmark");
  hamburgerIcon.classList.add("fa-bars");

  navLinks.classList.remove('active');
}


hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  if (menuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});


navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});


document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});


navLinks.addEventListener("click", (e) => {
  e.stopPropagation();
});
