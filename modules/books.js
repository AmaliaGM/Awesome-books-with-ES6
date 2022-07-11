export function bookIDgenerator() {
  let previousID = JSON.parse(localStorage.getItem('bookIDgenerator'));
  const newID = previousID + 1;
  if (previousID == null) {
    previousID = 1;
    localStorage.setItem('bookIDgenerator', JSON.stringify(previousID));
    return previousID;
  }
  localStorage.setItem('bookIDgenerator', JSON.stringify(newID));
  return newID;
}
