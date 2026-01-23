const root = document.querySelector(':root')
const cappuccino = document.getElementById('cappuccino')
const skillList = document.getElementById('skillList')
const projectList = document.getElementById('projectList')

const lua = '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.1875 21C37.1875 25.2932 35.482 29.4105 32.4463 32.4463C29.4105 35.482 25.2932 37.1875 21 37.1875V39.8125C31.3897 39.8125 39.8125 31.3897 39.8125 21H37.1875ZM21 37.1875C16.7068 37.1875 12.5895 35.482 9.55371 32.4463C6.51796 29.4105 4.8125 25.2932 4.8125 21H2.1875C2.1875 31.3897 10.6103 39.8125 21 39.8125V37.1875ZM4.8125 21C4.8125 16.7068 6.51796 12.5895 9.55371 9.55371C12.5895 6.51796 16.7068 4.8125 21 4.8125V2.1875C10.6103 2.1875 2.1875 10.6103 2.1875 21H4.8125ZM27.125 24.9375C24.4563 24.9375 21.8968 23.8773 20.0097 21.9903C18.1227 20.1032 17.0625 17.5437 17.0625 14.875H14.4375C14.4375 18.2399 15.7742 21.467 18.1536 23.8464C20.533 26.2258 23.7601 27.5625 27.125 27.5625V24.9375ZM35.7437 20.0707C34.8483 21.5559 33.5842 22.7844 32.0741 23.6371C30.564 24.4898 28.8592 24.9377 27.125 24.9375V27.5625C29.3114 27.5631 31.4609 26.9988 33.365 25.9241C35.2691 24.8494 36.8631 23.3009 37.9925 21.4287L35.7437 20.0707ZM17.0625 14.875C17.0623 13.1408 17.5102 11.436 18.3629 9.92587C19.2156 8.41578 20.4441 7.1517 21.9293 6.25625L20.5713 4.00925C18.6994 5.1385 17.151 6.73226 16.0764 8.636C15.0017 10.5397 14.4372 12.6889 14.4375 14.875H17.0625ZM21 4.8125C20.9121 4.81081 20.8253 4.79169 20.7448 4.75624C20.6643 4.72079 20.5916 4.66973 20.531 4.606C20.4572 4.53189 20.4073 4.43744 20.3875 4.33475C20.3805 4.2805 20.384 4.123 20.5713 4.00925L21.9293 6.25625C22.8095 5.72425 23.093 4.7495 22.9898 3.983C22.8813 3.18675 22.2548 2.1875 21 2.1875V4.8125ZM37.9925 21.4287C37.877 21.616 37.7195 21.6195 37.6653 21.6125C37.5626 21.5927 37.4681 21.5428 37.394 21.469C37.3303 21.4084 37.2792 21.3357 37.2438 21.2552C37.2083 21.1747 37.1892 21.0879 37.1875 21H39.8125C39.8125 19.7452 38.8133 19.1187 38.017 19.0102C37.2505 18.907 36.2757 19.1905 35.7437 20.0707L37.9925 21.4287Z" fill="white"/></svg>'
// Infelizmente os do fontawesome eram muito ruins para usar :(

let firstTime = false
let color = false

let burgerOn = false

// 0 false = claro
// 1 true  = escuro

function loadSkills(){
    let a = 0
    let b = skills.length

    console.log('Loading skills...')
    try{
        skills.forEach(element => {
            const skill = document.createElement('div')
            skill.className = 'skill'

            const titulo = document.createElement('div')
            titulo.className = 'titulo'
            titulo.innerHTML = `<img src='${element.icon}' ${element.title.toLowerCase()=="javascript" ? "style='background-color:black;'" : null}> ${element.title}`
            // Não são necessários alt na img já que o título está do lado

            const progressBarBackground = document.createElement('div')
            progressBarBackground.className = 'progressBarBackground'
            const progressBar = document.createElement('div')
            progressBar.className = 'progressBar'
            progressBar.style.width = element.progress
            progressBarBackground.append(progressBar)

            const progress = document.createElement('div')
            progress.className = 'progress'
            progress.innerText = element.progress

            skill.append(titulo, progressBarBackground, progress)
            skillList.append(skill)

            a++
        });
    }catch(Error){
        console.error('A error ocurred loading skills! Error: ' + Error)
    }

    if(a==b)console.log('Skills loaded!')
}

