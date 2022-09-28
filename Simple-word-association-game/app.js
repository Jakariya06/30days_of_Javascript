const displayScore = document.getElementById('displayScore'),
    displayQuestion = document.getElementById('displayQuestion')

const questions = [
    {
        quiz : ['Maghrib', 'Kopi', 'Kata2'],
        options : ['Senja', 'Malam', 'Subuh'],
        correct: 1
    },

    {
        quiz : ['Bahasa', 'Stoik', 'Mental'],
        options : ['Malang', 'Surabaya', 'Jaksel'],
        correct: 3
    },

    {
        quiz : ['US', 'Kiri', 'Kritik'],
        options : ['Komunis', 'SJW', 'Sosialis'],
        correct: 2
    },

    {
        quiz : ['Tikus', 'Maling', 'KPK'],
        options : ['Koruptor', 'Begal', 'Rampok'],
        correct: 1
    },
    {
        quiz : ['Cantik', 'Manis', 'Sayang'],
        options : ['Iya', 'Kamu', 'Dong'],
        correct: 2
    }
]

let score = 0
let clicked = []
displayScore.textContent = score

const generateQuestions = () =>{
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')
        question.quiz.forEach(attr => {
            const attrText = document.createElement("p")
            attrText.textContent = attr
            questionBox.append(attrText)
        })

        const questionBtns = document.createElement('div')
        questionBtns.classList.add('question-buttons')
        questionBox.append(questionBtns)

        question.options.forEach((opt, optIdx) => {
            const questionBtn = document.createElement('button')
            questionBtn.classList.add('question-button')
            questionBtn.textContent = opt

            questionBtn.addEventListener('click', ()=> answerCheck(questionBtn, opt, optIdx +1, question.correct))
            questionBtns.append(questionBtn)
            
        })

        const displayAnswer = document.createElement('div')
        displayAnswer.classList.add('answer')


        displayQuestion.append(questionBox)
    })
}

const answerCheck = (questionBtn,opt, optIdx, correctAns) => {
    if(optIdx === correctAns){
        score++
        displayScore.textContent = score;
        questionBtn.classList.add('benul')
    } else {
        score--
        displayScore.textContent = score
        questionBtn.classList.add('salah')
    }
    clicked.push(opt)
    questionBtn.disabled = clicked.includes(opt)

}

// function showResult(questionBox, answer){
//     const displayAnswer = document.querySelector('.answer')
//     displayAnswer.textContent = answer
// }

generateQuestions()

