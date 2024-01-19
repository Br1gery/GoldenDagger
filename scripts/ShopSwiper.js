new Swiper('.mySwiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

let left_btn = document.querySelector('.swiper-button-prev')
let right_btn = document.querySelector('.swiper-button-next')
let dis_btn = document.querySelector('.swiper-button-disabled')
let left_text = document.querySelector('.left-text-text')
let mid_text = document.querySelector('.mid-text-text')
let right_text = document.querySelector('.right-text-text')

let slide = 1 

let left_anim = gsap.to('.left-text',{
    opacity: 0.5,
    paused: true,
    duration: 0.5,
    width: 400,
})
let mid_anim = gsap.to('.mid-text',{
    opacity: 0.5,
    paused: true,
    duration: 0.5,
    width: 400,
})
let right_anim = gsap.to('.right-text',{
    opacity: 0.5,
    paused: true,
    duration: 0.5,
    width: 400,
})

let left_text_anim = gsap.to('.left-text-text', {
    opacity: 1,
    delay: 0.5,
    paused: true,
    top: 0,
})
let mid_text_anim = gsap.to('.mid-text-text', {
    opacity: 1,
    delay: 0.5,
    paused: true,
    top: 0,
})
let right_text_anim = gsap.to('.right-text-text', {
    opacity: 1,
    delay: 0.5,
    paused: true,
    top: 0,
})

mid_text_anim.play()
mid_anim.play()

left_btn.addEventListener('click',()=>{
    slide--
    if(slide == 1){
        mid_text_anim.play()
        mid_anim.play()
        right_anim.reverse()
        right_text_anim.reverse()
        left_anim.reverse()
        left_text_anim.reverse()
    }
    if(slide == 0){
        left_text_anim.play()
        left_anim.play()
        mid_anim.reverse()
        mid_text_anim.reverse()
    }
})

right_btn.addEventListener('click',()=>{
    slide++
    if(slide == 1){
        mid_text_anim.play()
        mid_anim.play()
        left_anim.reverse()
        left_text_anim.reverse()
    }
    if(slide == 2){
        right_text_anim.play()
        right_anim.play()
        mid_anim.reverse()
        mid_text_anim.reverse()
    }
})