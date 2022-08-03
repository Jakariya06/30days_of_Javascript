let decimalInput = document.getElementById('decimal-input'),
    binaryInput = document.getElementById('binary-input'),
    errMsg = document.getElementById('error-msg')


decimalInput.addEventListener('input', ()=> {
    let decimalValue = parseInt(decimalInput.value)
    binaryInput.value = decimalValue.toString(2)
})

binaryInput.addEventListener('input', ()=> {
    let binaryValue = binaryInput.value
    if(binaryValidator(binaryValue)){
        decimalInput.value = parseInt(binaryValue,2)
        errMsg.textContent =""

    } else{
        errMsg.textContent ="Enter valid binary input"
    }

    function binaryValidator(num){
        for(let i = 0; i < num.length; i++){
            if(num[i] != "0" && num[i] != "1") {
                return false
            }
        }
        return true
    }
})