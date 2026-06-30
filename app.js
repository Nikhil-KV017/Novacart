import { products, reviews } from './products.js';

// ==========================================
// GLOBAL STATE & STORAGE BINDINGS
// ==========================================
const state = {
  theme: localStorage.getItem('novacart-theme') || 'dark',
  cart: JSON.parse(localStorage.getItem('novacart-cart')) || [], // Array of { id, quantity }
  wishlist: JSON.parse(localStorage.getItem('novacart-wishlist')) || [], // Array of product IDs
  searchQuery: '',
  catalogFilters: {
    categories: [],
    maxPrice: 300,
    minRating: 0
  },
  catalogSort: 'featured',
  catalogLayout: 'grid' // 'grid' or 'list'
};

// State Synchronization helper
function saveState() {
  localStorage.setItem('novacart-theme', state.theme);
  localStorage.setItem('novacart-cart', JSON.stringify(state.cart));
  localStorage.setItem('novacart-wishlist', JSON.stringify(state.wishlist));
  updateBadges();
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `notification ${type} glass-panel`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check' : 'alert-triangle'}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  lucide.createIcons();

  // Remove toast after animation
  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1) reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==========================================
// THEME CONTROLLER
// ==========================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const sunIcon = document.getElementById('theme-sun-icon');
  const moonIcon = document.getElementById('theme-moon-icon');
  
  if (state.theme === 'light') {
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'block';
  } else {
    if (sunIcon) sunIcon.style.display = 'block';
    if (moonIcon) moonIcon.style.display = 'none';
  }
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  saveState();
  initTheme();
  showToast(`Switched to ${state.theme} mode`, 'success');
}

// ==========================================
// BADGE AND CART STATUS UPDATER
// ==========================================
function updateBadges() {
  const cartBadge = document.getElementById('cart-badge');
  const wishlistBadge = document.getElementById('wishlist-badge');

  const totalCartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalWishCount = state.wishlist.length;

  if (cartBadge) {
    if (totalCartCount > 0) {
      cartBadge.innerText = totalCartCount;
      cartBadge.style.display = 'flex';
    } else {
      cartBadge.style.display = 'none';
    }
  }

  if (wishlistBadge) {
    if (totalWishCount > 0) {
      wishlistBadge.innerText = totalWishCount;
      wishlistBadge.style.display = 'flex';
    } else {
      wishlistBadge.style.display = 'none';
    }
  }
}

// ==========================================
// SHOPPING CART DRAWER ACTIONS
// ==========================================
const cartOverlay = document.getElementById('cart-drawer-overlay');
const cartPanel = document.getElementById('cart-drawer-panel');

function openCart() {
  renderCartDrawer();
  cartOverlay.classList.add('open');
  cartPanel.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartOverlay.classList.remove('open');
  cartPanel.classList.remove('open');
  document.body.style.overflow = 'unset';
}

function addToCart(productId, quantity = 1, silent = false) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  if (!product.inStock) {
    showToast('Sorry, this product is currently out of stock.', 'error');
    return;
  }

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ id: productId, quantity });
  }

  saveState();
  if (!silent) {
    showToast(`Added ${product.title} to cart!`, 'success');
    openCart();
  }
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveState();
  renderCartDrawer();
  // If we are on checkout view, re-render it to update summary
  if (location.hash === '#checkout') {
    renderCheckout();
  }
}

function updateCartQuantity(productId, newQty) {
  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }
  const item = state.cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQty;
    saveState();
    renderCartDrawer();
    // If we are on checkout, refresh order summary
    if (location.hash === '#checkout') {
      renderCheckout();
    }
  }
}

