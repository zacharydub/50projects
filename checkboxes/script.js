const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(clickedItem) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clickedItem) {
      fast.checked = false;
    }
    if (cheap === clickedItem) {
      good.checked = false;
    }
    if (fast === clickedItem) {
      cheap.checked = false;
    }
  }
}
