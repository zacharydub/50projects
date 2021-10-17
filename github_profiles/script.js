const API_URL = "https://api.github.com/users/";
const form = document.getElementById("user-form");
const search = document.getElementById("search");
const main = document.getElementById("main");

//function getUser(username) {
//  axios(API_URL + username)
//    .then((res) => console.log(res.data))
//    .catch((err) => console.log(err));
//}
async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("no profile found with that username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    createErrorCard("problem fetching repos");
  }
}

function createErrorCard(msg) {
  const cardHtml = `
<div class="card">
  <h1>${msg}</h1>
</div>
`;
  main.innerHTML = cardHtml;
}

function createUserCard(user) {
  const cardHtml = `
    <div class="card">
      <div>
        <img
            class="avatar"
            src="${user.avatar_url}"
            alt="${user.name}"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
            ${user.bio}
          </p>

          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
          </ul>

          <div id="repos">
          </div>
        </div>
      </div>
`;
  main.innerHTML = cardHtml;
}
function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
