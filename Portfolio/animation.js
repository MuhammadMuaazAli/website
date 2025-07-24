var tl = gsap.timeline();

tl.from(".switch", {
  x: "100vw",
  opacity: 0,
  duration: 1.2,
  rotate: 360,
});

tl.from(".labels", {
  y: "100vh",
  opacity: 0,
  rotate: 360,
  duration: 0.9,
});

// tl.from(".side", {
//   x: "100vw",
//   opacity: 0,
//   duration: 0.9,
//   ease: "power2.out"
// });

tl.from(".pic", {
  x: "-100vw",
  opacity: 0,
  duration: 0.9,
  ease: "power2.out"
});

tl.from(".list", {
  opacity: 0,
  duration: 0.9,
  ease: "fade"
});

tl.from(".line", {
  opacity: 0,
  y: "-5vh",
  duration: 0.9,
  ease: "power1.out"
});

tl.from(".Skills", {
  opacity: 0,
  y: "-5vh",
  duration: 0.9,
  ease: "power1.out"
});

tl.from(".one, .two, .three, .four", {
  opacity: 0,
  x: "-30vw",
  duration: 0.9,
  stagger: 0.2,
  ease: "power2.out"
});

tl.from(".languages", {
  opacity: 0,
  duration: 0.9,
  ease: "fade"
});

tl.from(".eng, .spa, .ger", {
  opacity: 0,
  x: "50vw",
  duration: 0.9,
  stagger: 0.2,
  ease: "power4.out"
});

// tl.from(".up", {
//   opacity: 0,
//   x: "-20vw",
//   duration: 0.9,
//   ease: "power2.out"
// });

tl.from(".up .innercon", {
  opacity: 0,
  y: "-10vh",
  duration: 1,
  ease: "power3.out"
});

// tl.from(".down", {
//   opacity: 0,
//   x: "20vw",
//   duration: 0.9,
//   ease: "power2.out"
// });

tl.from(".down .innercon", {
  opacity: 0,
  y: "10vh",
  duration: 1,
  ease: "power3.out"
});

// tl.from("footer", {
//   opacity: 0,
//   x: "20vw",
//   duration: 0.9,
//   ease: "power2.out"
// });
