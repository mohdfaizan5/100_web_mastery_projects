let form = document.querySelector('#item-form')
let userInput = document.querySelector('#item-input')
let allItemLi = document.querySelector('#item-list')


// Storing data into array for local storage
const allItems = []



// Adding new tasks
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('form submitted');

  // appending to array
  allItems.push(userInput.value)
  console.log(allItems)

  // Checking whether input is empty, if empty alerting them to enter a value
  if (userInput.value === '') {
    alert('Enter a todo first');
    return;
  }

  // 1. Creating element to add

  let newLi = document.createElement('li')
  // newLi.innerText = userInput.value
  newLi.appendChild(document.createTextNode(userInput.value))

  let newButton = document.createElement('button')
  newButton.className = "remove-item btn-link text-red";
  let newIcon = document.createElement('i');
  newIcon.className = "fa-solid fa-xmark";

  newButton.appendChild(newIcon)
  newLi.appendChild(newButton)

  allItemLi.appendChild(newLi)


  // clearing the input(useablity)
  userInput.value = '';
  console.log('success')

  clearUI()
})


// removing a particular item
allItemLi.addEventListener('click', removeItem)
function removeItem(e) {
  console.log(e.target.parentElement.classList.contains("remove-item"))
  if (e.target.parentElement.classList.contains("remove-item")) {

    console.log(e.target.parentElement.parentElement)
    e.target.parentElement.parentElement.remove()
  }

  // If all items are removed then also disappear ui
  clearUI()
}


// Clear all 
let clearBtn = document.querySelector('#clear')

clearBtn.addEventListener('click', (e) => {
  allItemLi.innerHTML = '' // wrong way❌
  clearUI()
});

// 3.When there is no items, dont show 'filter item' and 'clear all'
let filter = document.querySelector('.filter')

function clearUI() {
  let items = allItemLi.querySelectorAll('li')

  if (items.length === 0) {
    clearBtn.style.display = 'none'
    filter.style.display = 'none'
  }
  else {

    clearBtn.style.display = 'block'
    filter.style.display = 'block'
  }
}

clearUI()


// Filtering the search
filter.addEventListener('input', (event) => {
  
  // 1. Capturing user input when for changes
  const text = event.target.value.toLowerCase()
  console.log(text)

  // Everytime sometext is changed check all items (because everytime we're checking as items and other items are added)
  const items = allItemLi.querySelectorAll('li')
  
  // Iterating all items in all items array, 
  items.forEach(item => {
    const itemName = item.firstChild.textContent.toLocaleLowerCase()
    
    
    if(itemName.indexOf(text) != -1){
      item.style.display = 'flex';
    }
    else{
      item.style.display = 'none';
    }

  })

})





// filter.addEventListener('input', (event) => {
//   // console.log("Filtering started")
//   const text = event.target.value.toLowerCase()
//   let items = allItemLi.querySelectorAll('li')

//   items.forEach(item => {

//     if ((item.firstChild.textContent.toLocaleLowerCase().indexOf(text)) != -1) {
//       item.style.display = 'flex'
//     }
//     else {
//       item.style.display = 'none'

//     }
//   })


//   // console.log(items)
// })

// function filterItems(e) {
//   const items = allItemLi.querySelectorAll('li')
//   const text = e.target.value.toLowerCase();

//   items.forEach(item => {
//     const itemName = item.firstChild.textContent.toLowerCase()

//     if (itemName.indexOf(text)!= -1){
//       item.style.display = "flex"
//     }
//     else{
//       item.style.display = "none"
//     }
//   });
// }