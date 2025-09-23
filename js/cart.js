// Cart functionality
class CartManager {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartBadge();
    }

    addItem(yacht) {
        // Check if item already exists
        const existingItem = this.items.find(item => item.id === yacht.id);
        
        if (existingItem) {
            this.showToast('This yacht is already in your cart', 'error');
            return false;
        }

        this.items.push(yacht);
        this.saveCart();
        this.updateCartBadge();
        this.showToast('Yacht added to cart successfully!', 'success');
        return true;
    }

    removeItem(yachtId) {
        this.items = this.items.filter(item => item.id !== yachtId);
        this.saveCart();
        this.updateCartBadge();
        this.showToast('Yacht removed from cart', 'success');
    }

    getItems() {
        return this.items;
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getItemCount() {
        return this.items.length;
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartBadge();
    }

    saveOrder(orderData) {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.unshift(orderData); // Add to beginning of array (newest first)
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    getOrderHistory() {
        return JSON.parse(localStorage.getItem('orders')) || [];
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateCartBadge() {
        const badge = document.getElementById('cart-count');
        if (badge) {
            badge.textContent = this.getItemCount();
            badge.style.display = this.getItemCount() > 0 ? 'inline' : 'none';
        }
    }

    showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;

        container.appendChild(toast);

        // Remove toast after 3 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 3000);
    }

    formatPrice(price) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    }
}

// Initialize cart manager
const cartManager = new CartManager();