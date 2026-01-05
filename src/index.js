import './styles/main.scss';

import logo from './images/logo.png';
import userIcon from './images/user.png';
import searchIcon from './images/search.png';
import cartIcon from './images/cart.png';
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';
import slider3 from './images/slider3.jpg';
import placeholderImg from './images/placeholder.jpg';
import Book1 from './images/Book1.jpg';
import Book2 from './images/Book2.jpg';
import Book3 from './images/Book3.jpg';
import Book4 from './images/Book4.jpg';
import Book5 from './images/Book5.jpg';
import Book6 from './images/Book6.jpg';

console.log('📚 Bookshop starting...');

const sliderImages = [slider1, slider2, slider3];
let currentSlide = 0;

const categories = [
  'Architecture',
  'Art & Fashion',
  'Biography',
  'Business',
  'Crafts & Hobbies',
  'Drama',
  'Fiction',
  'Food & Drink',
  'Health & Wellbeing',
  'History & Politics',
  'Humor',
  'Poetry',
  'Psychology',
  'Science',
  'Technology',
  'Travel & Maps'
];

function initApp() {
  const app = document.getElementById('app');
  
  if (!app) return; 
  
  let categoriesHTML = '<ul>';
  categories.forEach((category, index) => {
    const activeClass = index === 0 ? 'active' : '';
    categoriesHTML += `<li class="${activeClass}" data-category="${category}">${category}</li>`;
  });
  categoriesHTML += '</ul>';
  
  app.innerHTML = 
    '<header class="header">' +
      '<div class="logo">' +
        '<img src="' + logo + '" alt="Bookshop" style="height: 40px;">' +
      '</div>' +
      '<nav class="nav">' +
        '<a href="#" class="active">BOOKS</a>' +
        '<a href="#">AUDIOBOOKS</a>' +
        '<a href="#">STATIONERY & GIFTS</a>' +
        '<a href="#">BLOG</a>' +
      '</nav>' +
      '<div class="icons">' +
        '<img src="' + userIcon + '" alt="Profile" width="24" height="24">' +
        '<img src="' + searchIcon + '" alt="Search" width="24" height="24">' +
        '<img src="' + cartIcon + '" alt="Cart" width="24" height="24">' +
        '<span class="cart-badge">0</span>' +
      '</div>' +
    '</header>' +

    '<main class="container">' +
      '<div class="slider-container">' +
        '<div class="slider" id="mainSlider" style="background-image: url(\'' + sliderImages[0] + '\'); background-size: cover; background-position: center; height: 500px;"></div>' +
        '<div class="slider-dots">' +
          '<span class="dot active" data-slide="0"></span>' +
          '<span class="dot" data-slide="1"></span>' +
          '<span class="dot" data-slide="2"></span>' +
        '</div>' +
        '<div class="promo-blocks">' +
          '<div class="promo promo1">' +
            '<div class="promo-text">CHANGE<br>OLD BOOK<br>ON NEW</div>' +
            '<div class="promo-arrow">→</div>' +
          '</div>' +
          '<div class="promo promo2">' +
            '<div class="promo-text">TOP<br>100<br>BOOKS<br>2026</div>' +
            '<div class="promo-arrow">→</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="content">' +
        '<aside class="categories">' +
          '<h3>Categories</h3>' +
          categoriesHTML +
        '</aside>' +

        '<div class="books-section">' +
          '<div class="books-header">' +
            '<h2>All Books</h2>' +
            '<div class="books-count">Showing 6 of 100+ books</div>' +
          '</div>' +
          '<div class="books-grid" id="booksGrid">' +
            '<div class="book-card">' +
              '<img src="' + Book1 + '" alt="Book Cover" class="book-cover">' +
              '<div class="book-info">' +
                '<h3 class="book-title">Crazy Rich Asians</h3>' +
                '<p class="book-author">Kevin Kwan</p>' +
                '<div class="book-rating">' +
                  '<span class="stars">★★★★☆</span>' +
                  '<span class="reviews">(252 reviews)</span>' +
                '</div>' +
                '<p class="book-description">The outrageously funny debut novel about three super-rich Chinese families...</p>' +
                '<div class="book-price">$4.99</div>' +
                '<button class="buy-btn">BUY NOW</button>' +
              '</div>' +
            '</div>' +
            '<div class="book-card">' +
              '<img src="' + Book2 + '" alt="Book Cover" class="book-cover">' +
              '<div class="book-info">' +
                '<h3 class="book-title">Brave New World</h3>' +
                '<p class="book-author">Aldous Huxley</p>' +
                '<div class="book-rating">' +
                  '<span class="stars">★★★★☆</span>' +
                  '<span class="reviews">(1.3M reviews)</span>' +
                '</div>' +
                '<p class="book-description">Dystopian novel written in 1931 by English author Aldous Huxley...</p>' +
                '<div class="book-price">$12.43</div>' +
                '<button class="buy-btn">BUY NOW</button>' +
              '</div>' +
            '</div>' +
            '<div class="book-card">' +
              '<img src="' + Book3 + '" alt="Book Cover" class="book-cover">' +
              '<div class="book-info">' +
                '<h3 class="book-title">The Weight of Things</h3>' +
                '<p class="book-author">Marianne Fritz</p>' +
                '<div class="book-rating">' +
                  '<span class="stars">★★★★☆</span>' +
                  '<span class="reviews">(353 reviews)</span>' +
                '</div>' +
                '<p class="book-description">You discover not an eccentric fluke of literary nature...</p>' +
                '<div class="book-price">$18.23</div>' +
                '<button class="buy-btn">BUY NOW</button>' +
              '</div>' +
            '</div>' +
            '<div class="book-card">' +
              '<img src="' + Book4 + '" alt="Book Cover" class="book-cover">' +
              '<div class="book-info">' +
                '<h3 class="book-title">The Handmaid\'s Tale</h3>' +
                '<p class="book-author">Margaret Atwood</p>' +
                '<div class="book-rating">' +
                  '<span class="stars">★★★★☆</span>' +
                  '<span class="reviews">(1.1M reviews)</span>' +
                '</div>' +
                '<p class="book-description">This novel can be interpreted as a double narrative...</p>' +
                '<div class="book-price">$6.99</div>' +
                '<button class="buy-btn in-cart">IN THE CART</button>' +
              '</div>' +
            '</div>' +
            '<div class="book-card">' +
              '<img src="' + Book5 + '" alt="Book Cover" class="book-cover">' +
              '<div class="book-info">' +
                '<h3 class="book-title">Educated</h3>' +
                '<p class="book-author">Tara Westover</p>' +
                '<div class="book-rating">' +
                  '<span class="stars">★★★★☆</span>' +
                  '<span class="reviews">(364 reviews)</span>' +
                '</div>' +
                '<p class="book-description">It is a tale of fierce family loyalty and of the grief...</p>' +
                '<div class="book-price">$12.68</div>' +
                '<button class="buy-btn">BUY NOW</button>' +
              '</div>' +
            '</div>' +
            '<div class="book-card">' +
              '<img src="' + Book6 + '" alt="Book Cover" class="book-cover">' +
              '<div class="book-info">' +
                '<h3 class="book-title">Mothers Stories</h3>' +
                '<p class="book-author">Chris Power</p>' +
                '<div class="book-rating">' +
                  '<span class="stars">★★★★☆</span>' +
                  '<span class="reviews">(454 reviews)</span>' +
                '</div>' +
                '<p class="book-description">The stories in Mothers lay bare the emotional damage...</p>' +
                '<div class="book-price">$12.35</div>' +
                '<button class="buy-btn">BUY NOW</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<button class="load-more-btn" id="loadMoreBtn">LOAD MORE</button>' +
        '</div>' +
      '</div>' +
    '</main>' +
    
    '<footer class="footer">' +
      '<div class="footer-content">' +
        '<p>© 2026 Bookshop. All rights reserved.</p>' +
        '<p>This is a demonstration project for educational purposes</p>' +
      '</div>' +
    '</footer>';
  
  initSlider();
  initCategories();
  initEventHandlers();
}

