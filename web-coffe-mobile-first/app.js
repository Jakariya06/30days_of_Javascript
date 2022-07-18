const toogleNav = document.getElementById('nav'),
    bar = document.getElementById('bar'),
    overlay = document.getElementById('overlay')
    listMenu = document.getElementById('listMenu'),
    close = document.getElementById('close'),
    overlay2 = document.getElementById('overlay-cart'),
    toogle2 = document.getElementById('toggle2'),
    shop = document.getElementById('shop')

toogleNav.onclick = function(){
bar.style.display = 'flex'
overlay.style.display = 'block'
listMenu.style.display = 'flex'
}

close.onclick = function(){
bar.style.display = 'none'
overlay.style.display = 'none'
listMenu.style.display = 'none'
}

shop.onclick = function() {
    overlay2.style.display = 'block'
}

toogle2.onclick = function() {
    overlay2.style.display = 'none'
}