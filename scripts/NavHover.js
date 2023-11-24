let main = document.querySelector('.nav__main-page')
let shop = document.querySelector('.nav__shop')
let supp = document.querySelector('.nav__supp')
let about = document.querySelector('.nav__about')
let login = document.querySelector('.nav__login')

let main_anim
let shop_anim
let supp_anim
let about_anim
let login_anim

let anims = [main_anim, shop_anim, supp_anim, about_anim, login_anim]
let a = [main, shop, supp, about, login]
let lines = ['.line__main', '.line__shop', '.line__supp', '.line__about', '.line__login']

for (let i = 0; i < anims.length; i++) {
    anims[i] = gsap.to(lines[i], {
        paused: true,
        width: '100%',
        duration: 0.4,
    })

    a[i].addEventListener('mouseover', () => anims[i].play())
    a[i].addEventListener('mouseout', () => anims[i].reverse())
}