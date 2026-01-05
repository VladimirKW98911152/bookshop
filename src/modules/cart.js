let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function initCart() {
  updateCartBadge();
  
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-btn')) {
      const id = e.target.dataset.id;
      toggleCart(id, e.target);
    }
  });
}

function toggleCart(id, button) {
  const index = cart.indexOf(id);
  if (index > -1) {
    cart.splice(index, 1);
    button.textContent = 'Buy now';
    button.classList.remove('in-cart');
  } else {
    cart.push(id);
    button.textContent = 'In the cart';
    button.classList.add('in-cart');
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  badge.textContent = cart.length;
}
