let boxes = document.querySelectorAll('.box')

document.addEventListener('scroll', event=>{
  console.log(window.innerHeight)

  const triggerButtom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if(boxTop < triggerButtom){
      box.classList.add('show')
    }else{

      box.classList.remove('show')
    }
  })
})