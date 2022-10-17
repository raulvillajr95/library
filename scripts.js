let myLibrary = [];

// Book constructor
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

    // Add remove button to table
    let cell5 = document.createElement('td')
    let removeButton = document.createElement('button')
    removeButton.textContent = 'REMOVE'
    removeButton.setAttribute('class','remove-button')
    removeButton.setAttribute('data-index-number', `${i}`)
    row.setAttribute('data-index-number', `${i}`)
    cell5.appendChild(removeButton)
    row.appendChild(cell5)

    // Add read button
    let cell6 = document.createElement('td')
    let readButton = document.createElement('button')
    readButton.textContent = `${myLibrary[i].read.toString().toUpperCase()}`
    readButton.setAttribute('class','read-button')
    readButton.setAttribute('data-index-number', `${i}`)
    cell6.appendChild(readButton)
    row.appendChild(cell6)

    libraryElement.appendChild(row)
  }
}

window.addEventListener('click', function(e) {

  // Remove books
  if (e.composedPath()[0].classList[0] === 'remove-button') {
    let indexNum = Number(e.path[0].dataset.indexNumber)
    myLibrary.splice(indexNum,1)
    libraryLoop()
  }

  // Remove books
  if (e.composedPath()[0].classList[0] === 'read-button') {
    let indexNum = Number(e.path[0].dataset.indexNumber)

    if (myLibrary[indexNum].read === false) {
      myLibrary[indexNum].read = true
    } else if (myLibrary[indexNum].read === true) {
      myLibrary[indexNum].read = false
    }

    console.log(myLibrary[indexNum].read)
    libraryLoop()
    console.log('read button')
  }
})

// Add book to library
let submitElement = document.querySelector('#submit')
submitElement.addEventListener('click', function() {

  let authorElement = document.querySelector('#author')
  let titleElement = document.querySelector('#title')
  let pagesElement = document.querySelector('#pages')
  let readElement = document.querySelector('#read')

  if (authorElement.value !== "" &&
  titleElement.value !== "" &&
  pagesElement.value !== "") {
    addBookToLibrary()
    libraryLoop()
  }

  authorElement.value = ""
  titleElement.value = ""
  pagesElement.value = ""
  readElement.checked = false
})

// Toggle 'NEW BOOK' button
let newBookElement = document.querySelector('.new-book')
let formElement = document.querySelector('.main-form')
let toggle = false
newBookElement.addEventListener('click', function() {
  if (!toggle) {
    submitElement.style.display = "block"
    formElement.style.display = "grid"
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
-pointer cursor on remove and read buttons

Instructions:
1. Done
2. Done
3. Done
4. Done
5. Done
6. Done
*/