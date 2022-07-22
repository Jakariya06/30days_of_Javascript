const btn = document.getElementById("btn")
const shapes = [
    "quad-circle-1",
    "quad-circle-2",
    "quad-circle-3",
    "quad-circle-4",
    "triangle-1",
    "triangle-2",
    "triangle-3",
    "triangle-4",
    "circle",
]

const colors = [
    "#A6FE49",
    "#F5FB35",
    "#17D9F8",
    "#FA1010",
    "#F1A205",
    "#E9EFFA"
]

const boxes = document.querySelectorAll('.container div')

let generatePattern = () => {
    boxes.forEach((box) => {
        box.className = "";
        let i = Math.floor(Math.random()* shapes.length);
        let j = Math.floor(Math.random()* boxes.length);
        box.classList.add(shapes[i])
        box.style.backgroundColor = colors[j]
    })
}

btn.addEventListener("click", generatePattern)
window.addEventListener("load", generatePattern)