function loadProjects(){
    projects.forEach(element => {
        const project = document.createElement('div')
        project.className = 'project'
        const title = document.createElement('div')
        title.className = 'title'
        title.innerText = `${element.title}`
        const stars = document.createElement('div')
        for(let i=0; i<element.stars; i++){
            const star = document.createElement('i');
            star.className = 'fa-solid fa-star active-star';
            stars.append(star);
        }
        for(let i=0; i<(5-element.stars); i++){
            const star = document.createElement('i');
            star.className = 'fa-solid fa-star unactive-star';
            stars.append(star);
        }

        const hr = document.createElement('hr')
        const desc = document.createElement('div')
        desc.className = 'desc'
        desc.innerText = `${element.desc}`

        const example = document.createElement('div')
        example.className = 'example'
        const a = document.createElement('a')
        a.href = `${element.href}`
        a.target = '_blank'
        a.innerText = `${element.example}`

        example.append(a)

        project.append(title, stars, desc, hr, example)
        projectList.append(project)
    })
}

function updateColor(){

    console.log('Updating color')

    if(color){
        root.style.setProperty('--corSombra1', 'rgba(255, 255, 255, 0.7)');
        root.style.setProperty('--corSombra2', 'rgba(255, 255, 255, 0.8)');
        root.style.setProperty('--corTextos', 'rgba(255, 255, 255, 1)');
        root.style.setProperty('--corItens', 'rgba(150, 150, 200, 1)')
        root.style.setProperty('--fundoItem', 'rgba(45, 45, 78, 1)');
    
        root.style.setProperty('--backgroundHeader', 'rgba(25, 25, 31, 1)');
        root.style.setProperty('--backgroundMain', 'rgba(25, 25, 31, 1)');
        root.style.setProperty('--backgroundSkill', 'rgba(0, 0, 0, 0.5)')

        document.getElementById('colorButton').innerHTML = lua
        document.getElementById('colorButtonMob').innerHTML = lua

        cappuccino.src = './main/assets/img/canecadark.png'

        return;
    }

    root.style.setProperty('--corSombra1', 'rgba(0, 0, 0, 0.3)');
    root.style.setProperty('--corSombra2', 'rgba(0, 0, 0, 0.2)');
    root.style.setProperty('--corTextos', 'rgba(0, 0, 0, 1)');
    root.style.setProperty('--corItens', 'rgba(29, 29, 75, 1)');
    root.style.setProperty('--fundoItem', 'rgba(219, 219, 255, 1)');
    
    root.style.setProperty('--backgroundHeader', 'rgba(255, 255, 255, 1)');
    root.style.setProperty('--backgroundMain', 'rgba(255, 255, 255, 1)');
    root.style.setProperty('--backgroundSkill', 'rgba(128, 128, 128, 0.5)')

    cappuccino.src = './main/assets/img/caneca.png'


    document.getElementById('colorButton').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z"/></svg>'
    document.getElementById('colorButtonMob').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z"/></svg>'
}

function openMenu(a){
    document.querySelector('menu').style.display = a ? 'flex' : 'none'
    document.querySelector('main').style.display = a ? 'none' : 'flex'

    console.log(a ? 'Abrindo o menu' : 'Fechando o menu')
}

function changeColor(){
    color = !color
    updateColor()
    save()
}

function hamburguer(){
    if(!burgerOn){
        document.querySelector('.linha2').style.display = 'none';
        document.querySelector('.linha1').style.transform = 'rotate(45deg)'
        document.querySelector('.linha1').style.top = '7px'
        document.querySelector('.linha3').style.transform = 'rotate(-45deg)'
        
        burgerOn = true
        openMenu(true)

        return
    }

    document.querySelector('.linha2').style = ''
    document.querySelector('.linha1').style = ''
    document.querySelector('.linha3').style = ''

    burgerOn = false
    
    openMenu(false)
}

const load = () => {
    console.log('Loading...')

    if(localStorage.getItem('color') && localStorage.getItem('firstTime')){
        color = localStorage.getItem('color') === 'true'
        firstTime = localStorage.getItem('firstTime') === 'true'
        updateColor()
    }

    return console.log('Loaded successfully!')
}

const save = () => {
    console.log('Saving...')

    localStorage.setItem('color', color)
    localStorage.setItem('firstTime', firstTime)

    console.log('Saved!')
}

const check1stTime = () => {
    if(!firstTime){
        const systemColor = window.matchMedia('(prefers-color-scheme: dark)').matches;
        color = systemColor ? true : false

        firstTime = true

        console.log(`Welcome! It is your first time, and your system color is: ${systemColor ? 'Dark!' : 'White!'}`)
        save()
        updateColor()
    }
}

load()
loadSkills()
loadProjects()
check1stTime()