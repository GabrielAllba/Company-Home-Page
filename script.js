let open = document.getElementById('headlines')
let menu = document.getElementById('menu')
let close = document.getElementById('close')

open.addEventListener('click', function(){
    menu.style.display = 'flex'
    menu.style.height = "100vh"
})
close.addEventListener('click', function(){
    menu.style.height = '0px'
})

function myfunction(){
    menu.style.height = '0px'
}