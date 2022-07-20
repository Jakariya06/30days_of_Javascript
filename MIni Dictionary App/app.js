const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/',
    result = document.getElementById("result"),
    sound = document.getElementById("sound"),
    btn = document.getElementById("btn")

btn.addEventListener("click", ()=> {
    const inputWord = document.getElementById('input-word').value
    fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
        result.innerHTML = `<div class="word">
        <h3>${inputWord}</h3>
        <button onclick="playSound()">
            <i class="fas fa-volume-up"></i>
        </button>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">
       ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example">
        ${data[0].meanings[0].definitions[0].example}
    </p>`

    sound.setAttribute("src", `${data[0].phonetics[0].audio}`)
    })
    .catch(() => {
        result.innerHTML = `<h3 class="error"> not found </h3>`;
    });
})

function playSound() {
    sound.play();
}
