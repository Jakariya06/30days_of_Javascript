let container = document.getElementById('container'),
    gridWidth = document.getElementById('width-range'),
    gridHeight = document.getElementById('height-range'),
    gridBtn = document.getElementById('create'),
    clearBtn = document.getElementById('clear'),
    colorBtn = document.getElementById('color-input'),
    eraseBtn = document.getElementById('erase'),
    paintBtn = document.getElementById('paint'),
    widthVal = document.getElementById('width-value'),
    heightVal = document.getElementById('height-value')


let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup" 
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend"
    }
}

let deviceType = ""

let draw = false
let erase = false

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent")
        deviceType = "touch"
        return true
    } catch (error) {
        deviceType = "mouse"
        return false
    }
}

isTouchDevice()

gridBtn.addEventListener("click", ()=>{
    container.innerHTML = ""
    let count = 0

    for(let i =0; i < gridHeight.value; i++ ){
        count += 2
        let div = document.createElement("div")
        div.classList.add("gridRow")

        for(let j =0; j < gridWidth.value; j++){
            count += 2
            let col = document.createElement("div")
            col.classList.add("gridCol")
            col.setAttribute("id", `gridCol${count}`)

            col.addEventListener(events[deviceType].down, ()=>{
                draw = true

                if(erase){
                    col.style.backgroundColor = "transparent"
                } else{
                    col.style.backgroundColor = colorBtn.value
                }
            })

            col.addEventListener(events[deviceType].move, (e)=> {
                let elementID = document.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY
                ).id
                console.log(elementID)
                checker(elementID)
            })
            
            col.addEventListener(events[deviceType].up, ()=> {
                draw = false
            })

            div.appendChild(col)
        }
        container.appendChild(div)
    }
})


function checker(elementID){
    let gridColumns = document.querySelectorAll('.gridCol')
    gridColumns.forEach((element)=> {
        if(elementID == element.id){
            if(draw && !erase){
                element.style.backgroundColor = colorBtn.value
            } else if(draw & erase){
                element.style.backgroundColor = "transparent"
            }
        }
    })
}

clearBtn.addEventListener("click", ()=>{
    container.innerHTML = ""
})

eraseBtn.addEventListener("click", ()=> {
    eraseBtn.style.backgroundColor = "#34f50e"
    paintBtn.style.backgroundColor = "#5F85B5"
    erase = true
} )

paintBtn.addEventListener("click", ()=> {
    eraseBtn.style.background = "#5F85B5"
    paintBtn.style.backgroundColor = "#34f50e"
    erase = false
})

gridWidth.addEventListener("input", ()=> {
    widthVal.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}`: gridWidth.value
})

gridHeight.addEventListener("input", ()=> {
    heightVal.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value
})

window.onload = () => {
    gridWidth.value = 0
    gridHeight.value = 0
}