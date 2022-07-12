export default function clearBooks() {
  const bookList = document.getElementById('book-list');
  while (bookList.firstChild) {
    bookList.removeChild(bookList.firstChild);
  }
}
