export class AddBook {
    constructor(ID, Title, Author) {
      this.ID = ID;
      this.Title = Title;
      this.Author = Author;
    }
  }
  
  /* const add = document.querySelector('#add');
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
  }); */