// Variaveis
const navMenu = document.getElementById('nav-menu-cel')
const btnMenu = document.getElementById('btn-menu')
const linkHome = document.getElementById('link-home')
const linkSkill = document.getElementById('link-skill')
const linkProjeto = document.getElementById('link-projeto')
const linkContato = document.getElementById('link-contato')
const slider = document.querySelectorAll('.card-skill')
const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')

let currentSlide = 0


// Funções ----------------------------------------------

const menuClose = () => {
    navMenu.style.display = 'none'
}
const menuOpen = () =>{
    navMenu.style.display = 'block'
}

const hideSlider = () =>{
    slider.forEach(item => item.classList.remove('on'))
}

const showSlider = () =>{
    slider[currentSlide].classList.add('on')
}

const nextSlider = () =>{
    hideSlider()
    if(currentSlide === slider.length - 1){
        currentSlide = 0
    }else{
        currentSlide++
    }
    showSlider()
}

const prevSlider = () =>{
    hideSlider()
    if(currentSlide === 0){
        currentSlide = slider.length - 1
    }else{
        currentSlide--
    }
    showSlider()
}

// Eventos ----------------------------------------------

btnMenu.addEventListener('click', () => {
    if (navMenu.style.display == 'none') {
        menuOpen()

    } else {
        menuClose()
    }
})

linkHome.addEventListener('click', menuClose)
linkSkill.addEventListener('click', menuClose)
linkProjeto.addEventListener('click', menuClose)
linkContato.addEventListener('click', menuClose)

btnPrev.addEventListener('click', prevSlider)
btnNext.addEventListener('click', nextSlider)