function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed ${product.title} from Wishlist`, 'success');
  } else {
    state.wishlist.push(productId);
    showToast(`Added ${product.title} to Wishlist!`, 'success');
  }
  saveState();
  
  // Re-render components if active
  if (location.hash === '#wishlist') {
    renderWishlist();
  } else if (location.hash.startsWith('#product/')) {
    const activeId = location.hash.split('/')[1];
    if (activeId === productId) renderProductDetail(productId);
  } else if (location.hash === '#catalog' || location.hash === '') {
    // Refresh product cards on screen
    const cards = document.querySelectorAll(`.pc-wishlist-btn[data-id="${productId}"]`);
    cards.forEach(btn => {
      btn.classList.toggle('active', state.wishlist.includes(productId));
    });
  }
}

function renderCartDrawer() {
  const container = document.getElementById('cart-drawer-items');
  const subtotalEl = document.getElementById('cart-subtotal');
  const footerEl = document.getElementById('cart-drawer-footer');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="drawer-empty">
        <i data-lucide="shopping-bag"></i>
        <h3>Your cart is empty</h3>
        <p>Explore our catalog to find premium gear.</p>
        <button class="secondary-btn" id="drawer-explore-btn">Go to Catalog</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = '$0.00';
    if (footerEl) footerEl.style.display = 'none';
    lucide.createIcons();
    
    document.getElementById('drawer-explore-btn')?.addEventListener('click', () => {
      closeCart();
      location.hash = '#catalog';
    });
    return;
  }

  if (footerEl) footerEl.style.display = 'block';

  let subtotal = 0;
  container.innerHTML = state.cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return '';
    const totalItemPrice = product.price * item.quantity;
    subtotal += totalItemPrice;

    return `
      <div class="drawer-item" data-id="${product.id}">
        <img src="${product.images[0]}" alt="${product.title}" class="di-img">
        <div class="di-info">
          <div class="di-header">
            <h4 class="di-title">${product.title}</h4>
            <button class="di-remove" data-id="${product.id}">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
          <span class="di-price">$${product.price.toFixed(2)}</span>
          <div class="di-qty-row">
            <div class="di-qty-control">
              <button class="di-qty-btn qty-minus" data-id="${product.id}"><i data-lucide="minus"></i></button>
              <span class="di-qty-val">${item.quantity}</span>
              <button class="di-qty-btn qty-plus" data-id="${product.id}"><i data-lucide="plus"></i></button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  lucide.createIcons();

  // Attach Event Listeners
  container.querySelectorAll('.di-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
  });

  container.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const cur = state.cart.find(item => item.id === id);
      if (cur) updateCartQuantity(id, cur.quantity - 1);
    });
  });

  container.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const cur = state.cart.find(item => item.id === id);
      if (cur) updateCartQuantity(id, cur.quantity + 1);
    });
  });
}

// ==========================================
// NAVBAR SEARCH SUGGESTION LOGIC
// ==========================================
const searchContainer = document.getElementById('nav-search-container');
const searchInput = document.getElementById('nav-search-input');
const suggestionsEl = document.getElementById('nav-search-suggestions');
const searchForm = document.getElementById('nav-search-form');

function initSearchAutoComplete() {
  if (!searchInput || !suggestionsEl) return;

  searchInput.addEventListener('input', () => {
    const val = searchInput.value.trim().toLowerCase();
    if (val.length < 2) {
      suggestionsEl.classList.remove('open');
      suggestionsEl.innerHTML = '';
      return;
    }

    const filtered = products.filter(p => 
      p.title.toLowerCase().includes(val) || 
      p.category.toLowerCase().includes(val)
    ).slice(0, 5);

    if (filtered.length === 0) {
      suggestionsEl.classList.remove('open');
      suggestionsEl.innerHTML = '';
      return;
    }

    suggestionsEl.innerHTML = filtered.map(p => `
      <div class="suggestion-item" data-id="${p.id}">
        <img src="${p.images[0]}" alt="${p.title}" class="suggestion-img">
        <div class="suggestion-info">
          <span class="suggestion-title">${p.title}</span>
          <span class="suggestion-price">$${p.price.toFixed(2)}</span>
        </div>
      </div>
    `).join('');
    suggestionsEl.classList.add('open');

    // Click suggestions
    suggestionsEl.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        suggestionsEl.classList.remove('open');
        searchInput.value = '';
        location.hash = `#product/${id}`;
      });
    });
  });

  // Form Submission
  searchForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    state.searchQuery = searchInput.value.trim();
    suggestionsEl.classList.remove('open');
    location.hash = '#catalog';
  });

  // Click Outside
  document.addEventListener('click', (e) => {
    if (searchContainer && !searchContainer.contains(e.target)) {
      suggestionsEl.classList.remove('open');
    }
  });
}

// ==========================================
// REUSABLE HTML GENERATORS
// ==========================================
function generateProductCardHTML(p) {
  const isWish = state.wishlist.includes(p.id);
  const stockHTML = p.inStock 
    ? `<button class="pc-cart-btn add-to-cart-trigger" data-id="${p.id}" aria-label="Add to Cart"><i data-lucide="shopping-cart"></i></button>`
    : `<button class="pc-cart-btn disabled" disabled aria-label="Out of Stock"><i data-lucide="slash"></i></button>`;

  return `
    <div class="product-card fade-in">
      <div class="pc-image-wrapper" onclick="location.hash = '#product/${p.id}'" style="cursor: pointer;">
        ${p.featured ? `<span class="pc-tag gradient-bg" style="color:#0b0f19;">Featured</span>` : ''}
        ${!p.inStock ? `<span class="pc-tag" style="background:var(--danger); color:white;">Out of Stock</span>` : ''}
        <img src="${p.images[0]}" alt="${p.title}" class="pc-img" loading="lazy">
      </div>
      <button class="pc-wishlist-btn ${isWish ? 'active' : ''}" data-id="${p.id}" aria-label="Toggle Wishlist">
        <i data-lucide="heart"></i>
      </button>
      <div class="pc-details">
        <span class="pc-category">${p.category}</span>
        <h3 class="pc-title" onclick="location.hash = '#product/${p.id}'" style="cursor: pointer;">${p.title}</h3>
        <div class="pc-rating">
          <i data-lucide="star"></i>
          <span>${p.rating.toFixed(1)} (${p.reviewsCount} reviews)</span>
        </div>
        <div class="pc-footer">
          <span class="pc-price">$${p.price.toFixed(2)}</span>
          ${stockHTML}
        </div>
      </div>
    </div>
  `;
}

