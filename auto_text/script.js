const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
let text = "We love programming";
const form = document.querySelector("form");
const self = document.getElementById("self");

let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  text = self.value;
  self.value = "";
});
