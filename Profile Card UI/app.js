const theme = document.querySelector(':root')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e)=>{
        const color = e.currentTarget.classList;

       if(color.contains('btn1')){
            theme.style.setProperty('--theme-color','#499fd8')
        } 
        else if(color.contains('btn2')){
            theme.style.setProperty('--theme-color', '#ff507f')
        }
        else if(color.contains('btn3')){
            theme.style.setProperty('--theme-color', '#16b983')
        }
        else if(color.contains('btn4')){
            theme.style.setProperty('--theme-color', '#681b8a')
        }
        else{
            theme.style.setProperty('--theme-color', '#fcc647')
        }
    })


})