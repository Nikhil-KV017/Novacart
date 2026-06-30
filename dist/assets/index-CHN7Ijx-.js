(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(r){if(r.ep)return;r.ep=!0;const c=i(r);fetch(r.href,c)}})();const y=[{id:"1",title:"Nova Apex 75 Mechanical Keyboard",description:"A compact 75% hot-swappable mechanical keyboard featuring solid CNC aluminum casing, pre-lubed linear switches, custom double-shot PBT keycaps, and modular RGB lighting. Designed for the ultimate tactile typing experience.",price:189.99,rating:4.8,reviewsCount:142,category:"Keyboards",images:["https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=800&auto=format&fit=crop&q=80"],specs:{Layout:"75% Compact (82 Keys)","Case Material":"Anodized CNC Aluminum",Switches:"Nova Linear Jade (Pre-lubed, 45g actuation)",Connectivity:"USB-C, Bluetooth 5.1, 2.4GHz Wireless","Battery Life":"Up to 200 hours (RGB off)","Hot-swap Support":"3-pin / 5-pin PCB mount"},inStock:!0,featured:!0,trending:!0},{id:"2",title:"AeroGlide Felt Desk Mat",description:"Crafted from premium water-resistant Merino wool felt with a non-slip natural cork backing. Provides a soft, warm texture for your hands and optimal gliding performance for your high-precision optical mouse.",price:39.99,rating:4.6,reviewsCount:88,category:"Desk Accessories",images:["https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&auto=format&fit=crop&q=80"],specs:{Dimensions:"900mm x 400mm x 4mm",Material:"80% Merino Wool Felt, 20% Cork",Backing:"Eco-friendly Natural Cork",Stitching:"Anti-fraying double-lock stitching","Water Resistance":"Spill-resistant protective coating"},inStock:!0,featured:!0,trending:!1},{id:"3",title:"Nova Orbit Studio Headphones",description:"Studio-grade open-back audiophile headphones delivering an incredibly wide soundstage and pristine, color-free sound reproduction. Features custom 50mm dynamic drivers and premium memory foam earpads wrapped in breathable velour.",price:299.99,rating:4.9,reviewsCount:64,category:"Audio Gear",images:["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"],specs:{"Driver Size":"50mm Dynamic Neodymium","Frequency Response":"5Hz - 40,000Hz",Impedance:"32 Ohms (Easy to drive)",Sensitivity:"102 dB/mW",Cable:"3m Detachable Oxygen-Free Copper (OFC)",Weight:"285g"},inStock:!0,featured:!1,trending:!0},{id:"4",title:"Lumina Bar Monitor Lightbar",description:"An elegant space-saving monitor lightbar featuring an asymmetrical optical design that illuminates only your desk space, eliminating screen glare and reducing eye strain. Dual control dials allow adjusting temperature and brightness.",price:79.99,rating:4.7,reviewsCount:201,category:"Lighting & Decor",images:["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1586218123156-6dd027f31be6?w=800&auto=format&fit=crop&q=80"],specs:{"Power Source":"USB-C (5V, 1A)","Color Temperature":"2700K - 6500K (Warm to Cool)","Color Rendering Index":"Ra > 95 (Vivid accurate colors)","Mounting Compatibility":"Curved and flat monitors (1cm - 5cm)",Material:"Anodized Aluminum Alloy",Controller:"Wireless Desktop Dial"},inStock:!0,featured:!0,trending:!0},{id:"5",title:"Walnut Monitor Stand Riser",description:"Elevate your monitor to an ergonomic viewing height while expanding usable desk space. Individually handcrafted from premium dark American walnut wood and reinforced with heavy-duty structural steel legs.",price:119.99,rating:4.5,reviewsCount:52,category:"Desk Accessories",images:["https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80"],specs:{Dimensions:"115cm x 22cm x 11cm","Wood Type":"Solid American Walnut",Legs:"Matte Powder-Coated Steel","Weight Capacity":"Up to 45kg (Supports dual monitors)",Finish:"Natural oil-wax finish"},inStock:!0,featured:!1,trending:!1},{id:"6",title:"Chronos Wireless Charging Station",description:"A multi-device magnetic fast-charging dock crafted from polished glass and sandblasted aluminum. Supports simultaneous charging for your phone, smartwatch, and wireless earbuds, keeping cables organized.",price:69.99,rating:4.4,reviewsCount:115,category:"Desk Accessories",images:["https://images.unsplash.com/photo-1622445262465-2481c4574875?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&auto=format&fit=crop&q=80"],specs:{Output:"15W Fast Qi Wireless Charging","Device Compatibility":"Qi-enabled phones, Apple Watch, AirPods Pro",Connector:"USB-C Input",Dimensions:"180mm x 90mm x 15mm",Safety:"Over-temperature protection"},inStock:!1,featured:!1,trending:!1},{id:"7",title:"Krypton RGB Accent Panels (9-Pack)",description:"Modular smart LED light panels that snap together in custom layouts. Synchronize with your computer audio, game environments, or create bespoke moving color gradients via the custom desktop application.",price:149.99,rating:4.6,reviewsCount:76,category:"Lighting & Decor",images:["https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80"],specs:{"Panel Quantity":"9 Triangular Panels","Max Colors":"16.7 Million Colors","Max Power":"24W per controller","Voice Assistant":"Apple HomeKit, Alexa, Google Assistant","Sync Features":"Rhythm Music Visualizer, Screen Mirroring"},inStock:!0,featured:!1,trending:!0},{id:"8",title:"Vocalis XLR Desktop Microphone",description:"Broadcast-quality XLR condenser microphone optimized for vocal clarity and detail. Features a cardioid polar pattern to isolate target sound from background noise, and a built-in heavy-duty shock mount.",price:159.99,rating:4.8,reviewsCount:93,category:"Audio Gear",images:["https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"],specs:{"Capsule Type":"25mm Condenser","Polar Pattern":"Cardioid","Frequency Range":"20Hz - 20,000Hz",Output:"3-pin Gold-plated XLR male","Required Power":"48V Phantom Power",Impedance:"100 Ohms"},inStock:!0,featured:!0,trending:!1}],U={1:[{id:"r1",author:"Liam S.",rating:5,comment:"Hands down the best mechanical keyboard I have owned. The Jade switches are incredibly smooth, and the anodized heavy aluminum case sounds spectacular.",date:"2026-05-15"},{id:"r2",author:"Emma K.",rating:4,comment:"Beautiful board! I love the RGB presets. Knocked down one star because the Bluetooth pairing took a few attempts initially, but now it works flawlessly.",date:"2026-06-02"}],2:[{id:"r3",author:"Marcus V.",rating:5,comment:"So comfortable to rest my arms on. Spill resistance works too; spilled a cup of tea, and the droplets just beaded up so I could wipe them off.",date:"2026-04-20"},{id:"r4",author:"David L.",rating:4,comment:"Good quality felt. Mouse tracking is perfect, but it slides slightly on my glass desk. Wish it had a bit more cork friction.",date:"2026-05-30"}],3:[{id:"r5",author:"Sophia H.",rating:5,comment:"Phenomenal audio fidelity. The soundstage is so wide it feels like the instruments are playing around me. Extremely comfortable for long editing sessions.",date:"2026-06-11"},{id:"r6",author:"James R.",rating:5,comment:"Detail retrieval is top notch. Highs are crisp, mids are clear, bass is tight and fast. Perfect companion for my desktop AMP.",date:"2026-06-25"}],4:[{id:"r7",author:"Chloe M.",rating:5,comment:"This is a game changer for working late at night. No glare on the screen whatsoever, and the wireless dial makes adjustability super convenient.",date:"2026-05-10"},{id:"r8",author:"Alex B.",rating:4,comment:"Fits my ultra-wide monitor perfectly. Excellent build quality, dial is very premium to turn.",date:"2026-06-19"}]},a={theme:localStorage.getItem("novacart-theme")||"dark",cart:JSON.parse(localStorage.getItem("novacart-cart"))||[],wishlist:JSON.parse(localStorage.getItem("novacart-wishlist"))||[],searchQuery:"",catalogFilters:{categories:[],maxPrice:300,minRating:0},catalogSort:"featured",catalogLayout:"grid"};function x(){localStorage.setItem("novacart-theme",a.theme),localStorage.setItem("novacart-cart",JSON.stringify(a.cart)),localStorage.setItem("novacart-wishlist",JSON.stringify(a.wishlist)),Z()}function k(e,t="success"){const i=document.getElementById("toast-container");if(!i)return;const n=document.createElement("div");n.className=`notification ${t} glass-panel`,n.innerHTML=`
    <i data-lucide="${t==="success"?"check":"alert-triangle"}"></i>
    <span>${e}</span>
  `,i.appendChild(n),lucide.createIcons(),setTimeout(()=>{n.style.animation="slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1) reverse forwards",setTimeout(()=>n.remove(),300)},3e3)}function O(){document.documentElement.setAttribute("data-theme",a.theme);const e=document.getElementById("theme-sun-icon"),t=document.getElementById("theme-moon-icon");a.theme==="light"?(e&&(e.style.display="none"),t&&(t.style.display="block")):(e&&(e.style.display="block"),t&&(t.style.display="none"))}function X(){a.theme=a.theme==="dark"?"light":"dark",x(),O(),k(`Switched to ${a.theme} mode`,"success")}function Z(){const e=document.getElementById("cart-badge"),t=document.getElementById("wishlist-badge"),i=a.cart.reduce((r,c)=>r+c.quantity,0),n=a.wishlist.length;e&&(i>0?(e.innerText=i,e.style.display="flex"):e.style.display="none"),t&&(n>0?(t.innerText=n,t.style.display="flex"):t.style.display="none")}const N=document.getElementById("cart-drawer-overlay"),G=document.getElementById("cart-drawer-panel");function j(){A(),N.classList.add("open"),G.classList.add("open"),document.body.style.overflow="hidden"}function B(){N.classList.remove("open"),G.classList.remove("open"),document.body.style.overflow="unset"}function z(e,t=1,i=!1){const n=y.find(c=>c.id===e);if(!n)return;if(!n.inStock){k("Sorry, this product is currently out of stock.","error");return}const r=a.cart.find(c=>c.id===e);r?r.quantity+=t:a.cart.push({id:e,quantity:t}),x(),i||(k(`Added ${n.title} to cart!`,"success"),j())}function V(e){a.cart=a.cart.filter(t=>t.id!==e),x(),A(),location.hash==="#checkout"&&T()}function D(e,t){if(t<=0){V(e);return}const i=a.cart.find(n=>n.id===e);i&&(i.quantity=t,x(),A(),location.hash==="#checkout"&&T())}function K(e){const t=a.wishlist.indexOf(e),i=y.find(n=>n.id===e);i&&(t>-1?(a.wishlist.splice(t,1),k(`Removed ${i.title} from Wishlist`,"success")):(a.wishlist.push(e),k(`Added ${i.title} to Wishlist!`,"success")),x(),location.hash==="#wishlist"?J():location.hash.startsWith("#product/")?location.hash.split("/")[1]===e&&Q(e):(location.hash==="#catalog"||location.hash==="")&&document.querySelectorAll(`.pc-wishlist-btn[data-id="${e}"]`).forEach(r=>{r.classList.toggle("active",a.wishlist.includes(e))}))}function A(){var r;const e=document.getElementById("cart-drawer-items"),t=document.getElementById("cart-subtotal"),i=document.getElementById("cart-drawer-footer");if(!e)return;if(a.cart.length===0){e.innerHTML=`
      <div class="drawer-empty">
        <i data-lucide="shopping-bag"></i>
        <h3>Your cart is empty</h3>
        <p>Explore our catalog to find premium gear.</p>
        <button class="secondary-btn" id="drawer-explore-btn">Go to Catalog</button>
      </div>
    `,t&&(t.innerText="$0.00"),i&&(i.style.display="none"),lucide.createIcons(),(r=document.getElementById("drawer-explore-btn"))==null||r.addEventListener("click",()=>{B(),location.hash="#catalog"});return}i&&(i.style.display="block");let n=0;e.innerHTML=a.cart.map(c=>{const l=y.find(p=>p.id===c.id);if(!l)return"";const d=l.price*c.quantity;return n+=d,`
      <div class="drawer-item" data-id="${l.id}">
        <img src="${l.images[0]}" alt="${l.title}" class="di-img">
        <div class="di-info">
          <div class="di-header">
            <h4 class="di-title">${l.title}</h4>
            <button class="di-remove" data-id="${l.id}">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
          <span class="di-price">$${l.price.toFixed(2)}</span>
          <div class="di-qty-row">
            <div class="di-qty-control">
              <button class="di-qty-btn qty-minus" data-id="${l.id}"><i data-lucide="minus"></i></button>
              <span class="di-qty-val">${c.quantity}</span>
              <button class="di-qty-btn qty-plus" data-id="${l.id}"><i data-lucide="plus"></i></button>
            </div>
          </div>
        </div>
      </div>
    `}).join(""),t&&(t.innerText=`$${n.toFixed(2)}`),lucide.createIcons(),e.querySelectorAll(".di-remove").forEach(c=>{c.addEventListener("click",()=>V(c.dataset.id))}),e.querySelectorAll(".qty-minus").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.id,d=a.cart.find(p=>p.id===l);d&&D(l,d.quantity-1)})}),e.querySelectorAll(".qty-plus").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.id,d=a.cart.find(p=>p.id===l);d&&D(l,d.quantity+1)})})}const R=document.getElementById("nav-search-container"),f=document.getElementById("nav-search-input"),b=document.getElementById("nav-search-suggestions"),I=document.getElementById("nav-search-form");function _(){!f||!b||(f.addEventListener("input",()=>{const e=f.value.trim().toLowerCase();if(e.length<2){b.classList.remove("open"),b.innerHTML="";return}const t=y.filter(i=>i.title.toLowerCase().includes(e)||i.category.toLowerCase().includes(e)).slice(0,5);if(t.length===0){b.classList.remove("open"),b.innerHTML="";return}b.innerHTML=t.map(i=>`
      <div class="suggestion-item" data-id="${i.id}">
        <img src="${i.images[0]}" alt="${i.title}" class="suggestion-img">
        <div class="suggestion-info">
          <span class="suggestion-title">${i.title}</span>
          <span class="suggestion-price">$${i.price.toFixed(2)}</span>
        </div>
      </div>
    `).join(""),b.classList.add("open"),b.querySelectorAll(".suggestion-item").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.id;b.classList.remove("open"),f.value="",location.hash=`#product/${n}`})})}),I==null||I.addEventListener("submit",e=>{e.preventDefault(),a.searchQuery=f.value.trim(),b.classList.remove("open"),location.hash="#catalog"}),document.addEventListener("click",e=>{R&&!R.contains(e.target)&&b.classList.remove("open")}))}function S(e){const t=a.wishlist.includes(e.id),i=e.inStock?`<button class="pc-cart-btn add-to-cart-trigger" data-id="${e.id}" aria-label="Add to Cart"><i data-lucide="shopping-cart"></i></button>`:'<button class="pc-cart-btn disabled" disabled aria-label="Out of Stock"><i data-lucide="slash"></i></button>';return`
    <div class="product-card fade-in">
      <div class="pc-image-wrapper" onclick="location.hash = '#product/${e.id}'" style="cursor: pointer;">
        ${e.featured?'<span class="pc-tag gradient-bg" style="color:#0b0f19;">Featured</span>':""}
        ${e.inStock?"":'<span class="pc-tag" style="background:var(--danger); color:white;">Out of Stock</span>'}
        <img src="${e.images[0]}" alt="${e.title}" class="pc-img" loading="lazy">
      </div>
      <button class="pc-wishlist-btn ${t?"active":""}" data-id="${e.id}" aria-label="Toggle Wishlist">
        <i data-lucide="heart"></i>
      </button>
      <div class="pc-details">
        <span class="pc-category">${e.category}</span>
        <h3 class="pc-title" onclick="location.hash = '#product/${e.id}'" style="cursor: pointer;">${e.title}</h3>
        <div class="pc-rating">
          <i data-lucide="star"></i>
          <span>${e.rating.toFixed(1)} (${e.reviewsCount} reviews)</span>
        </div>
        <div class="pc-footer">
          <span class="pc-price">$${e.price.toFixed(2)}</span>
          ${i}
        </div>
      </div>
    </div>
  `}function C(e){e&&(e.querySelectorAll(".pc-wishlist-btn").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation(),K(t.dataset.id)})}),e.querySelectorAll(".add-to-cart-trigger").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation(),z(t.dataset.id)})}))}const w=document.getElementById("app-view");function ee(){var i;w.innerHTML=`
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
  `;const e=document.getElementById("trending-grid"),t=y.filter(n=>n.trending);e&&(e.innerHTML=t.map(n=>S(n)).join(""),C(e)),lucide.createIcons(),(i=document.getElementById("hero-cta-btn"))==null||i.addEventListener("click",()=>{location.hash="#catalog"}),document.querySelectorAll(".category-card").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.cat;a.catalogFilters.categories=[r],location.hash="#catalog"})})}function te(){w.innerHTML=`
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
            <input type="range" class="price-slider" id="price-range-slider" min="30" max="300" step="10" value="${a.catalogFilters.maxPrice}">
            <div class="price-values">
              <span>$30</span>
              <span id="slider-current-val">$${a.catalogFilters.maxPrice}</span>
              <span>$300</span>
            </div>
          </div>
        </div>

        <div>
          <h3 class="filter-group-title">Ratings</h3>
          <div class="filter-list">
            <label class="filter-checkbox-label">
              <input type="radio" name="rating-filter" value="0" ${a.catalogFilters.minRating===0?"checked":""}>
              <span>All Ratings</span>
            </label>
            <label class="filter-checkbox-label">
              <input type="radio" name="rating-filter" value="4.5" ${a.catalogFilters.minRating===4.5?"checked":""}>
              <span>4.5 ★ & Above</span>
            </label>
            <label class="filter-checkbox-label">
              <input type="radio" name="rating-filter" value="4.8" ${a.catalogFilters.minRating===4.8?"checked":""}>
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
              <option value="featured" ${a.catalogSort==="featured"?"selected":""}>Featured</option>
              <option value="price-asc" ${a.catalogSort==="price-asc"?"selected":""}>Price: Low to High</option>
              <option value="price-desc" ${a.catalogSort==="price-desc"?"selected":""}>Price: High to Low</option>
              <option value="rating-desc" ${a.catalogSort==="rating-desc"?"selected":""}>Top Rated</option>
            </select>

            <!-- Layout switcher -->
            <div class="layout-toggle">
              <button class="layout-btn ${a.catalogLayout==="grid"?"active":""}" id="layout-grid-btn" aria-label="Grid View">
                <i data-lucide="layout-grid"></i>
              </button>
              <button class="layout-btn ${a.catalogLayout==="list"?"active":""}" id="layout-list-btn" aria-label="List View">
                <i data-lucide="list"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Product Cards Container -->
        <div class="${a.catalogLayout==="grid"?"products-grid":"products-list-view"}" id="catalog-products-container">
          <!-- Filtered catalog cards injected dynamically -->
        </div>
      </div>
    </div>
  `;const e=document.getElementById("cat-filters-list"),t=[...new Set(y.map(s=>s.category))];e&&(e.innerHTML=t.map(s=>`
      <label class="filter-checkbox-label">
        <input type="checkbox" class="cat-checkbox" value="${s}" ${a.catalogFilters.categories.includes(s)?"checked":""}>
        <span>${s}</span>
      </label>
    `).join("")),lucide.createIcons();const i=document.getElementById("catalog-products-container"),n=document.getElementById("catalog-count-label"),r=document.getElementById("price-range-slider"),c=document.getElementById("slider-current-val"),l=document.getElementById("catalog-sort-select"),d=document.getElementById("reset-filters-btn");function p(){let s=[...y];if(a.searchQuery){const o=a.searchQuery.toLowerCase();s=s.filter(u=>u.title.toLowerCase().includes(o)||u.category.toLowerCase().includes(o)),f&&(f.value=a.searchQuery)}a.catalogFilters.categories.length>0&&(s=s.filter(o=>a.catalogFilters.categories.includes(o.category))),s=s.filter(o=>o.price<=a.catalogFilters.maxPrice),s=s.filter(o=>o.rating>=a.catalogFilters.minRating),a.catalogSort==="price-asc"?s.sort((o,u)=>o.price-u.price):a.catalogSort==="price-desc"?s.sort((o,u)=>u.price-o.price):a.catalogSort==="rating-desc"?s.sort((o,u)=>u.rating-o.rating):s.sort((o,u)=>o.featured&&!u.featured?-1:!o.featured&&u.featured?1:u.rating-o.rating),n&&(n.innerText=`${s.length} ${s.length===1?"product":"products"} found`),i&&(s.length===0?(i.className="fade-in",i.innerHTML=`
          <div style="text-align: center; padding: 80px 0; grid-column: 1/-1; width: 100%;">
            <i data-lucide="slash" style="width: 60px; height: 60px; color: var(--text-muted); opacity: 0.5;"></i>
            <h3 style="margin-top: 16px;">No products match criteria</h3>
            <p style="color: var(--text-secondary); margin-top: 8px;">Try modifying your keyword search or sliding price values.</p>
          </div>
        `,lucide.createIcons()):(i.className=a.catalogLayout==="grid"?"products-grid":"products-list-view",i.innerHTML=s.map(o=>S(o)).join(""),C(i),lucide.createIcons()))}p(),document.querySelectorAll(".cat-checkbox").forEach(s=>{s.addEventListener("change",()=>{s.checked?a.catalogFilters.categories.push(s.value):a.catalogFilters.categories=a.catalogFilters.categories.filter(o=>o!==s.value),p()})}),r==null||r.addEventListener("input",s=>{a.catalogFilters.maxPrice=Number(s.target.value),c&&(c.innerText=`$${a.catalogFilters.maxPrice}`),p()}),document.querySelectorAll('input[name="rating-filter"]').forEach(s=>{s.addEventListener("change",o=>{a.catalogFilters.minRating=Number(o.target.value),p()})}),l==null||l.addEventListener("change",s=>{a.catalogSort=s.target.value,p()}),d==null||d.addEventListener("click",()=>{a.catalogFilters.categories=[],a.catalogFilters.maxPrice=300,a.catalogFilters.minRating=0,a.catalogSort="featured",a.searchQuery="",f&&(f.value=""),document.querySelectorAll(".cat-checkbox").forEach(s=>s.checked=!1),document.querySelectorAll('input[name="rating-filter"]').forEach(s=>s.checked=s.value==="0"),r&&(r.value=300),c&&(c.innerText="$300"),l&&(l.value="featured"),p(),k("Filters cleared","success")});const g=document.getElementById("layout-grid-btn"),v=document.getElementById("layout-list-btn");g==null||g.addEventListener("click",()=>{a.catalogLayout="grid",g.classList.add("active"),v==null||v.classList.remove("active"),p()}),v==null||v.addEventListener("click",()=>{a.catalogLayout="list",v.classList.add("active"),g==null||g.classList.remove("active"),p()})}function Q(e){var M,H;const t=y.find(m=>m.id===e);if(!t){w.innerHTML=`
      <div style="text-align: center; padding: 100px 0;">
        <h2>Product Not Found</h2>
        <a href="#catalog" class="gradient-btn" style="margin-top: 20px;">Back to Catalog</a>
      </div>
    `;return}const i=a.wishlist.includes(t.id),n=`<p class="detail-desc">${t.description}</p>`,r=`
    <div class="specs-table">
      ${Object.entries(t.specs).map(([m,h])=>`
        <div class="spec-row">
          <span class="spec-name">${m}</span>
          <span class="spec-value">${h}</span>
        </div>
      `).join("")}
    </div>
  `,c=U[t.id]||[],l=`
    <div class="reviews-list">
      ${c.length===0?'<p style="color: var(--text-secondary);">No reviews yet. Be the first to share your thoughts!</p>':c.map(m=>`
          <div class="glass-panel review-item">
            <div class="review-header">
              <span class="review-author">${m.author}</span>
              <span class="review-date">${m.date}</span>
            </div>
            <div class="pc-rating" style="margin-bottom: 8px;">
              ${Array.from({length:5}).map((h,E)=>`<i data-lucide="star" style="${E<m.rating?"fill:#fbbf24; color:#fbbf24;":"color:var(--text-muted);"}"></i>`).join("")}
            </div>
            <p class="review-comment">"${m.comment}"</p>
          </div>
        `).join("")}
    </div>
  `,d=y.filter(m=>m.category===t.category&&m.id!==t.id).slice(0,4),p=d.length>0?`
      <h2 class="home-section-title" style="margin-top: 64px;">Related Hardware</h2>
      <div class="products-grid" id="related-grid-items">
        ${d.map(m=>S(m)).join("")}
      </div>
    `:"";w.innerHTML=`
    <div class="detail-layout fade-in">
      <!-- Media Gallery pane -->
      <div class="detail-gallery">
        <div class="main-img-wrapper" id="zoom-container">
          <img src="${t.images[0]}" alt="${t.title}" class="main-img" id="detail-main-img">
        </div>
        <div class="thumbnail-list">
          ${t.images.map((m,h)=>`
            <div class="thumb-item ${h===0?"active":""}" data-index="${h}">
              <img src="${m}" alt="${t.title} thumbnail ${h+1}" class="thumb-img">
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Specs & Purchase details pane -->
      <div class="detail-info">
        <span class="detail-category">${t.category}</span>
        <h1 class="detail-title">${t.title}</h1>
        
        <div class="rating-reviews">
          <div class="pc-rating">
            <i data-lucide="star"></i>
            <span>${t.rating.toFixed(1)}</span>
          </div>
          <span class="review-count">| &nbsp; ${t.reviewsCount} verified customer reviews</span>
        </div>

        <div class="detail-price">$${t.price.toFixed(2)}</div>
        <p class="detail-desc">${t.description}</p>

        <!-- Actions Panel -->
        <div class="detail-actions">
          ${t.inStock?`
            <div class="detail-qty-control">
              <button class="detail-qty-btn" id="qty-dec"><i data-lucide="minus"></i></button>
              <span class="detail-qty-val" id="qty-counter-value">1</span>
              <button class="detail-qty-btn" id="qty-inc"><i data-lucide="plus"></i></button>
            </div>
            <button class="gradient-btn detail-add-btn" id="detail-cart-add-btn">
              <i data-lucide="shopping-cart"></i>
              <span>Add to Shopping Cart</span>
            </button>
          `:`
            <button class="secondary-btn" style="flex: 1; cursor: not-allowed; opacity: 0.5;" disabled>
              <i data-lucide="slash"></i>
              <span>Out of Stock</span>
            </button>
          `}

          <button class="detail-wish-btn ${i?"active":""}" id="detail-wishlist-trigger" aria-label="Save to Wishlist">
            <i data-lucide="heart"></i>
          </button>
        </div>

        <!-- tabbed detail sections -->
        <div class="detail-tabs">
          <div class="tab-headers">
            <button class="tab-btn active" data-tab="desc">Description</button>
            <button class="tab-btn" data-tab="specs">Specifications</button>
            <button class="tab-btn" data-tab="reviews">Reviews (${c.length})</button>
          </div>
          <div class="tab-content active" id="tab-desc">${n}</div>
          <div class="tab-content" id="tab-specs">${r}</div>
          <div class="tab-content" id="tab-reviews">${l}</div>
        </div>
      </div>
    </div>

    <!-- Related grid panel -->
    ${p}
  `,lucide.createIcons();const g=document.getElementById("detail-main-img"),v=document.querySelectorAll(".thumb-item");v.forEach(m=>{m.addEventListener("click",()=>{v.forEach(E=>E.classList.remove("active")),m.classList.add("active");const h=Number(m.dataset.index);g&&(g.src=t.images[h])})});const s=document.getElementById("zoom-container");s&&g&&(s.addEventListener("mousemove",m=>{const h=s.getBoundingClientRect(),E=(m.clientX-h.left)/h.width*100,$=(m.clientY-h.top)/h.height*100;g.style.transformOrigin=`${E}% ${$}%`,g.style.transform="scale(1.5)"}),s.addEventListener("mouseleave",()=>{g.style.transform="scale(1)"}));let o=1;const u=document.getElementById("qty-counter-value"),L=document.getElementById("qty-dec"),q=document.getElementById("qty-inc");L==null||L.addEventListener("click",()=>{o>1&&(o--,u&&(u.innerText=o))}),q==null||q.addEventListener("click",()=>{o++,u&&(u.innerText=o)}),(M=document.getElementById("detail-cart-add-btn"))==null||M.addEventListener("click",()=>{z(t.id,o)}),(H=document.getElementById("detail-wishlist-trigger"))==null||H.addEventListener("click",()=>{K(t.id)});const F=document.querySelectorAll(".tab-btn"),Y=document.querySelectorAll(".tab-content");F.forEach(m=>{m.addEventListener("click",()=>{var E;F.forEach($=>$.classList.remove("active")),Y.forEach($=>$.classList.remove("active")),m.classList.add("active");const h=m.dataset.tab;(E=document.getElementById(`tab-${h}`))==null||E.classList.add("active")})});const P=document.getElementById("related-grid-items");P&&C(P)}function J(){if(a.wishlist.length===0){w.innerHTML=`
      <div class="wishlist-empty fade-in">
        <i data-lucide="heart"></i>
        <h2>Your wishlist is empty</h2>
        <p>Start browsing our hardware catalog and tap the heart icon on designs you want to save.</p>
        <a href="#catalog" class="gradient-btn" style="margin-top: 10px;">Go to Catalog</a>
      </div>
    `,lucide.createIcons();return}const e=y.filter(i=>a.wishlist.includes(i.id));w.innerHTML=`
    <div class="fade-in">
      <h1 class="home-section-title">Saved Wishlist Items</h1>
      <div class="products-grid" id="wishlist-grid-items">
        ${e.map(i=>S(i)).join("")}
      </div>
    </div>
  `;const t=document.getElementById("wishlist-grid-items");t&&C(t),lucide.createIcons()}function T(){var v;const e=a.cart.reduce((s,o)=>{const u=y.find(L=>L.id===o.id);return s+(u?u.price*o.quantity:0)},0);if(a.cart.length===0){w.innerHTML=`
      <div style="text-align: center; padding: 100px 0;">
        <i data-lucide="shopping-bag" style="width: 60px; height: 60px; color: var(--text-muted); opacity: 0.5;"></i>
        <h2 style="margin-top: 20px;">Your cart is empty</h2>
        <p style="color: var(--text-secondary); margin-top: 8px;">Add products to cart to proceed with checkout.</p>
        <a href="#catalog" class="gradient-btn" style="margin-top: 20px;">View Catalog</a>
      </div>
    `,lucide.createIcons();return}const t=e*.08,i=e>150?0:15,n=e+t+i;w.innerHTML=`
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
                <span>Pay $${n.toFixed(2)} Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Order Summary Panel -->
      <div class="glass-panel summary-panel">
        <h3 class="summary-title">Order Summary</h3>
        <div class="summary-items">
          ${a.cart.map(s=>{const o=y.find(u=>u.id===s.id);return o?`
              <div class="summary-item-row">
                <img src="${o.images[0]}" alt="${o.title}" class="summary-item-img">
                <div class="summary-item-details">
                  <span class="summary-item-name">${o.title}</span>
                  <span class="summary-item-qty">Qty: ${s.quantity}</span>
                </div>
                <span class="summary-item-price">$${(o.price*s.quantity).toFixed(2)}</span>
              </div>
            `:""}).join("")}
        </div>

        <div class="bill-rows">
          <div class="bill-row">
            <span>Subtotal</span>
            <span>$${e.toFixed(2)}</span>
          </div>
          <div class="bill-row">
            <span>Estimated Taxes (8%)</span>
            <span>$${t.toFixed(2)}</span>
          </div>
          <div class="bill-row">
            <span>Shipping</span>
            <span>${i===0?"FREE":`$${i.toFixed(2)}`}</span>
          </div>
          <div class="bill-row bill-row-total">
            <span>Order Total</span>
            <span>$${n.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  `,lucide.createIcons();const r=document.getElementById("shipping-details-form"),c=document.getElementById("payment-details-form"),l=document.getElementById("step-panel-shipping"),d=document.getElementById("step-panel-payment");r==null||r.addEventListener("submit",s=>{s.preventDefault(),l.classList.remove("step-panel-active"),l.style.opacity="0.7",d.classList.add("step-panel-active"),d.style.opacity="1",d.style.pointerEvents="auto",d.scrollIntoView({behavior:"smooth"})}),(v=document.getElementById("back-to-shipping-btn"))==null||v.addEventListener("click",()=>{d.classList.remove("step-panel-active"),d.style.opacity="0.5",d.style.pointerEvents="none",l.classList.add("step-panel-active"),l.style.opacity="1",l.style.pointerEvents="auto",l.scrollIntoView({behavior:"smooth"})});const p=document.getElementById("card-num");p==null||p.addEventListener("input",s=>{var L;let o=s.target.value.replace(/\D/g,""),u=((L=o.match(/.{1,4}/g))==null?void 0:L.join(" "))||o;s.target.value=u});const g=document.getElementById("card-exp");g==null||g.addEventListener("input",s=>{let o=s.target.value.replace(/\D/g,"");o.length>=2?s.target.value=o.slice(0,2)+"/"+o.slice(2,4):s.target.value=o}),c==null||c.addEventListener("submit",s=>{if(s.preventDefault(),document.getElementById("card-cvv").value.length<3){k("Please enter a valid 3-digit CVV number","error");return}const u=document.getElementById("checkout-success-modal");u&&u.classList.add("open"),a.cart=[],x()})}function W(){var t,i,n;const e=location.hash;if(B(),document.querySelectorAll(".nav-link").forEach(r=>{r.classList.remove("active")}),window.scrollTo(0,0),!e||e==="#/"||e==="#home")(t=document.querySelector('.nav-link[data-target="home"]'))==null||t.classList.add("active"),ee();else if(e==="#catalog")(i=document.querySelector('.nav-link[data-target="catalog"]'))==null||i.classList.add("active"),te();else if(e.startsWith("#product/")){const r=e.split("/")[1];Q(r)}else e==="#wishlist"?((n=document.querySelector('.nav-link[data-target="wishlist"]'))==null||n.classList.add("active"),J()):e==="#checkout"?T():(w.innerHTML=`
      <div style="text-align: center; padding: 100px 0;">
        <h2>Page Not Found</h2>
        <p style="color: var(--text-secondary); margin-top: 10px;">The requested URL route does not exist.</p>
        <a href="#" class="gradient-btn" style="margin-top: 20px;">Return to Home</a>
      </div>
    `,lucide.createIcons())}document.addEventListener("DOMContentLoaded",()=>{var e,t,i,n,r,c,l;O(),x(),_(),window.addEventListener("hashchange",W),W(),(e=document.getElementById("theme-toggle-btn"))==null||e.addEventListener("click",X),(t=document.getElementById("nav-cart-btn"))==null||t.addEventListener("click",j),(i=document.getElementById("cart-drawer-close"))==null||i.addEventListener("click",B),(n=document.getElementById("nav-wishlist-btn"))==null||n.addEventListener("click",()=>{location.hash="#wishlist"}),(r=document.getElementById("success-home-btn"))==null||r.addEventListener("click",()=>{const d=document.getElementById("checkout-success-modal");d==null||d.classList.remove("open"),location.hash="#"}),document.querySelectorAll(".nav-link").forEach(d=>{d.addEventListener("click",()=>{const p=d.dataset.target,g=d.dataset.category;g?a.catalogFilters.categories=[g]:a.catalogFilters.categories=[],a.searchQuery="",f&&(f.value=""),location.hash=`#${p}`})}),(c=document.getElementById("nav-logo"))==null||c.addEventListener("click",d=>{d.preventDefault(),a.searchQuery="",f&&(f.value=""),location.hash="#"}),(l=document.getElementById("newsletter-form"))==null||l.addEventListener("submit",d=>{d.preventDefault();const p=d.target.querySelector("input");p&&(k(`Thank you for subscribing, ${p.value}!`,"success"),p.value="")}),window.addEventListener("scroll",()=>{const d=document.getElementById("main-navbar");d&&d.classList.toggle("scrolled",window.scrollY>20)})});
