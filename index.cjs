import { bookIDgenerator } from './modules/books.js';
import AddBook from './modules/addBook.js';

import clearBooks from './modules/clearAllBooks.js';
import printBooks from './modules/showBooks.js';
import { DateTime } from './modules/luxon.js';

const now = DateTime.now();
document.getElementById('date').textContent = now;

const add = document.querySelector('#add');
add.addEventListener('click', () => {
  const ID = bookIDgenerator();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const newBook = new AddBook(ID, title, author);

  if (title !== '' && author !== '') {
    let libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
    if (libraryArr === null) {
      libraryArr = [];
    }

    libraryArr.push(newBook);
    localStorage.setItem('libraryArr', JSON.stringify(libraryArr));
  }
});

const removeButton = Array.from(document.querySelectorAll('.remove-btn'));
removeButton.forEach((remove) => {
  remove.addEventListener('click', (event) => {
    const index = parseInt(event.target.id, 10);
    let libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
    libraryArr = libraryArr.filter((book) => book.ID !== index);
    localStorage.setItem('libraryArr', JSON.stringify(libraryArr));
    clearBooks();
    printBooks();
    document.location.reload();
  });
});

const list = document.querySelector('#list');
const addNew = document.querySelector('#navAdd');
const contact = document.querySelector('#navContact');
const addBook = document.querySelector('#add-book');
const contactForm = document.querySelector('#contact');
const bookSection = document.querySelector('#book-section');

list.addEventListener('click', () => {
  addBook.classList.remove('active');
  contactForm.classList.remove('active');
  bookSection.classList.remove('inactive');
  document.location.reload();
});

addNew.addEventListener('click', () => {
  addBook.classList.add('active');
  bookSection.classList.add('inactive');
  contactForm.classList.remove('active');
});

contact.addEventListener('click', () => {
  contactForm.classList.add('active');
  bookSection.classList.add('inactive');
  addBook.classList.remove('active');
});
