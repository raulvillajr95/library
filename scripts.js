let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

// get input and store in myLibrary
function addBookToLibrary() {
  let authorElement = document.querySelector('#author')
  let titleElement = document.querySelector('#title')
  let pagesElement = document.querySelector('#pages')
  let readElement = document.querySelector('#read')

  let book = new Book(
    authorElement.value,
    titleElement.value,
    pagesElement.value,
    readElement.checked
  )

  myLibrary.push(book)
  book = null
}

// loop through myLibrary and display on html
function libraryLoop() {
  let libraryElement = document.querySelector('.library')

  while (libraryElement.firstChild) {
    libraryElement.removeChild(libraryElement.firstChild)
  }

  for (let i = 0; i < myLibrary.length; i++) {
    let row = document.createElement('tr')

    let cell1 = document.createElement('td')
    cell1.textContent = `${myLibrary[i].author}`
    row.appendChild(cell1)
    let cell2 = document.createElement('td')
    cell2.textContent = `${myLibrary[i].title}`
    row.appendChild(cell2)
    let cell3 = document.createElement('td')
    cell3.textContent = `${myLibrary[i].pages}`
    row.appendChild(cell3)
    let cell4 = document.createElement('td')
    cell4.textContent = `${myLibrary[i].read}`
    row.appendChild(cell4)

    let cell5 = document.createElement('td')
    let removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.setAttribute('class','remove-button')
    removeButton.setAttribute('data-index-number', `${i}`)
    row.setAttribute('data-index-number', `${i}`)
    cell5.appendChild(removeButton)
    row.appendChild(cell5)

    libraryElement.appendChild(row)
  }
}

window.addEventListener('click', function(e) {
  if (e.composedPath()[0].classList[0] === 'remove-button') {
    let indexNum = Number(e.path[0].dataset.indexNumber)
    myLibrary.splice(indexNum,1)
    libraryLoop()
  }
})

let submitElement = document.querySelector('#submit')
submitElement.addEventListener('click', function() {
  addBookToLibrary()
  libraryLoop()
})

let newBookElement = document.querySelector('.new-book')
let formElement = document.querySelector('.main-form')
let toggle = false
newBookElement.addEventListener('click', function() {
  if (!toggle) {
    submitElement.style.display = "block"
    formElement.style.display = "block"
    newBookElement.textContent = "CLOSE"
    toggle = true
  } else if (toggle) {
    submitElement.style.display = "none"
    formElement.style.display = "none"
    newBookElement.textContent = "NEW BOOK"
    toggle = false
  }
})

/*
ideas:

later:
-clean up the inputs, make everything readable
-css, it's gotta look good
  ima go for the dashboard look
-after submitting, text clears
-don't allow empty boxes

Instructions:
1. Done
2. Done
3. Done
4. Done
5. Done
6. add button on display to change read status
    create function that toggles 'read' on Book
*/