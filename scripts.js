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

  console.log(myLibrary)
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

    libraryElement.appendChild(row)
  }
}

let submitElement = document.querySelector('#submit')
submitElement.addEventListener('click', function() {
  addBookToLibrary()
  libraryLoop()
})

/*
ideas:
-clean up the inputs

Instructions:
1. Done
2. Done
3. Done
4. add 'NEW BOOK' button that brings up form
5. add button on display to remove book
    look into data-attribute
6. add button on display to change read status
    create function that toggles 'read' on Book
*/