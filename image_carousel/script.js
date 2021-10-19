//const images = document.querySelectorAll("img");
//const prevBtn = document.getElementById("prev");
//const nextBtn = document.getElementById("next");
//
//let activePic = 0;
//
//nextBtn.addEventListener("click", () => {
//  console.log("clicked");
//  activePic++;
//  if (activePic > images.length - 1) {
//    activePic = 0;
//  }
//  setActive();
//});
//prevBtn.addEventListener("click", () => {
//  activePic--;
//  if (activePic < 0) {
//    activePic = images.length - 1;
//  }
//  setActive();
//});
//
//function setActive() {
//  images.forEach((pic) => {
//    pic.classList.remove("active");
//  });
//  images[activePic].classList.add("active");
//}

const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
