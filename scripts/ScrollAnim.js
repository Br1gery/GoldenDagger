let elem1 = document.querySelector('.layer')
let elem2 = document.querySelector('.layer__header')

if (ScrollTrigger.isTouch !== 1) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.container1'
    })
}

if (ScrollTrigger.isTouch == 1){
    elem1.style.cssText += 'transition: none;'
    elem2.style.cssText += 'transition: none;'
}