function bindCardEventListeners(container) {
  if (!container) return;
  // Wishlist toggle binding
  container.querySelectorAll('.pc-wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(btn.dataset.id);
    });
  });

  // Cart add binding
  container.querySelectorAll('.add-to-cart-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(btn.dataset.id);
    });
  });
}

// ==========================================
// VIEWS CONTROLLERS & RENDERING
// ==========================================
const appView = document.getElementById('app-view');

// 1. RENDER HOME VIEW
function renderHome() {
  appView.innerHTML = `
    <!-- Hero Slider Panel -->
    <div class="hero-section fade-in">
      <div class="hero-content">
        <span class="hero-badge">Workspace Upgrade</span>
        <h1 class="hero-title">Elevate Your <br><span class="gradient-text">Aesthetic Space</span></h1>
        <p class="hero-desc">Experience studio-grade setups. Handcrafted walnut desk accessories, precise tactile keyboards, and responsive ambient smart backlights.</p>
        <div>
          <button class="gradient-btn" id="hero-cta-btn">
            <span>Explore Collection</span>
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
      <div class="hero-image-container">
        <div class="hero-image-wrapper">
          <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1000&auto=format&fit=crop&q=80" alt="Workspace Showcase Setup" class="hero-img">
        </div>
      </div>
    </div>

    <!-- Featured Categories Grid -->
    <h2 class="home-section-title">Shop by Category</h2>
    <div class="categories-grid">
      <div class="category-card" data-cat="Keyboards">
        <img src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=80" alt="Keyboards" class="category-img">
        <div class="category-overlay">
          <span class="category-name">Keyboards</span>
          <span class="category-count">Tactile Typing</span>
        </div>
      </div>
      <div class="category-card" data-cat="Audio Gear">
        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80" alt="Audio Gear" class="category-img">
        <div class="category-overlay">
          <span class="category-name">Audio Gear</span>
          <span class="category-count">Hi-Fi Audio</span>
        </div>
      </div>
      <div class="category-card" data-cat="Lighting & Decor">
        <img src="https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80" alt="Lighting & Decor" class="category-img">
        <div class="category-overlay">
          <span class="category-name">Lighting & Decor</span>
          <span class="category-count">Ambient Glow</span>
        </div>
      </div>
    </div>

    <!-- Trending Products Grid -->
    <div class="home-section-title">
      <span>Trending Hardware</span>
      <a href="#catalog">View All <i data-lucide="arrow-right"></i></a>
    </div>
    <div class="products-grid" id="trending-grid">
      <!-- Injected cards -->
    </div>
  `;

  // Render trending cards
  const trendingGrid = document.getElementById('trending-grid');
  const trendingItems = products.filter(p => p.trending);
  if (trendingGrid) {
    trendingGrid.innerHTML = trendingItems.map(p => generateProductCardHTML(p)).join('');
    bindCardEventListeners(trendingGrid);
  }

  lucide.createIcons();

  // CTA Click bindings
  document.getElementById('hero-cta-btn')?.addEventListener('click', () => {
    location.hash = '#catalog';
  });

  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.cat;
      state.catalogFilters.categories = [cat];
      location.hash = '#catalog';
    });
  });
}

