const url = document.querySelector('#input-url'),
downBtn = document.querySelector('#down-btn');

downBtn.addEventListener('click', (e) => {
  console.log("down btn working")
  e.preventDefault() // Preventing form from submitting
  console.log(url.value)
  

})


/*
https://www.youtube.com/watch?v=G3e-cpL7ofc

 */