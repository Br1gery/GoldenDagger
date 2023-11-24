let main = document.querySelector('.nav__main-page')
let shop = document.querySelector('.nav__shop')
let supp = document.querySelector('.nav__supp')
let about = document.querySelector('.nav__about')
let login = document.querySelector('.nav__login')

let main_anim = gsap.to('.line__main',{
    paused: true,
    width: '100%',
    duration: 0.4,
})

main.addEventListener('mouseover', ()=>main_anim.play())
main.addEventListener('mouseout', ()=>main_anim.reverse())

let shop_anim = gsap.to('.line__shop',{
    paused: true,
    width: '100%',
    duration: 0.4,
})

shop.addEventListener('mouseover', ()=>shop_anim.play())
shop.addEventListener('mouseout', ()=>shop_anim.reverse())

let supp_anim = gsap.to('.line__supp',{
    paused: true,
    width: '100%',
    duration: 0.4,
})

supp.addEventListener('mouseover', ()=>supp_anim.play())
supp.addEventListener('mouseout', ()=>supp_anim.reverse())

let about_anim = gsap.to('.line__about',{
    paused: true,
    width: '100%',
    duration: 0.4,
})

about.addEventListener('mouseover', ()=>about_anim.play())
about.addEventListener('mouseout', ()=>about_anim.reverse())

let login_anim = gsap.to('.line__login',{
    paused: true,
    width: '100%',
    duration: 0.4,
})

login.addEventListener('mouseover', ()=>login_anim.play())
login.addEventListener('mouseout', ()=>login_anim.reverse())