// 2. RENDER CATALOG VIEW
function renderCatalog() {
  appView.innerHTML = `
    <div class="catalog-layout">
      <!-- Filter Sidebar Panel -->
      <aside class="glass-panel filters-sidebar">
        <div>
          <h3 class="filter-group-title">Categories</h3>
          <div class="filter-list" id="cat-filters-list">
            <!-- Dynamic checkboxes -->
          </div>
        </div>

        <div>
          <h3 class="filter-group-title">Max Price</h3>
          <div class="price-slider-container">
            <input type="range" class="price-slider" id="price-range-slider" min="30" max="300" step="10" value="${state.catalogFilters.maxPrice}">
            <div class="price-values">
              <span>$30</span>
              <span id="slider-current-val">$${state.catalogFilters.maxPrice}</span>
              <span>$300</span>
            </div>
          </div>
        </div>

        <div>
          <h3 class="filter-group-title">Ratings</h3>
          <div class="filter-list">
            <label class="filter-checkbox-label">
              <input type="radio" name="rating-filter" value="0" ${state.catalogFilters.minRating === 0 ? 'checked' : ''}>
              <span>All Ratings</span>
            </label>
            <label class="filter-checkbox-label">
              <input type="radio" name="rating-filter" value="4.5" ${state.catalogFilters.minRating === 4.5 ? 'checked' : ''}>
              <span>4.5 ★ & Above</span>
            </label>
            <label class="filter-checkbox-label">
              <input type="radio" name="rating-filter" value="4.8" ${state.catalogFilters.minRating === 4.8 ? 'checked' : ''}>
              <span>4.8 ★ & Above</span>
            </label>
          </div>
        </div>

        <button class="secondary-btn" id="reset-filters-btn" style="justify-content: center; width: 100%;">
          <i data-lucide="refresh-cw"></i>
          <span>Reset Filters</span>
        </button>
      </aside>

      <!-- Main Catalog Main Contents -->
      <div class="catalog-content">
        <!-- Toolbar header -->
        <div class="glass-panel catalog-toolbar">
          <span class="results-count" id="catalog-count-label">0 products found</span>
          <div class="toolbar-actions">
            <!-- Sort selector -->
            <select class="sort-select" id="catalog-sort-select">
              <option value="featured" ${state.catalogSort === 'featured' ? 'selected' : ''}>Featured</option>
              <option value="price-asc" ${state.catalogSort === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-desc" ${state.catalogSort === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating-desc" ${state.catalogSort === 'rating-desc' ? 'selected' : ''}>Top Rated</option>
            </select>

            <!-- Layout switcher -->
            <div class="layout-toggle">
              <button class="layout-btn ${state.catalogLayout === 'grid' ? 'active' : ''}" id="layout-grid-btn" aria-label="Grid View">
                <i data-lucide="layout-grid"></i>
              </button>
              <button class="layout-btn ${state.catalogLayout === 'list' ? 'active' : ''}" id="layout-list-btn" aria-label="List View">
                <i data-lucide="list"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Product Cards Container -->
        <div class="${state.catalogLayout === 'grid' ? 'products-grid' : 'products-list-view'}" id="catalog-products-container">
          <!-- Filtered catalog cards injected dynamically -->
        </div>
      </div>
    </div>
  `;

  // Render categories checkboxes
  const catList = document.getElementById('cat-filters-list');
  const distinctCategories = [...new Set(products.map(p => p.category))];
  if (catList) {
    catList.innerHTML = distinctCategories.map(cat => `
      <label class="filter-checkbox-label">
        <input type="checkbox" class="cat-checkbox" value="${cat}" ${state.catalogFilters.categories.includes(cat) ? 'checked' : ''}>
        <span>${cat}</span>
      </label>
    `).join('');
  }

  lucide.createIcons();

  // Attach Catalog Event Listeners
  const productsContainer = document.getElementById('catalog-products-container');
  const countLabel = document.getElementById('catalog-count-label');
  const priceSlider = document.getElementById('price-range-slider');
  const sliderLabel = document.getElementById('slider-current-val');
  const sortSelect = document.getElementById('catalog-sort-select');
  const resetBtn = document.getElementById('reset-filters-btn');

  function filterAndRender() {
    let list = [...products];

    // 1. Search Query filter
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
      // Reset input bar in case it isn't sync'ed
      if (searchInput) searchInput.value = state.searchQuery;
    }

    // 2. Category Checkboxes filter
    if (state.catalogFilters.categories.length > 0) {
      list = list.filter(p => state.catalogFilters.categories.includes(p.category));
    }

    // 3. Price slider filter
    list = list.filter(p => p.price <= state.catalogFilters.maxPrice);

    // 4. Rating filter
    list = list.filter(p => p.rating >= state.catalogFilters.minRating);

    // 5. Sorting
    if (state.catalogSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (state.catalogSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (state.catalogSort === 'rating-desc') {
      list.sort((a, b) => b.rating - a.rating);
    } else {
      // 'featured' sort: featured items first, then by rating
      list.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
      });
    }

    // 6. Output updates
    if (countLabel) {
      countLabel.innerText = `${list.length} ${list.length === 1 ? 'product' : 'products'} found`;
    }

    if (productsContainer) {
      if (list.length === 0) {
        productsContainer.className = 'fade-in';
        productsContainer.innerHTML = `
          <div style="text-align: center; padding: 80px 0; grid-column: 1/-1; width: 100%;">
            <i data-lucide="slash" style="width: 60px; height: 60px; color: var(--text-muted); opacity: 0.5;"></i>
            <h3 style="margin-top: 16px;">No products match criteria</h3>
            <p style="color: var(--text-secondary); margin-top: 8px;">Try modifying your keyword search or sliding price values.</p>
          </div>
        `;
        lucide.createIcons();
      } else {
        productsContainer.className = state.catalogLayout === 'grid' ? 'products-grid' : 'products-list-view';
        productsContainer.innerHTML = list.map(p => generateProductCardHTML(p)).join('');
        bindCardEventListeners(productsContainer);
        lucide.createIcons();
      }
    }
  }

  // Initial Filter run
  filterAndRender();

  // Category change listeners
  document.querySelectorAll('.cat-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) {
        state.catalogFilters.categories.push(cb.value);
      } else {
        state.catalogFilters.categories = state.catalogFilters.categories.filter(c => c !== cb.value);
      }
      filterAndRender();
    });
  });

  // Price Slider input listeners
  priceSlider?.addEventListener('input', (e) => {
    state.catalogFilters.maxPrice = Number(e.target.value);
    if (sliderLabel) sliderLabel.innerText = `$${state.catalogFilters.maxPrice}`;
    filterAndRender();
  });

  // Rating Radio buttons listeners
  document.querySelectorAll('input[name="rating-filter"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.catalogFilters.minRating = Number(e.target.value);
      filterAndRender();
    });
  });

  // Sort dropdown selector
  sortSelect?.addEventListener('change', (e) => {
    state.catalogSort = e.target.value;
    filterAndRender();
  });

  // Reset Actions
  resetBtn?.addEventListener('click', () => {
    state.catalogFilters.categories = [];
    state.catalogFilters.maxPrice = 300;
    state.catalogFilters.minRating = 0;
    state.catalogSort = 'featured';
    state.searchQuery = '';
    if (searchInput) searchInput.value = '';

    // Synchronize nodes UI
    document.querySelectorAll('.cat-checkbox').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[name="rating-filter"]').forEach(r => r.checked = r.value === "0");
    if (priceSlider) priceSlider.value = 300;
    if (sliderLabel) sliderLabel.innerText = '$300';
    if (sortSelect) sortSelect.value = 'featured';

    filterAndRender();
    showToast('Filters cleared', 'success');
  });

  // Layout Buttons toggle
  const gridBtn = document.getElementById('layout-grid-btn');
  const listBtn = document.getElementById('layout-list-btn');

  gridBtn?.addEventListener('click', () => {
    state.catalogLayout = 'grid';
    gridBtn.classList.add('active');
    listBtn?.classList.remove('active');
    filterAndRender();
  });

  listBtn?.addEventListener('click', () => {
    state.catalogLayout = 'list';
    listBtn.classList.add('active');
    gridBtn?.classList.remove('active');
    filterAndRender();
  });
}

