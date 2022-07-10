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
