const text = "Code With Muaaz";
const heading = document.getElementById("typeHeading");
let typingInterval;

function startTyping() {
  let i = 0;
  heading.innerHTML = "";

  clearInterval(typingInterval); 

  typingInterval = setInterval(() => {
    heading.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(typingInterval);
    }
  }, 100);
}

startTyping();
setInterval(startTyping, 4000); 



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