// 3. RENDER PRODUCT DETAIL VIEW
function renderProductDetail(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) {
    appView.innerHTML = `
      <div style="text-align: center; padding: 100px 0;">
        <h2>Product Not Found</h2>
        <a href="#catalog" class="gradient-btn" style="margin-top: 20px;">Back to Catalog</a>
      </div>
    `;
    return;
  }

  // Active state wishlist icon checks
  const isWish = state.wishlist.includes(p.id);

  // Tabs contents
  const descTabHTML = `<p class="detail-desc">${p.description}</p>`;
  const specsTabHTML = `
    <div class="specs-table">
      ${Object.entries(p.specs).map(([name, val]) => `
        <div class="spec-row">
          <span class="spec-name">${name}</span>
          <span class="spec-value">${val}</span>
        </div>
      `).join('')}
    </div>
  `;
  const productReviews = reviews[p.id] || [];
  const reviewsTabHTML = `
    <div class="reviews-list">
      ${productReviews.length === 0 
        ? `<p style="color: var(--text-secondary);">No reviews yet. Be the first to share your thoughts!</p>`
        : productReviews.map(r => `
          <div class="glass-panel review-item">
            <div class="review-header">
              <span class="review-author">${r.author}</span>
              <span class="review-date">${r.date}</span>
            </div>
            <div class="pc-rating" style="margin-bottom: 8px;">
              ${Array.from({ length: 5 }).map((_, i) => `<i data-lucide="star" style="${i < r.rating ? 'fill:#fbbf24; color:#fbbf24;' : 'color:var(--text-muted);'}"></i>`).join('')}
            </div>
            <p class="review-comment">"${r.comment}"</p>
          </div>
        `).join('')
      }
    </div>
  `;

  // Related products
  const related = products.filter(item => item.category === p.category && item.id !== p.id).slice(0, 4);
  const relatedGridHTML = related.length > 0 
    ? `
      <h2 class="home-section-title" style="margin-top: 64px;">Related Hardware</h2>
      <div class="products-grid" id="related-grid-items">
        ${related.map(item => generateProductCardHTML(item)).join('')}
      </div>
    `
    : '';

  appView.innerHTML = `
    <div class="detail-layout fade-in">
      <!-- Media Gallery pane -->
      <div class="detail-gallery">
        <div class="main-img-wrapper" id="zoom-container">
          <img src="${p.images[0]}" alt="${p.title}" class="main-img" id="detail-main-img">
        </div>
        <div class="thumbnail-list">
          ${p.images.map((img, index) => `
            <div class="thumb-item ${index === 0 ? 'active' : ''}" data-index="${index}">
              <img src="${img}" alt="${p.title} thumbnail ${index + 1}" class="thumb-img">
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Specs & Purchase details pane -->
      <div class="detail-info">
        <span class="detail-category">${p.category}</span>
        <h1 class="detail-title">${p.title}</h1>
        
        <div class="rating-reviews">
          <div class="pc-rating">
            <i data-lucide="star"></i>
            <span>${p.rating.toFixed(1)}</span>
          </div>
          <span class="review-count">| &nbsp; ${p.reviewsCount} verified customer reviews</span>
        </div>

        <div class="detail-price">$${p.price.toFixed(2)}</div>
        <p class="detail-desc">${p.description}</p>

        <!-- Actions Panel -->
        <div class="detail-actions">
          ${p.inStock ? `
            <div class="detail-qty-control">
              <button class="detail-qty-btn" id="qty-dec"><i data-lucide="minus"></i></button>
              <span class="detail-qty-val" id="qty-counter-value">1</span>
              <button class="detail-qty-btn" id="qty-inc"><i data-lucide="plus"></i></button>
            </div>
            <button class="gradient-btn detail-add-btn" id="detail-cart-add-btn">
              <i data-lucide="shopping-cart"></i>
              <span>Add to Shopping Cart</span>
            </button>
          ` : `
            <button class="secondary-btn" style="flex: 1; cursor: not-allowed; opacity: 0.5;" disabled>
              <i data-lucide="slash"></i>
              <span>Out of Stock</span>
            </button>
          `}

          <button class="detail-wish-btn ${isWish ? 'active' : ''}" id="detail-wishlist-trigger" aria-label="Save to Wishlist">
            <i data-lucide="heart"></i>
          </button>
        </div>

        <!-- tabbed detail sections -->
        <div class="detail-tabs">
          <div class="tab-headers">
            <button class="tab-btn active" data-tab="desc">Description</button>
            <button class="tab-btn" data-tab="specs">Specifications</button>
            <button class="tab-btn" data-tab="reviews">Reviews (${productReviews.length})</button>
          </div>
          <div class="tab-content active" id="tab-desc">${descTabHTML}</div>
          <div class="tab-content" id="tab-specs">${specsTabHTML}</div>
          <div class="tab-content" id="tab-reviews">${reviewsTabHTML}</div>
        </div>
      </div>
    </div>

    <!-- Related grid panel -->
    ${relatedGridHTML}
  `;

  // Render icons
  lucide.createIcons();

  // Bind thumbnails switching
  const mainImage = document.getElementById('detail-main-img');
  const thumbs = document.querySelectorAll('.thumb-item');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const idx = Number(thumb.dataset.index);
      if (mainImage) mainImage.src = p.images[idx];
    });
  });

  // Zoom-on-hover effect
  const zoomWrapper = document.getElementById('zoom-container');
  if (zoomWrapper && mainImage) {
    zoomWrapper.addEventListener('mousemove', (e) => {
      const rect = zoomWrapper.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mainImage.style.transformOrigin = `${x}% ${y}%`;
      mainImage.style.transform = 'scale(1.5)';
    });

    zoomWrapper.addEventListener('mouseleave', () => {
      mainImage.style.transform = 'scale(1)';
    });
  }

  // Bind Quantity Selector
  let qty = 1;
  const qtyVal = document.getElementById('qty-counter-value');
  const decBtn = document.getElementById('qty-dec');
  const incBtn = document.getElementById('qty-inc');

  decBtn?.addEventListener('click', () => {
    if (qty > 1) {
      qty--;
      if (qtyVal) qtyVal.innerText = qty;
    }
  });

  incBtn?.addEventListener('click', () => {
    qty++;
    if (qtyVal) qtyVal.innerText = qty;
  });

  // Add to cart bind
  document.getElementById('detail-cart-add-btn')?.addEventListener('click', () => {
    addToCart(p.id, qty);
  });

  // Wishlist toggle bind
  document.getElementById('detail-wishlist-trigger')?.addEventListener('click', () => {
    toggleWishlist(p.id);
  });

  // Bind tab toggles
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const tabId = btn.dataset.tab;
      document.getElementById(`tab-${tabId}`)?.classList.add('active');
    });
  });

  // Bind related grid products logic
  const relatedGrid = document.getElementById('related-grid-items');
  if (relatedGrid) {
    bindCardEventListeners(relatedGrid);
  }
}

// 4. RENDER WISHLIST VIEW
function renderWishlist() {
  if (state.wishlist.length === 0) {
    appView.innerHTML = `
      <div class="wishlist-empty fade-in">
        <i data-lucide="heart"></i>
        <h2>Your wishlist is empty</h2>
        <p>Start browsing our hardware catalog and tap the heart icon on designs you want to save.</p>
        <a href="#catalog" class="gradient-btn" style="margin-top: 10px;">Go to Catalog</a>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  const wishlistProducts = products.filter(p => state.wishlist.includes(p.id));

  appView.innerHTML = `
    <div class="fade-in">
      <h1 class="home-section-title">Saved Wishlist Items</h1>
      <div class="products-grid" id="wishlist-grid-items">
        ${wishlistProducts.map(p => generateProductCardHTML(p)).join('')}
      </div>
    </div>
  `;

  const grid = document.getElementById('wishlist-grid-items');
  if (grid) {
    bindCardEventListeners(grid);
  }
  lucide.createIcons();
}

