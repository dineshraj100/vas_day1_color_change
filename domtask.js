const circle = document.getElementById("circle");
const color = document.getElementById("color");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const reset = document.getElementById("reset");

color.addEventListener("input", () => {
  circle.style.backgroundColor = color.value;
});

red.addEventListener("click", () => {
  circle.style.backgroundColor = "red";
});

blue.addEventListener("click", () => {
  circle.style.backgroundColor = "blue";
});

green.addEventListener("click", () => {
  circle.style.backgroundColor = "green";
});

reset.addEventListener("click", () => {
  circle.style.backgroundColor = "white";
});
