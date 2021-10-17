const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  //this is a little less than the entire height of the viewport

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else box.classList.remove("show");
  });
}

//for funkier animation can use library AnimateOnScroll
