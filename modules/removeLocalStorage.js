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