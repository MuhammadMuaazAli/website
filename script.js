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
const hamburgerIcon = hamburger.querySelector("i");
let menuOpen = false;

function openMenu() {
  menuOpen = true;
  hamburgerIcon.classList.remove("fa-bars");
  hamburgerIcon.classList.add("fa-xmark");

  gsap.set(navLinks, { display: "flex", opacity: 0, y: -20 });
  gsap.to(navLinks, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out"
  });
}

function closeMenu() {
  if (!menuOpen) return;
  menuOpen = false;
  hamburgerIcon.classList.remove("fa-xmark");
  hamburgerIcon.classList.add("fa-bars");

  gsap.to(navLinks, {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: "power2.in",
    onComplete: () => {
      gsap.set(navLinks, { display: "none" });
    }
  });
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


const cssBtn = document.getElementById("css_btn");

cssBtn.addEventListener("click", () => {
  const card = cssBtn.closest(".card");
  const note = card.querySelector(".note");
  note.classList.add("show");

  setTimeout(() => {
    note.classList.remove("show");
  }, 6000);
});
