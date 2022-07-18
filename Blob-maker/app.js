let outputCode = document.getElementById('css-code'),
    sliders = document.querySelectorAll("input[type='range']")

sliders.forEach((slider)=>{
    slider.addEventListener("input", createBlob)
})

let inputs = document.querySelectorAll("input[type='number']")

inputs.forEach((inp)=>{
    inp.addEventListener("change", createBlob)
})

function createBlob(){
    let radiusOne = sliders[0].value,
        radiusTwo = sliders[1].value,
        radiusThree = sliders[2].value,
        radiusFour = sliders[3].value;

    let blobHeight = inputs[0].value,
        blobWidth  = inputs[1].value;
    
        let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`;
        
        document.getElementById('blob').style.cssText = `border-radius: ${borderRadius}; height: ${blobHeight}px; width: ${blobWidth}px`
        outputCode.value = `border-radius: ${borderRadius};`
}


/*document.getElementById('copy').addEventListener("click", ()=>{
    outputCode.select();
    document.execCommand('copy')
    alert('Copied')

})*/
document.getElementById('copy').addEventListener("click", ()=>{
    if(navigator.clipboard){
        navigator.clipboard.writeText(outputCode.value).then(()=>{
            alert('COPIED')
        })
    }
})

createBlob()

