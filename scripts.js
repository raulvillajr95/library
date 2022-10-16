let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

// get input and store in myLibrary
function addBookToLibrary(author, title, pages, read) {
  let book = new Book(author, title, pages, read)
  myLibrary.push(book)
  
  book = null
}
addBookToLibrary("Raul", "The Misfits", 120, true)
addBookToLibrary("Raul", "The Misfits", 120, false)

console.log(myLibrary)

// loop through myLibrary and display on html
function libraryLoop() {
  
}

/*
ideas:
-create a function to delete a book

Instructions:
1. Done
2. create function that takes user input and
   stores book in array
3. create function that loops through myLibrary
   and displays book in cards
4. add 'NEW BOOK' button that brings up form
5. add button on display to remove book
    look into data-attribute
6. add button on display to change read status
    create function that toggles 'read' on Book
*/