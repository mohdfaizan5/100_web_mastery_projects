let cursor = document.querySelector('#cursor') 

document.addEventListener('mousemove', (event)=>{
  
  cursor.style.top = event.y + 'px'
  cursor.style.left = event.x + 'px'
})