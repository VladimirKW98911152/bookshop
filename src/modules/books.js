import { fetchBooks } from './api';
import { renderBookCard } from '../templates/bookCard.pug';

let currentCategory = '';
let startIndex = 0;

export async function loadBooks(category) {
  if (currentCategory !== category) {
    startIndex = 0;
    currentCategory = category;
  }

  const books = await fetchBooks(category, startIndex);
  const container = document.querySelector('.books-grid');
  
  if (startIndex === 0) {
    container.innerHTML = '';
  }

  books.forEach(book => {
    const card = renderBookCard(book);
    container.insertAdjacentHTML('beforeend', card);
  });

  startIndex += 6;
}