// 5. RENDER CHECKOUT VIEW
function renderCheckout() {
  const subtotal = state.cart.reduce((sum, item) => {
    const p = products.find(prod => prod.id === item.id);
    return sum + (p ? p.price * item.quantity : 0);
  }, 0);

  if (state.cart.length === 0) {
    appView.innerHTML = `
      <div style="text-align: center; padding: 100px 0;">
        <i data-lucide="shopping-bag" style="width: 60px; height: 60px; color: var(--text-muted); opacity: 0.5;"></i>
        <h2 style="margin-top: 20px;">Your cart is empty</h2>
        <p style="color: var(--text-secondary); margin-top: 8px;">Add products to cart to proceed with checkout.</p>
        <a href="#catalog" class="gradient-btn" style="margin-top: 20px;">View Catalog</a>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  const tax = subtotal * 0.08;
  const shipping = subtotal > 150 ? 0 : 15;
  const grandTotal = subtotal + tax + shipping;

  appView.innerHTML = `
    <div class="checkout-layout fade-in">
      <!-- Checkout Form Panel -->
      <div class="checkout-steps">
        <!-- Step 1: Shipping Info -->
        <div class="glass-panel checkout-step-panel step-panel-active" id="step-panel-shipping">
          <h2 class="step-header">
            <span class="step-number">1</span>
            <span>Shipping Information</span>
          </h2>
          
          <form class="checkout-form-grid" id="shipping-details-form">
            <div class="form-group form-span-2">
              <label for="ship-name">Full Name</label>
              <input type="text" id="ship-name" class="form-input" placeholder="John Doe" required>
            </div>
            <div class="form-group form-span-2">
              <label for="ship-email">Email Address</label>
              <input type="email" id="ship-email" class="form-input" placeholder="john@example.com" required>
            </div>
            <div class="form-group form-span-2">
              <label for="ship-address">Street Address</label>
              <input type="text" id="ship-address" class="form-input" placeholder="123 Main St, Apt 4" required>
            </div>
            <div class="form-group">
              <label for="ship-city">City</label>
              <input type="text" id="ship-city" class="form-input" placeholder="San Francisco" required>
            </div>
            <div class="form-group">
              <label for="ship-zip">Zip Code</label>
              <input type="text" id="ship-zip" class="form-input" placeholder="94103" required>
            </div>
            <div class="form-group form-span-2" style="margin-top: 12px; align-items: flex-end;">
              <button type="submit" class="gradient-btn">
                <span>Continue to Payment</span>
                <i data-lucide="arrow-right"></i>
              </button>
            </div>
          </form>
        </div>

        <!-- Step 2: Payment Details (Hidden initially) -->
        <div class="glass-panel checkout-step-panel" id="step-panel-payment" style="opacity: 0.5; pointer-events: none;">
          <h2 class="step-header">
            <span class="step-number">2</span>
            <span>Secure Credit Card Payment</span>
          </h2>
          
          <form class="checkout-form-grid" id="payment-details-form">
            <div class="form-group form-span-2">
              <label for="card-num">Card Number</label>
              <input type="text" id="card-num" class="form-input" placeholder="0000 0000 0000 0000" maxlength="19" required>
            </div>
            <div class="form-group form-span-2">
              <label for="card-holder">Card Holder Name</label>
              <input type="text" id="card-holder" class="form-input" placeholder="JOHN DOE" required>
            </div>
            <div class="form-group">
              <label for="card-exp">Expiry Date</label>
              <input type="text" id="card-exp" class="form-input" placeholder="MM/YY" maxlength="5" required>
            </div>
            <div class="form-group">
              <label for="card-cvv">CVV</label>
              <input type="password" id="card-cvv" class="form-input" placeholder="***" maxlength="3" required>
            </div>
            <div class="form-group form-span-2" style="margin-top: 12px; display: flex; flex-direction: row; gap: 16px;">
              <button type="button" class="secondary-btn" id="back-to-shipping-btn">
                <i data-lucide="arrow-left"></i>
                <span>Back</span>
              </button>
              <button type="submit" class="gradient-btn" style="flex: 1; justify-content: center;">
                <i data-lucide="lock"></i>
                <span>Pay $${grandTotal.toFixed(2)} Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Order Summary Panel -->
      <div class="glass-panel summary-panel">
        <h3 class="summary-title">Order Summary</h3>
        <div class="summary-items">
          ${state.cart.map(item => {
            const p = products.find(prod => prod.id === item.id);
            if (!p) return '';
            return `
              <div class="summary-item-row">
                <img src="${p.images[0]}" alt="${p.title}" class="summary-item-img">
                <div class="summary-item-details">
                  <span class="summary-item-name">${p.title}</span>
                  <span class="summary-item-qty">Qty: ${item.quantity}</span>
                </div>
                <span class="summary-item-price">$${(p.price * item.quantity).toFixed(2)}</span>
              </div>
            `;
          }).join('')}
        </div>

        <div class="bill-rows">
          <div class="bill-row">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <div class="bill-row">
            <span>Estimated Taxes (8%)</span>
            <span>$${tax.toFixed(2)}</span>
          </div>
          <div class="bill-row">
            <span>Shipping</span>
            <span>${shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div class="bill-row bill-row-total">
            <span>Order Total</span>
            <span>$${grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  lucide.createIcons();

  // Step Switchers logic
  const shippingForm = document.getElementById('shipping-details-form');
  const paymentForm = document.getElementById('payment-details-form');
  const shippingPanel = document.getElementById('step-panel-shipping');
  const paymentPanel = document.getElementById('step-panel-payment');

  shippingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Disable shipping forms interactions
    shippingPanel.classList.remove('step-panel-active');
    shippingPanel.style.opacity = '0.7';
    
    // Enable payment form interaction
    paymentPanel.classList.add('step-panel-active');
    paymentPanel.style.opacity = '1';
    paymentPanel.style.pointerEvents = 'auto';

    paymentPanel.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('back-to-shipping-btn')?.addEventListener('click', () => {
    paymentPanel.classList.remove('step-panel-active');
    paymentPanel.style.opacity = '0.5';
    paymentPanel.style.pointerEvents = 'none';

    shippingPanel.classList.add('step-panel-active');
    shippingPanel.style.opacity = '1';
    shippingPanel.style.pointerEvents = 'auto';

    shippingPanel.scrollIntoView({ behavior: 'smooth' });
  });

  // Format Credit Card input spaces
  const cardNum = document.getElementById('card-num');
  cardNum?.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '');
    let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    e.target.value = formatted;
  });

  // Format Expiry MM/YY
  const cardExp = document.getElementById('card-exp');
  cardExp?.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length >= 2) {
      e.target.value = val.slice(0, 2) + '/' + val.slice(2, 4);
    } else {
      e.target.value = val;
    }
  });

  // Place Order Submit
  paymentForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate inputs
    const cvv = document.getElementById('card-cvv').value;
    if (cvv.length < 3) {
      showToast('Please enter a valid 3-digit CVV number', 'error');
      return;
    }

    const modal = document.getElementById('checkout-success-modal');
    if (modal) {
      modal.classList.add('open');
    }

    // Clear cart state
    state.cart = [];
    saveState();
  });
}

