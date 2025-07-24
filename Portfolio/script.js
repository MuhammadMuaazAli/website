
     function applyTheme() {
      const isChecked = document.getElementById("themeToggle").checked;

      if (isChecked) {
        document.getElementById("body").classList.add("white-theme");
         document.getElementById("empty_div").style.backgroundColor = "white";
      } else {
        document.getElementById("body").classList.remove("white-theme");
         document.getElementById("empty_div").style.backgroundColor = "black";
      }
    }

    
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');


hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
});


navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});
