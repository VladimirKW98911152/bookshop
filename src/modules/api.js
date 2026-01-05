const API_KEY = 'AIzaSyBQU-4J3fKJ8h9LmP0Q1R2S3T4U5V6W7X8Y';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export async function fetchBooks(category, startIndex = 0) {
  const response = await fetch(
    `${BASE_URL}?q=subject:${category}&key=${API_KEY}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`
  );
  const data = await response.json();
  return data.items || [];
}
