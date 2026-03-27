// main.js

// Countdown Timer for Deals Section
function updateCountdown() {
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 4);
  endTime.setMinutes(endTime.getMinutes() + 13);
  endTime.setSeconds(endTime.getSeconds() + 34);

  let targetTime = localStorage.getItem('dealEndTime');
  if (!targetTime) {
    targetTime = Date.now() + (4 * 3600 + 13 * 60 + 34) * 1000;
    localStorage.setItem('dealEndTime', targetTime);
  }

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, targetTime - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const d = document.getElementById('cd-days');
    const h = document.getElementById('cd-hours');
    const m = document.getElementById('cd-mins');
    const s = document.getElementById('cd-secs');

    if (d) d.textContent = String(days).padStart(2, '0');
    if (h) h.textContent = String(hours).padStart(2, '0');
    if (m) m.textContent = String(mins).padStart(2, '0');
    if (s) s.textContent = String(secs).padStart(2, '0');

    if (diff > 0) setTimeout(tick, 1000);
  }

  tick();
}

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Search functionality
function initSearch() {
  const searchInput = document.querySelector('.search-bar input');
  const searchBtn = document.querySelector('.btn-search');
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const q = searchInput.value.trim();
      if (q) {
        alert(`Searching for: "${q}"\n(Connect to a backend to enable live search)`);
      }
    });
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') searchBtn.click();
    });
  }
}

// Add to cart hover effect
function initProductCards() {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Placeholder: navigate to product detail
      window.location.href = 'products-detail.html';
    });
  });
}

// Newsletter form
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input').value;
      if (email) {
        alert(`Thank you! You've subscribed with: ${email}`);
        form.querySelector('input').value = '';
      }
    });
  }
}

// Quote form
function initQuoteForm() {
  const btn = document.querySelector('.btn-send');
  if (btn) {
    btn.addEventListener('click', () => {
      const item = document.getElementById('quote-item').value;
      if (item.trim()) {
        alert(`Inquiry sent for: "${item}"`);
      } else {
        alert('Please enter the item you need.');
      }
    });
  }
}

// Init all
document.addEventListener('DOMContentLoaded', () => {
  updateCountdown();
  initSearch();
  initProductCards();
  initNewsletter();
  initQuoteForm();
});