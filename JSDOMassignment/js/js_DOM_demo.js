/*
  switch the heading to 'I love JavaScript!
  */
setTimout(() => document.querySelector('h1').innerHTML = "I love JavaScript!" , 3000)

// let's do that on an event, as a callback to setTimeout
setTimout(() => document.querySelector('#main').src = "images/LoveJS.jpg" , 5000)
/*
 switch the image
 */
//select the image by its id

// switch the src attribute the other image

// switch after timeout event


/*
 change the link 
 */
const link = document.querySelector('a')
link.href = 'https://developer.mozilla.org/'
link.textContent = "Mozilla developer"
// select the link element
// change the text inside the link with the textContent property.

// change the URL the link is pointing to:


// get a reference to the div element node

/* 
Create a new paragraph element and give it some text
*/
const paragraph = document.querySelector('p')
paragraph.textContent = "Go dawgs!"

// Now append the new paragraph at the end of the div

// create a text node to the paragraph

// Grab a reference to the paragraph the link is inside and append the text node to it.

//
// Moving and removing elements
//
// to move the paragraph with the link to the bottom of the div
document.querySelector('div').appendChild(paragraph)
// to remove a node


/*
Add style
*/
paragraph.style.color = 'white';
paragraph.style.backgroundColor = 'black';
paragraph.style.padding = '10px';
paragraph.style.width = '250px';
paragraph.style.textAlign = 'center';
// Can add inline styles directly as below
/* 
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
*/
// but better to add the style as a class and switch the class

/*
Build a list dynamically with javascript
*/
// get references to the list, input and button elements

const list = document.querySelector('ul')
const input = document.querySelector('#item')
const button = document.querySelector('button')

button.addEventListener('click', ()=> {
  const myItem = input.value
  const listItem = document.createElement('li')
  listItem.textContent = myItem
  list.appendChild(listItem)
})

// get the user input from the input box

// create a new list item element

// set the content to the user input text

// append the list item to the document tree

// reset the input box to empty
