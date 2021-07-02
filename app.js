// Contain books
let myLibrary = [];


// Book constructor
function Book(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
}

// Create book record for HTML table 
function addBook(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</>
    <td>${book.author}</>
    <td>${book.rating}</>
    <td><input type="checkbox" id="read-status" name="completed" value="read">
    <label for="completed"></label>
    <td><input type="button" id="delete-button" value="Remove" onclick="DeleteRowFunction()"></td>`;

    list.appendChild(row);
}

// Loop through all books in storage
function displayBooks() {
    const books = myLibrary;

    books.forEach(book => {
        addBook(book);
    });
}

// Display books once page loads
document.addEventListener('DOMContentLoaded', displayBooks());

// Allow user to add book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent default submit action
    e.preventDefault();

    // Get title, author, rating from forms
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const rating = document.querySelector('#rating').value;

    // Validate form entries
    if (title === '' || author === '' || rating === '') {
        alert('Please complete all fields.')
    } else {
        // Instantiate the book
        const book = new Book(title, author, rating);
        console.log(book);
        addBook(book);
    }

    // Clear input fields
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#rating').value = '';

});

// Delete a book
function DeleteRowFunction() {
    // event.target will be the input element.
    var td = event.target.parentNode;
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}