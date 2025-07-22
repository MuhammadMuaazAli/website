const text = "Code With Muaaz";
const heading = document.getElementById("typeHeading");

function startTyping() {
  let i = 0;
  heading.innerHTML = "";

  const interval = setInterval(() => {
    heading.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
    }
  }, 100);
}


startTyping();


setInterval(startTyping, 4000);
