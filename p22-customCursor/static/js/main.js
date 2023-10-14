let cursor = document.querySelector('.cursor')

document.querySelector('body').addEventListener('mousemove', (event)=>{
  console.log(event.x)
  cursor.style.top = `${event.y}px`
  cursor.style.left = `${event.x}px`
})