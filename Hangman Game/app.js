const letterContainer = document.getElementById("letter-container"),
  optionsContainer = document.getElementById("options-container"),
  userInputSection = document.getElementById("user-input-section"),
  newGameContainer = document.getElementById("new-game-container"),
  newGameBtn = document.getElementById("new-game-btn"),
  canvas = document.getElementById("canvas"),
  resultText = document.getElementById("result-text");

let options = {
  kota: [
    "Surabaya",
    "Madrid",
    "Paris",
    "Malang",
    "Magelang",
    "Riyadh",
    "Seoul",
    "Yokohama",
    "Delhi",
    "Mumbai",
  ],
  hewan: [
    "Unta",
    "Landak",
    "Semut",
    "Kangguru",
    "Koala",
    "Trenggiling",
    "BuluBabi",
    "Kuda",
    "Buaya",
    "Kadal",
  ],
  negara: [
    "Saudi Arabia",
    "India",
    "Korea Selatan",
    "Inggris",
    "Zimbabwe",
    "Senegal",
    "Kamerun",
    "Italia",
    "Jerman",
    "Kazakhstan",
  ],
};

let winCount = 0;
let count = 0;
let wordCount = "";

const displayOptions = () => {
  optionsContainer.innerHTML += `<h3> Pilih Topiknya </h3>`;
  let buttonCtn = document.createElement("div");
  for (let value in options) {
    buttonCtn.innerHTML += `<button class="options" onclick="generateWord('${value}')"> ${value} </button>`;
  }
  optionsContainer.appendChild(buttonCtn);
};

const block = () => {
  let optionsBtn = document.querySelectorAll(".options");
  let letterBtn = document.querySelectorAll(".letters");
  optionsBtn.forEach((btn) => {
    btn.disabled = true;
  });
  letterBtn.forEach((btn) => {
    btn.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

const generateWord = (optionValue) => {
  const optionsBtn = document.querySelectorAll(".options");
  optionsBtn.forEach((btn) => {
    if (btn.innerText.toLowerCase() === optionValue) {
      btn.classList.add("active");
    }
    btn.disabled = true;
  });

  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  choosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  choosenWord = choosenWord.toUpperCase();
  console.log(choosenWord);

  let displayItem = choosenWord.replace(
    /./g,
    '<span class="dashes"> _ </span>'
  );
  userInputSection.innerHTML = displayItem;
};

const initializer = () => {
  winCount = 0;
  count = 0;

  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");

    button.innerText = String.fromCharCode(i);

    button.addEventListener("click", () => {
      let charArray = choosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");

      //console.log(button.innerText);

      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          if (char === button.innerText) {
            dashes[index].innerText = char;

            winCount += 1;
            if (winCount === charArray.length) {
              resultText.innerHTML = `<h2 class="win-msg"> MANTAB !! </h2>
                            <p> Yak betoll jawabannya adalah <span> ${choosenWord} </span> </p>`;
              block();
            }
          }
        });
      }
      else{
        count += 1
        drawMan(count)

        if(count == 6){
            resultText.innerHTML = `<h2 class="lose-msg"> NANGESS !! </h2>
                            <p> Dih Salah, jawabannya adalah <span> ${choosenWord} </span> </p>`;
            block()
        }
      }

      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  let { initialDrawing } = canvasCreator()
  initialDrawing()
};


const canvasCreator = () => {
    let context = canvas.getContext("2d")
    context.beginPath()
    context.strokeStyle = "#000"
    context.lineWidth = 2

    const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY)
        context.lineTo(toX, toY)
        context.stroke()
    }

    const head = () =>{
        context.beginPath()
        context.arc(70 ,30, 10, 0, Math.PI * 2, true)
        context.stroke()
    }

    const body = () => {
        drawLine(70, 40, 70, 80)
    }

    const leftArm = () => {
        drawLine(70, 50, 50, 70)
    }

    const rightArm = () => {
        drawLine(70, 50, 90, 70)
    }

    const lefLeg = () => {
        drawLine(70, 80, 50, 110)
    }

    const rightLeg = () => {
        drawLine(70, 80, 90, 110)
    }

    const initialDrawing = () => {
        context.clearRect(0, 0, context.canvas.width,  context.canvas.height)
        //bottom
        drawLine(10, 140, 130, 140)
        //left
        drawLine(10, 10, 10, 141)
        //top
        drawLine(10, 10, 70, 10)
        //small top
        drawLine(70, 10, 70, 30)
    }

    return {initialDrawing, head, body, leftArm, rightArm, lefLeg, rightLeg}
}

const drawMan = (count) => {
  let { head, body, leftArm, rightArm, lefLeg, rightLeg} = canvasCreator()
  switch (count){
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      lefLeg();
      break;
    case 6:
      rightLeg()
      break
    default:
      break;
  }
}


newGameBtn.addEventListener("click", initializer);
window.onload = initializer;
