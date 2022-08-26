const quoteApi = 'https://api.quotable.io/random?minLength=100&maxLength=140',
      testedQuote = document.getElementById('quote'),
      userInput = document.getElementById('user-input')

let quote = "",
    time = 60,
    timer = '',
    mistakes = 0

//FETCHING QUOTE
const renderNewQuote = async () => {

    const response = await fetch(quoteApi)
    let data = await response.json()
    quote = data.content
    
    let arr = quote.split("").map((val) => {
        return "<span class='quote-char'>" + val + "</span>"
    })
    testedQuote.innerHTML += arr.join("")
}


//USER TYPING INPUT
userInput.addEventListener('input', ()=> {
    let quoteChar = document.querySelectorAll('.quote-char')
    quoteChar = Array.from(quoteChar)

    let userInputChars = userInput.value.split('')

    quoteChar.forEach((char, index) => {
        if(char.innerText == userInputChars[index]) {
            char.classList.add("success")
        }

        else if(userInputChars[index] == null){
            if(char.classList.contains("success")){
                char.classList.remove("success")
            } else {
                char.classList.remove("fail");
            }
        }

        else {
            if(!char.classList.contains("fail")){
                mistakes += 1
                char.classList.add("fail")
            }
            document.getElementById("mistakes").innerText = mistakes
        }

        let check = quoteChar.every((element) => {
            return element.classList.contains("success");
          })

          if (check) {
            showResult()
          }
    })
})

//SET TIME
const timeStart = () => {
    time
    timer = setInterval(updateTimer, 1000)
}


//UPDATE TIME
function updateTimer(){
    if (time == 0) {
        showResult()
    } 
    else{
        document.getElementById("timer").innerText = -- time + "s"
    }
}

//END TEST
const showResult = () => {
    document.querySelector('.result').style.display = 'block'
    clearInterval(timer)
    document.getElementById('stop').style.display = 'none'
    userInput.disabled = true
    let timeUsed = 1
    if (time != 0){
        timeUsed = (60 - timeUsed) / 100
    }
    document.getElementById('wpm').innerText = (userInput.value.length / 5 / timeUsed).toFixed(2) + " wpm"
    document.getElementById('accuracy').innerText = Math.round((userInput.value.length - mistakes) / userInput.value.length * 100) + " %"
}


//START BUTTON
const start = () => {
    mistakes = 0
    timer = ''
    userInput.disabled = false
    timeStart()
    document.getElementById('start').style.display = 'none'
    document.getElementById('stop').style.display = 'block'
}


// ON LOAD
window.onload = () => {
    userInput.value = ""
    document.getElementById('start').style.display = 'block'
    document.getElementById('stop').style.display = 'none'
    userInput.disabled = true
    renderNewQuote()
}