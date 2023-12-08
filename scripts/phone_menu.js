let btn = document.querySelector(".nav__phone1")
let btnt = document.querySelector(".nav__phone2")


let phone__menu = gsap.to('.nav__phone-menu', {
    paused: true,
    opacity: 1,
    duration: 0.5,
})
let phone__menu1 = gsap.to('.navigation', {
    paused: true,
    y:250,
    duration: 0.5,
})

btn.addEventListener('click',() => {
    let phone__menu__anim1 = gsap.to('.nav__phone-btn1', {
        y:-120,
        duration: 0.1,
    })
    let phone__menu__anim2 = gsap.to('.nav__phone-btn2', {
        y:-170,
        duration: 0.2,
    })
    let phone__menu__anim3 = gsap.to('.nav__phone-btn3', {
        y:-220,
        duration: 0.3,
    })
    let phone__menu__anim4 = gsap.to('.nav__phone-btn4', {
        y:-270,
        duration: 0.4,
    })
    let phone__menu__anim5 = gsap.to('.nav__phone-btn5', {
        y:-320,
        duration: 0.5,
    })
    phone__menu.play()
    phone__menu1.play()
    btn.style.display='none'
    btnt.style.display='flex'
})

btnt.addEventListener('click', () => {
    let phone__menu__anim1 = gsap.to('.nav__phone-btn1', {
        y:-120,
        duration: 0.1,
    })
    let phone__menu__anim2 = gsap.to('.nav__phone-btn2', {
        y:-120,
        duration: 0.2,
    })
    let phone__menu__anim3 = gsap.to('.nav__phone-btn3', {
        y:-120,
        duration: 0.3,
    })
    let phone__menu__anim4 = gsap.to('.nav__phone-btn4', {
        y:-120,
        duration: 0.4,
    })
    let phone__menu__anim5 = gsap.to('.nav__phone-btn5', {
        y:-120,
        duration: 0.5,
    })
    phone__menu.reverse()
    phone__menu1.reverse()
    btn.style.display='flex'
    btnt.style.display='none'
})