let close1 = document.querySelector('#close')
let yesBtn = document.querySelector('#yesBtn')

close1.addEventListener('click', ()=>{
  // alert('closing')
  document.querySelector('.formContainer').style.display = 'none'
})

yesBtn.addEventListener('click', ()=>{
  document.querySelector('.formContainer').style.display = 'flex'

  document.querySelector('.formContainer').style.flexDirection = 'column'

})




