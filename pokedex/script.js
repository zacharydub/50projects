const poke_container = document.getElementById("container");
const pokemon_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  ice: "lightblue",
  ghost: "charcoal",
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const res = await fetch(url);
  const data = await res.json();
  //console.log(data);
  createPokemonCard(data);
};
fetchPokemons();
const createPokemonCard = (pokedata) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  let name = pokedata.name[0].toUpperCase() + pokedata.name.slice(1);
  let typesString = pokedata.types.map((obj) => obj.type.name).join(", ");
  let typesArray = pokedata.types.map((obj) => obj.type.name);
  let id = pokedata.id.toString().padStart(3, "0");

  pokemonEl.innerHTML = `
        <div class="img-container">
          <img
            src="${pokedata.sprites.front_default}"
            alt="${pokedata.name}"
          />
        </div>
        <div class="info">
          <span class="number">#${id}</span>
          <h3 class="name">${name}</h3>
          <small class="type">Type: <span>${typesString}</span></small>
        </div>
  `;
  //console.log(typesArray, colors[typesArray[0]]);
  pokemonEl.style.backgroundColor = `${colors[typesArray[0]]}`;
  poke_container.appendChild(pokemonEl);
};
