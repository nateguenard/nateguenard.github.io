// Part one: Greeting: Click Event Exercise
let amButton = document.querySelector('#am')
let pmButton = document.querySelector('#pm')

amButton.addEventListener('click', () => {
    document.querySelector('h3').innerHTML = "Good morning!"
})

pmButton.addEventListener('click', () => {
    document.querySelector('h3').innerHTML = "Good night!"
})

// Part two: Switch the background color
let red = document.querySelector('#red')
let yellow = document.querySelector('#yellow')
let green = document.querySelector('#green')
let blue = document.querySelector('#blue')

red.addEventListener('click', ()=>{
    document.querySelector('#div_color').setAttribute('class', 'bg_red')
})

yellow.addEventListener('click', ()=>{
    document.querySelector('#div_color').setAttribute('class', 'bg_yellow')
})

green.addEventListener('click', ()=>{
    document.querySelector('#div_color').setAttribute('class', 'bg_green')
})

blue.addEventListener('click', ()=>{
    document.querySelector('#div_color').setAttribute('class', 'bg_blue')
})

// Part three: Create a dynamic list
let input = document.querySelector('#usrInput')
let button = document.querySelector('#addBtn')
let list = document.querySelector('#myUL')

button.addEventListener('click', () => {
    const myItem = input.value
    const listItem = document.createElement('li')
    listItem.textContent = myItem
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    listItem.appendChild(deleteBtn)
    list.appendChild(listItem)
    deleteBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    input.value = ''
})



