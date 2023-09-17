const container = document.querySelector('#insert')

document.addEventListener('keypress', event =>{
  const keyInfo = {
    'key': event.key === ' ' ? 'Space': event.key,
    'keyCode': event.keyCode,
    'code': event.code
  }
  container.innerHTML = ''
  for(let key in keyInfo){
    
    // creating new elements to add
    let newDiv = document.createElement('div')
    newDiv.classList.add('key')
    newDiv.textContent = keyInfo[key]
  
    let small = document.createElement('small')
    small.textContent = key

    newDiv.appendChild(small)

    console.log(newDiv)
    container.appendChild(newDiv)
  
  }

})

/*
    <div class="key">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>e.key</small>
    </div>

    <div class="key">
      ${e.keyCode}
      <small>e.keyCode</small>
    </div>

    <div class="key">
      ${e.code}
      <small>event.code</small>
    </div>
*/