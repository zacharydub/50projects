const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (
    e.target.parentNode.classList.contains("rating") ||
    e.target.closest(".rating")
  ) {
    document.querySelector(".active").classList.remove("active");
    e.target.parentNode.classList.add("active");
    if (e.target.tagName === "SMALL") {
      selectedRating = e.target.innerText;
    } else if (e.target.tagName === "DIV") {
      selectedRating = e.target.firstElementChild.nextElementSibling.innerText;
    } else {
      //selectedRating = e.target.nextElementSibling.innerText;
      selectedRating = e.target.nextElementSibling.innerHTML;
    }
    console.log(selectedRating);
  }
});
sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Thank You!</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer support!</p>
  `;
});
