// Main application functionality
let currentPage = 'home';
let selectedYacht = null;
let filteredYachts = [...yachtsData];
let lastOrder = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadHeroImage();
    renderProducts();
    setupFilters();
    
    // Set initial page
    navigateToPage('home');
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });
}

function navigateToPage(page) {
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById(`${page}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = page;

        // Load page-specific content
        switch(page) {
            case 'products':
                renderProducts();
                break;
            case 'cart':
                renderCart();
                break;
            case 'checkout':
                renderCheckout();
                break;
            case 'order-history':
                renderOrderHistory();
                break;
            case 'order-details':
                renderOrderDetails();
                break;
        }
    }
}

// Load hero image
async function loadHeroImage() {
    const heroImg = document.getElementById('hero-img');
    heroImg.src = 'https://images.unsplash.com/photo-1734410308581-f6d5d5ed7286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvciUyMHlhY2h0JTIwbHV4dXJ5fGVufDF8fHx8MTc1ODU5NjM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
}

// Products functionality
function setupFilters() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');

    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', applyFilters);
    }
}

function applyFilters() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    const selectedCategory = document.getElementById('category-filter')?.value || '';
    const selectedPriceRange = document.getElementById('price-filter')?.value || '';

    filteredYachts = yachtsData.filter(yacht => {
        // Search filter
        const matchesSearch = !searchTerm || 
            yacht.name.toLowerCase().includes(searchTerm) ||
            yacht.brand.toLowerCase().includes(searchTerm) ||
            yacht.category.toLowerCase().includes(searchTerm);

        // Category filter
        const matchesCategory = !selectedCategory || yacht.category === selectedCategory;

        // Price filter
        let matchesPrice = true;
        if (selectedPriceRange) {
            const [min, max] = selectedPriceRange.split('-').map(Number);
            matchesPrice = yacht.price >= min && yacht.price <= max;
        }

        return matchesSearch && matchesCategory && matchesPrice;
    });

    renderProducts();
}

function renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    if (filteredYachts.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No yachts found</h3>
                <p>Try adjusting your filters to see more results.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredYachts.map(yacht => `
        <div class="product-card" onclick="showProductDetail(${yacht.id})">
            <img src="${getImageUrl(yacht.images[0])}" alt="${yacht.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${yacht.name}</h3>
                <div class="product-brand">${yacht.brand}</div>
                <span class="product-category">${yacht.category}</span>
                <div class="product-price">${cartManager.formatPrice(yacht.price)}</div>
                <div class="product-specs">
                    <span>${yacht.length}ft</span>
                    <span>${yacht.year}</span>
                    <span>${yacht.location}</span>
                </div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${yacht.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function showProductDetail(yachtId) {
    selectedYacht = yachtsData.find(yacht => yacht.id === yachtId);
    if (!selectedYacht) return;

    const container = document.getElementById('product-detail-content');
    if (!container) return;

    container.innerHTML = `
        <div class="product-detail">
            <div class="product-gallery">
                <img src="${getImageUrl(selectedYacht.images[0])}" alt="${selectedYacht.name}" class="main-image" id="main-image">
                <div class="thumbnail-images">
                    ${selectedYacht.images.map((img, index) => `
                        <img src="${getImageUrl(img)}" alt="${selectedYacht.name}" 
                             class="thumbnail ${index === 0 ? 'active' : ''}" 
                             onclick="changeMainImage('${getImageUrl(img)}', this)">
                    `).join('')}
                </div>
            </div>
            <div class="product-details">
                <h1>${selectedYacht.name}</h1>
                <div class="product-brand">${selectedYacht.brand} • ${selectedYacht.category}</div>
                <div class="product-price-large">${cartManager.formatPrice(selectedYacht.price)}</div>
                <p>${selectedYacht.description}</p>
                
                <div class="specifications">
                    <h3>Specifications</h3>
                    <div class="spec-grid">
                        <div class="spec-item">
                            <span>Length:</span>
                            <span>${selectedYacht.length} ft</span>
                        </div>
                        <div class="spec-item">
                            <span>Beam:</span>
                            <span>${selectedYacht.specifications.beam} ft</span>
                        </div>
                        <div class="spec-item">
                            <span>Draft:</span>
                            <span>${selectedYacht.specifications.draft} ft</span>
                        </div>
                        <div class="spec-item">
                            <span>Year:</span>
                            <span>${selectedYacht.year}</span>
                        </div>
                        <div class="spec-item">
                            <span>Max Speed:</span>
                            <span>${selectedYacht.specifications.maxSpeed} knots</span>
                        </div>
                        <div class="spec-item">
                            <span>Cabins:</span>
                            <span>${selectedYacht.specifications.cabins}</span>
                        </div>
                        <div class="spec-item">
                            <span>Berths:</span>
                            <span>${selectedYacht.specifications.berths}</span>
                        </div>
                        <div class="spec-item">
                            <span>Crew:</span>
                            <span>${selectedYacht.specifications.crew}</span>
                        </div>
                    </div>
                </div>

                <div class="features-list">
                    ${selectedYacht.features.map(feature => `
                        <span class="feature-tag">${feature}</span>
                    `).join('')}
                </div>

                <button class="add-to-cart-large" onclick="addToCart(${selectedYacht.id})">
                    Add to Cart - ${cartManager.formatPrice(selectedYacht.price)}
                </button>
            </div>
        </div>
    `;

    navigateToPage('product-detail');
}

function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

function addToCart(yachtId) {
    const yacht = yachtsData.find(y => y.id === yachtId);
    if (yacht) {
        cartManager.addItem(yacht);
    }
}

// Cart functionality
function renderCart() {
    const container = document.getElementById('cart-content');
    if (!container) return;

    const cartItems = cartManager.getItems();
    
    if (cartItems.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <h3>Your cart is empty</h3>
                <p>Add some luxury yachts to your collection</p>
                <button class="cta-button" onclick="navigateToPage('products')">Browse Collection</button>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="cart-items">
            ${cartItems.map(yacht => `
                <div class="cart-item">
                    <img src="${getImageUrl(yacht.images[0])}" alt="${yacht.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h3 class="cart-item-name">${yacht.name}</h3>
                        <div class="cart-item-brand">${yacht.brand} • ${yacht.category}</div>
                        <div class="cart-item-price">${cartManager.formatPrice(yacht.price)}</div>
                        <div class="cart-item-specs">
                            ${yacht.length}ft • ${yacht.year} • ${yacht.location}
                        </div>
                        <div class="cart-item-actions">
                            <button class="remove-btn" onclick="removeFromCart(${yacht.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="cart-total">
            <h3>Total Investment</h3>
            <div class="total-amount">${cartManager.formatPrice(cartManager.getTotalPrice())}</div>
            <button class="checkout-btn" onclick="navigateToPage('checkout')">Proceed to Checkout</button>
        </div>
    `;
}

function removeFromCart(yachtId) {
    cartManager.removeItem(yachtId);
    renderCart();
}

// Checkout functionality
function renderCheckout() {
    const summaryContainer = document.getElementById('checkout-summary');
    if (!summaryContainer) return;

    const cartItems = cartManager.getItems();
    
    summaryContainer.innerHTML = `
        <h3>Order Summary</h3>
        <div class="order-items">
            ${cartItems.map(yacht => `
                <div class="order-item">
                    <img src="${getImageUrl(yacht.images[0])}" alt="${yacht.name}" style="width: 60px; height: 40px; object-fit: cover; border-radius: 4px; margin-right: 12px;">
                    <div>
                        <div style="font-weight: 600;">${yacht.name}</div>
                        <div style="font-size: 0.9rem; color: var(--text-secondary);">${yacht.brand}</div>
                        <div style="color: var(--primary-gold); font-weight: 600;">${cartManager.formatPrice(yacht.price)}</div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div style="border-top: 2px solid var(--accent-silver); margin-top: 1rem; padding-top: 1rem;">
            <div style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 700; color: var(--primary-gold);">
                <span>Total:</span>
                <span>${cartManager.formatPrice(cartManager.getTotalPrice())}</span>
            </div>
        </div>
    `;

    // Setup checkout form
    const form = document.getElementById('checkout-form');
    if (form) {
        form.addEventListener('submit', handleCheckout);
    }
}

function handleCheckout(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const orderData = {
        id: Date.now(),
        date: new Date().toISOString(),
        customer: {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            city: formData.get('city'),
            country: formData.get('country')
        },
        items: cartManager.getItems(),
        total: cartManager.getTotalPrice()
    };

    // Store order data
    lastOrder = orderData;
    
    // Save to order history
    cartManager.saveOrder(orderData);
    
    // Clear cart
    cartManager.clearCart();
    
    // Navigate to order confirmation
    navigateToPage('order-details');
    
    cartManager.showToast('Order placed successfully!', 'success');
}

// Order history functionality
function renderOrderHistory() {
    const container = document.getElementById('order-history-content');
    if (!container) return;

    const orders = cartManager.getOrderHistory();
    
    if (orders.length === 0) {
        container.innerHTML = `
            <div class="order-history-empty">
                <h3>No orders yet</h3>
                <p>Start shopping to see your yacht purchases here</p>
                <button class="cta-button" onclick="navigateToPage('products')">Browse Collection</button>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="order-history-list">
            ${orders.map(order => `
                <div class="order-card">
                    <div class="order-header">
                        <div class="order-info">
                            <h3>Order #${order.id}</h3>
                            <div class="order-date">${new Date(order.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}</div>
                        </div>
                        <div>
                            <div class="order-total">${cartManager.formatPrice(order.total)}</div>
                            <div class="order-status">Confirmed</div>
                        </div>
                    </div>
                    <div class="order-body">
                        <div class="order-items">
                            ${order.items.map(yacht => `
                                <div class="order-item">
                                    <img src="${getImageUrl(yacht.images[0])}" alt="${yacht.name}">
                                    <div class="order-item-details">
                                        <h4>${yacht.name}</h4>
                                        <p>${yacht.brand} • ${yacht.category}</p>
                                        <div class="order-item-price">${cartManager.formatPrice(yacht.price)}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--accent-silver);">
                            <p><strong>Delivery Address:</strong> ${order.customer.address}, ${order.customer.city}, ${order.customer.country}</p>
                            <p><strong>Contact:</strong> ${order.customer.email} • ${order.customer.phone}</p>
                        </div>
                    </div>
                    <div>   
                    <a href="chitietdonhang.html"><i>Order Details</i></a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}


// Order details functionality
function renderOrderDetails() {
    const container = document.getElementById('order-details-content');
    if (!container || !lastOrder) return;

    container.innerHTML = `
        <div class="order-info">
            <h3>Order #${lastOrder.id}</h3>
            <p><strong>Order Date:</strong> ${new Date(lastOrder.date).toLocaleDateString()}</p>
            <p><strong>Customer:</strong> ${lastOrder.customer.firstName} ${lastOrder.customer.lastName}</p>
            <p><strong>Email:</strong> ${lastOrder.customer.email}</p>
        </div>
        
        <div class="ordered-items" style="margin-top: 2rem;">
            <h3>Purchased Yachts</h3>
            ${lastOrder.items.map(yacht => `
                <div class="order-item" style="display: flex; align-items: center; padding: 1rem; background: var(--secondary-cream); border-radius: var(--radius-md); margin-bottom: 1rem;">
                    <img src="${getImageUrl(yacht.images[0])}" alt="${yacht.name}" style="width: 80px; height: 60px; object-fit: cover; border-radius: var(--radius-sm); margin-right: 1rem;">
                    <div>
                        <h4>${yacht.name}</h4>
                        <p>${yacht.brand} • ${yacht.category}</p>
                        <p style="color: var(--primary-gold); font-weight: 600;">${cartManager.formatPrice(yacht.price)}</p>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="order-total" style="margin-top: 2rem; padding: 1rem; background: var(--primary-dark); color: var(--text-light); border-radius: var(--radius-md); text-align: center;">
            <h3>Total Investment: ${cartManager.formatPrice(lastOrder.total)}</h3>
        </div>
    `;
}