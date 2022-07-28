const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const link = "https://candaan-api.vecel.app/api/"
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}

// let getJoke = () => {
//     jokeContainer.classList.remove("fade")
//     fetch(link)
//     .then((response) => response.json())
//     .then((result) => console.log(result))
// }



btn.addEventListener("click",getJoke);
getJoke();