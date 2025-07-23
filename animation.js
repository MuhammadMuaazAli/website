gsap.registerPlugin(ScrollTrigger);


gsap.from("header h1", {
  y: -100,
  opacity: 0,
  visibility: "visible",
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "header h1",
    start: "top 90%",
    toggleActions: "play none none reverse",
  }
});

gsap.from("header p", {
  y: 50,
  opacity: 0,
  visibility: "visible",
  duration: 1,
  delay: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "header p",
    start: "top 90%",
    toggleActions: "play none none reverse",
  }
});


gsap.utils.toArray("section h2").forEach(title => {
  gsap.from(title, {
    opacity: 0,
    y: 50,
    visibility: "visible",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: title,
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });
});


gsap.utils.toArray(".card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 100,
    scale: 0.8,
    visibility: "visible",
    duration: 1,
    delay: i * 0.1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play none none reverse",
    }
  });
});


gsap.utils.toArray(".social div").forEach((icon, i) => {
  gsap.from(icon, {
    opacity: 0,
    y: 50,
    visibility: "visible",
    duration: 0.8,
    delay: i * 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: icon,
      start: "top 90%",
      toggleActions: "play none none reverse",
    }
  });
});


gsap.from("footer", {
  opacity: 0,
  y: 50,
  visibility: "visible",
  duration: 1,
  scrollTrigger: {
    trigger: "footer",
    start: "top 130%",
    toggleActions: "play none none reverse",
  }
});


document.getElementById("year").textContent = new Date().getFullYear();
