const text = "Code With Muaaz";
const heading = document.getElementById("typeHeading");
let typingInterval;

function startTyping() {
  let i = 0;
  heading.innerHTML = "";

  clearInterval(typingInterval); // Clear previous interval

  typingInterval = setInterval(() => {
    heading.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(typingInterval);
    }
  }, 100);
}

startTyping();
setInterval(startTyping, 4000); // Safe to repeat now
