const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(elm) {
  const color = getRandomColor();
  elm.style.background = color;
  elm.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(elm) {
  elm.style.background = "#1d1d1d";
  elm.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
