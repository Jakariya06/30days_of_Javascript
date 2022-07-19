let box = document.getElementById('box'),
    code = document.getElementById('code'),
    inputs = document.querySelectorAll('.sliders input')

inputs.forEach((input)=> input.addEventListener("input", createShadow))

function createShadow(){
    let hz_shadow = document.getElementById('h-shadow').value,
        vt_shadow = document.getElementById('v-shadow').value,
        blurRad = document.getElementById('blur-radius').value,
        spreadRad = document.getElementById('spread-radius').value,
        shadowColor = document.getElementById('shadow-color').value,
        shaColOpacity = document.getElementById('shadow-color-opacity').value,
        shadowInset = document.getElementById('shadow-inset').checked

        let boxShadow = shadowInset ? `inset ${hz_shadow}px ${vt_shadow}px ${blurRad}px ${spreadRad}px
        ${hexToRgba(shadowColor, shaColOpacity)}` : `${hz_shadow}px ${vt_shadow}px ${blurRad}px ${spreadRad}px
        ${hexToRgba(shadowColor, shaColOpacity)}`
        
        box.style.boxShadow = boxShadow
        code.textContent = `box-shadow: ${boxShadow}`
}

function hexToRgba(shadowColor, shaColOpacity){
    let r = parseInt(shadowColor.substr(1,2),16),
        g = parseInt(shadowColor.substr(3,2),16),
        b = parseInt(shadowColor.substr(5,2),16)

    return `rgba(${r}, ${g}, ${b}, ${shaColOpacity})`        
}


function copyCode(){
        if(navigator.clipboard){
            navigator.clipboard.writeText(code.value).then(()=>{
                swal("Nice!", "Code Copied Succesfully", "success");
            })
        }
    
}

window.onload = createShadow()