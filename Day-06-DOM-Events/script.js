// MINI PROJECT 1: Button background change
const button = document.getElementById("colorBtn");

button.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightpink";
});

// MINI PROJECT 2: Image hover message
const image = document.getElementById("myImage");
const text = document.getElementById("message");

image.addEventListener("mouseenter", function () {
  text.innerText = "You are hovering on the image 👀";
});

image.addEventListener("mouseleave", function () {
  text.innerText = "";
});

// MINI PROJECT 3: Box animation
const box = document.getElementById("box");
let position = 0;


setInterval(function () {
  position += 2;
  box.style.left = position + "px";
}, 50);
