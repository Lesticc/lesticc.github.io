let hamburguerState = true
let getClick = document.querySelector('.section-22')
let h1 = document.getElementById('h1')
let h2 = document.getElementById('h2')
let h3 = document.getElementById('h3')

const menu = document.getElementById('menu')
const body = document.body

function playCloseAnim(){
    h1.style.top='50%'
    h1.style.transform='translateY(-50%) rotate(45deg)'
    h2.style.opacity='0'
    h3.style.bottom='50%'
    h3.style.transform='translateY(50%) rotate(-45deg)'
}

function playOpenAnim(){
    h1.style.top='3px'
    h1.style.transform='translateY(0%) rotate(0deg)'
    h2.style.opacity='1'
    h3.style.bottom='3px'
    h3.style.transform='translateY(0%) rotate(0deg)'
}

getClick.onclick = () => {
    if(hamburguerState){
        playCloseAnim()
        hamburguerState=false
        menu.style.display = 'flex'
        body.style.overflowY = 'hidden';
        return
    }
    playOpenAnim()
    hamburguerState=true
    menu.style.display = 'none'
    body.style.overflowY = 'auto';
}

function getWindowSize(){
    const width = window.innerWidth
    if(width<=730){
        getClick.style.right = '0px'
    }else{
        getClick.style.right = '-500px'
    }
}

window.onresize = getWindowSize

document.querySelector('.menu').onclick = () => {
    menu.style.display = 'none'
    hamburguerState = true
    playOpenAnim()
}