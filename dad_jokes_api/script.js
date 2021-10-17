const jokEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

////using .then
//function generateJoke() {
//  const config = {
//    headers: {
//      Accept: "application/json",
//    },
//  };
//  fetch("https://icanhazdadjoke.com/", config).then((res) =>
//    res.json().then((data) => (jokEl.innerText = data.joke))
//  );
//}

////using async/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();

  jokEl.innerText = data.joke;
}