// ==========================================
// CORE HASH ROUTER
// ==========================================
function router() {
  const hash = location.hash;
  
  // Close Cart Drawer on navigation
  closeCart();

  // Reset navbar active links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Scroll to top on navigation
  window.scrollTo(0, 0);

  // Match routes
  if (!hash || hash === '#/' || hash === '#home') {
    document.querySelector('.nav-link[data-target="home"]')?.classList.add('active');
    renderHome();
  } else if (hash === '#catalog') {
    document.querySelector('.nav-link[data-target="catalog"]')?.classList.add('active');
    renderCatalog();
  } else if (hash.startsWith('#product/')) {
    // Route format: #product/:id
    const id = hash.split('/')[1];
    renderProductDetail(id);
  } else if (hash === '#wishlist') {
    document.querySelector('.nav-link[data-target="wishlist"]')?.classList.add('active');
    renderWishlist();
  } else if (hash === '#checkout') {
    renderCheckout();
  } else {
    // 404 Fallback
    appView.innerHTML = `
      <div style="text-align: center; padding: 100px 0;">
        <h2>Page Not Found</h2>
        <p style="color: var(--text-secondary); margin-top: 10px;">The requested URL route does not exist.</p>
        <a href="#" class="gradient-btn" style="margin-top: 20px;">Return to Home</a>
      </div>
    `;
    lucide.createIcons();
  }
}

