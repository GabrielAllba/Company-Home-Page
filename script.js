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

/*red car*/
let redViewButton = document.getElementById('red-one')
let displayRed = document.getElementById('red-pop')

redViewButton.addEventListener('click', function(){
    displayRed.style.width = '100%'
})




/*grey car*/
let greyViewButton = document.getElementById('grey-one')
let displayGrey = document.getElementById('grey-pop')

greyViewButton.addEventListener('click', function(){
    displayGrey.style.width = '100%'
})
/*yellow car*/
let yellowViewButton = document.getElementById('yellow-one')
let displayYellow = document.getElementById('yellow-pop')

yellowViewButton.addEventListener('click', function(){
    displayYellow.style.width = '100%'
})
/*black car*/
let blackViewButton = document.getElementById('black-one')
let displayBlack = document.getElementById('black-pop')

blackViewButton.addEventListener('click', function(){
    displayBlack.style.width = '100%'
})
/*white car*/
let whiteViewButton = document.getElementById('white-one')
let displayWhite = document.getElementById('white-pop')

whiteViewButton.addEventListener('click', function(){
    displayWhite.style.width = '100%'
})

/*maroon car*/
let maroonViewButton = document.getElementById('maroon-one')
let displayMaroon = document.getElementById('maroon-pop')

maroonViewButton.addEventListener('click', function(){
    displayMaroon.style.width = '100%'
})

/* close button for popup view*/
let closePopView = document.getElementsByClassName('close-popup')
let alldisplay = document.getElementsByClassName('details')
for(let i = 0; i < closePopView.length; i++){
    closePopView[i].addEventListener('click', function(){
        for(let x = 0; x < alldisplay.length; x++){
            alldisplay[x].style.width = '0%'
        }
    })
}