function initSlider() {
  const slider = document.getElementById('mainSlider');
  const dots = document.querySelectorAll('.dot');
  
  if (!slider) return;
  
  const slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    slider.style.backgroundImage = 'url(\'' + sliderImages[currentSlide] + '\')';
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }, 5000);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      currentSlide = index;
      slider.style.backgroundImage = 'url(\'' + sliderImages[currentSlide] + '\')';
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
    });
  });
}

function initCategories() {
  const categoryItems = document.querySelectorAll('.categories li');
  
  categoryItems.forEach(item => {
    item.addEventListener('click', function() {
      categoryItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      
      const category = this.dataset.category;
      console.log('Selected category:', category);
      
    });
  });
}

function initEventHandlers() {
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('buy-btn')) {
      const btn = e.target;
      if (btn.textContent === 'BUY NOW') {
        btn.textContent = 'IN THE CART';
        btn.classList.add('in-cart');
        updateCartCount(1);
      } else {
        btn.textContent = 'BUY NOW';
        btn.classList.remove('in-cart');
        updateCartCount(-1);
      }
    }
    
    if (e.target.id === 'loadMoreBtn') {
      e.target.textContent = 'Loading...';
      setTimeout(() => {
        e.target.textContent = 'LOAD MORE';
        console.log('Loading more books...');
      }, 1000);
    }
  });
}

function updateCartCount(change) {
  const badge = document.querySelector('.cart-badge');
  let currentCount = parseInt(badge.textContent) || 0;
  currentCount += change;
  badge.textContent = currentCount;
  
  if (currentCount > 0) {
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', initApp);
