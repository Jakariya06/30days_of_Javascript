document.getElementById("btn").addEventListener("click",function(e){
    let word = document.getElementById("input").value;
    checkPalindrome(word);

    e.preventDefault()
});

/*function checkPalindrome(word){
    let newWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let wordLength = newWord.length;
    let halfWordLength = Math.floor( wordLength/2 );
    let result =document.getElementById("result");
    let i;

    for( i = 0; i < halfWordLength; i++){
        if( newWord[i] !== newWord[wordLength-1-i]){
            result.textContent = "Nope! Not a palindrome";
            result.style.color ='red';
            return;
        }
        result.textContent = "Yes! It's a palindrome"
        result.style.color ='green'
    }
}*/

function checkPalindrome(word){
    let result = document.getElementById('result')
    let regEX = /[\W_]/g
    let newWord = word.replace(regEX, '').toLowerCase();
    let reverseWord = newWord.split('').reverse().join('');
    let wr = document.getElementById('resultword')
    wr.value = reverseWord;

    if(word == ''){
        return false;
    }

    if(reverseWord === newWord){
        result.textContent = "YES! It's a palindrome"
        result.style.color ='green'
    } else {
        result.textContent = "NOpe! It's not a palindrome"
        result.style.color ='red';
    }
}
