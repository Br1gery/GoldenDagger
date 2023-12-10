let down1 = document.querySelector('.news__up-bigger')
let down2 = document.querySelector('.news__item')
let down3 = document.querySelector('.news__item1')
let down4 = document.querySelector('.news__item2')

let down1_anim
let down2_anim
let down3_anim
let down4_anim

let items = [down1, down2, down3, down4]
let anims2 = [down1_anim, down2_anim, down3_anim, down4_anim]
let squares = ['.down1', '.down2', '.down3', '.down4']

for (let i = 0; i < items.length; i++) {
    if (i == 0) {
        anims2[i] = gsap.to(squares[i], {
            paused: true,
            top: 0,
            duration: 0.3,
            height: 360,
        })
    } else {
        anims2[i] = gsap.to(squares[i], {
            paused: true,
            top: 0,
            duration: 0.3,
        })
    }

    items[i].addEventListener('mouseover', () => {
        anims2[i].play()
        items[i].style.cssText += "-moz-box-shadow:0 0 20px #FFF;-webkit-box-shadow:0 0 20px #FFF;box-shadow:0 0 20px #FFF;"
    })
    items[i].addEventListener('mouseout', () => {
        anims2[i].reverse()
        items[i].style.cssText -= "-moz-box-shadow:0 0 20px #FFF;-webkit-box-shadow:0 0 20px #FFF;box-shadow:0 0 20px #FFF;"
    })
}