// ==========================================
// INITIAL SETUP AND DOM BINDING
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Init visual themes
  initTheme();
  
  // Initial states badges render
  saveState();

  // Initialize Navbar autocomplete
  initSearchAutoComplete();

  // Router listener bindings
  window.addEventListener('hashchange', router);
  router(); // Initial route run

  // Setup main static UI listeners
  
  // Theme toggle button
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);

  // Cart Drawer open/close triggers
  document.getElementById('nav-cart-btn')?.addEventListener('click', openCart);
  document.getElementById('cart-drawer-close')?.addEventListener('click', closeCart);
  
  // Wishlist navbar link redirect
  document.getElementById('nav-wishlist-btn')?.addEventListener('click', () => {
    location.hash = '#wishlist';
  });

  // Success Modal closing redirect
  document.getElementById('success-home-btn')?.addEventListener('click', () => {
    const modal = document.getElementById('checkout-success-modal');
    modal?.classList.remove('open');
    location.hash = '#';
  });

  // Static navbar link clicks redirecting
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const target = link.dataset.target;
      const category = link.dataset.category;
      
      if (category) {
        state.catalogFilters.categories = [category];
      } else {
        state.catalogFilters.categories = [];
      }
      state.searchQuery = '';
      if (searchInput) searchInput.value = '';

      location.hash = `#${target}`;
    });
  });

  // Logo redirect
  document.getElementById('nav-logo')?.addEventListener('click', (e) => {
    e.preventDefault();
    state.searchQuery = '';
    if (searchInput) searchInput.value = '';
    location.hash = '#';
  });

  // Newsletter form submission
  document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (input) {
      showToast(`Thank you for subscribing, ${input.value}!`, 'success');
      input.value = '';
    }
  });

  // Floating navbar scrolled backdrop state
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-navbar');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  });
});
