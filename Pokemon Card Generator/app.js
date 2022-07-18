const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#d30404",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#9fb5ff",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };
  

const url ='https://pokeapi.co/api/v2/pokemon/'
const card = document.getElementById('card')
const btn = document.getElementById('btn')
const loading = document.querySelector('.loading')


let getPokemonData = () => {
    let id = Math.floor(Math.random() * 150) + 1
    const combinedURL = url + id
    fetch(combinedURL)
    .then((response)=> response.json())
    .then ((data) => randomizeCard(data))
}

let randomizeCard = (data) => {
    const hp = data.stats[0].base_stat;
    const imgSrc =  data.sprites.other.dream_world.front_default;
    const pokemonName = data.name;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const speed = data.stats[5].base_stat;
    const theme = typeColor[data.types[0].type.name];


    card.innerHTML = `
        <p class="hp">
          <span>HP</span>
            ${hp}
        </p>
        <img src=${imgSrc} />
        <h1 class="poke-name">${pokemonName}</h1>
        <div class="types">
         
        </div>
        <div class="stats">
          <div>
            <h3>${attack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>${defense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>${speed}</h3>
            <p class='ya'>Speed</p>
          </div>
        </div>
  `;

  appendTypes(data.types);
  styleCard(theme);
}

let appendTypes = (types) => {
    types.forEach((item) => {
      let span = document.createElement("span");
      span.textContent = item.type.name;
      document.querySelector(".types").appendChild(span);
    });
  };

let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
    card.querySelectorAll(".types span").forEach((typeColor) => {
      typeColor.style.backgroundColor = color;
    });
  };

btn.addEventListener('click', getPokemonData)
window.addEventListener('load', getPokemonData)


/*

function displayLoading(){
    loading.style.display = 'block'
    setTimeout(()=> {
        loading.style.display = 'none'
    }, 5000)
}

*/