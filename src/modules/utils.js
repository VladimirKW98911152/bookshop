export function renderLayout() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <header class="header">
      <a href="#" class="logo">Book<span>shop</span></a>
      <nav class="nav">
        <a href="#" class="active">BOOKS</a>
        <a href="#">AUDIOBOOKS</a>
        <a href="#">STATIONERY & GIFTS</a>
        <a href="#">BLOG</a>
      </nav>
      <div class="icons">
        <img src="./images/user.svg" alt="Profile">
        <img src="./images/search.svg" alt="Search">
        <div class="cart-container">
          <img src="./images/cart.svg" alt="Cart">
          <span class="cart-badge badge">0</span>
        </div>
      </div>
    </header>
    <main>
      <section class="slider-container">
        <div class="slider"></div>
        <div class="slider-dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div class="promo-blocks">
          <div class="promo promo1"></div>
          <div class="promo promo2"></div>
        </div>
      </section>
      <section class="content">
        <aside class="categories">
          <ul>
            <li class="active">Architecture</li>
            <li>Art & Fashion</li>
            <li>Biography</li>
            <li>Business</li>
            <li>Crafts & Hobbies</li>
            <li>Drama</li>
            <li>Fiction</li>
            <li>Food & Drink</li>
            <li>Health & Wellbeing</li>
            <li>History & Politics</li>
            <li>Humor</li>
            <li>Poetry</li>
            <li>Psychology</li>
            <li>Science</li>
            <li>Technology</li>
            <li>Travel & Maps</li>
          </ul>
        </aside>
        <div class="books">
          <div class="books-grid"></div>
          <button class="load-more">LOAD MORE</button>
        </div>
      </section>
    </main>
  `;
}
