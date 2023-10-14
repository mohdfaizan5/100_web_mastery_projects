// gsap.to("header nav", {
//   y: -100,
//   duration: 2,
//   delay: 2
// })

// let timeline1 = gsap.timeline()



gsap.from("header nav, header .right", {
  y: -100, 
  duration: 1,
  stagger: .2
})

gsap.from("main h1, main h2, main .btn1, main img", {
  y: 300,
  duration: 1,
  stagger: 0.2
})




























// gsap.to(".head", {
//   y: 100,
//   // x: 100,
//   repeat: 2,
//   yoyo: true
//   x: 700,
//   duration: 3,
//   delay: 3,
//   repeat: 2,
//   yoyo: true
// })

// gsap.from("header", {
//   x: 100,
//   duration: 1,
//   delay: 5000,
//   repeat: -1,
//   yoyo: true
// })