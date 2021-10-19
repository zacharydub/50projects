const passwordEl = document.getElementById("password");
const bg = document.getElementById("bg");

passwordEl.addEventListener("input", () => {
  let password = passwordEl.value.trim();

  if (password) {
    bg.style.filter = `blur(${20 - password.length * 2}px)`;
  }
});
