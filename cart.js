/* ============================================
   NILA'S AVIARY — CART
   ============================================ */

const CART_KEY = 'nilasCart';
let cart = [];
try { cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]'); } catch(e) { cart = []; }

function saveCart() { localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartBadge(); }
function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function inrFmt(n) { return '₹' + Number(n).toLocaleString('en-IN'); }

/* ---------- MUTATIONS ---------- */
function addToCart(item) {
    const ex = cart.find(c => c.id == item.id && c.type === item.type);
    if (ex) { ex.qty++; } else { cart.push({ ...item, qty: 1 }); }
    saveCart();
    renderCartItems();
    openCartDrawer();
    cartToast('✓ Added to cart — ' + item.name);
}

function removeFromCart(id, type) {
    cart = cart.filter(c => !(c.id == id && c.type === type));
    saveCart(); renderCartItems();
}

function updateQty(id, type, delta) {
    const item = cart.find(c => c.id == id && c.type === type);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    saveCart(); renderCartItems();
}

function clearCart() { cart = []; saveCart(); renderCartItems(); }

/* ---------- BADGE ---------- */
function updateCartBadge() {
    const b = document.getElementById('cartBadge');
    if (!b) return;
    const n = cartCount();
    b.textContent = n;
    b.style.display = n > 0 ? 'flex' : 'none';
}

/* ---------- DRAWER OPEN/CLOSE ---------- */
function openCartDrawer() {
    document.getElementById('cartDrawer')?.classList.add('open');
    document.getElementById('cartOverlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeCartDrawer() {
    document.getElementById('cartDrawer')?.classList.remove('open');
    document.getElementById('cartOverlay')?.classList.remove('open');
    document.body.style.overflow = '';
}

/* ---------- RENDER ITEMS ---------- */
function renderCartItems() {
    const list = document.getElementById('cartItemsList');
    const footer = document.getElementById('cartFooter');
    if (!list) return;

    if (!cart.length) {
        list.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <span>Add birds, food &amp; accessories!</span>
            </div>`;
        if (footer) footer.style.display = 'none';
        return;
    }

    if (footer) footer.style.display = 'block';
    list.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="ci-img">
                ${item.image
                    ? `<img src="${item.image}" alt="${item.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="ci-emoji" style="display:none">${item.emoji}</div>`
                    : `<div class="ci-emoji">${item.emoji}</div>`}
            </div>
            <div class="ci-info">
                <div class="ci-name">${item.name}</div>
                <div class="ci-price">${inrFmt(item.price * item.qty)}</div>
                <div class="ci-qty">
                    <button onclick="updateQty('${item.id}','${item.type}',-1)"><i class="fas fa-minus"></i></button>
                    <span>${item.qty}</span>
                    <button onclick="updateQty('${item.id}','${item.type}',1)"><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <button class="ci-remove" onclick="removeFromCart('${item.id}','${item.type}')" title="Remove"><i class="fas fa-times"></i></button>
        </div>`).join('');

    const t = document.getElementById('cartTotal');
    if (t) t.textContent = inrFmt(cartTotal());
}

/* ---------- TOAST ---------- */
function cartToast(msg) {
    let t = document.getElementById('cartToast');
    if (!t) {
        t = document.createElement('div');
        t.id = 'cartToast';
        t.className = 'cart-toast';
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ---------- INJECT UI ---------- */
function initCart() {
    /* Cart icon button in navbar */
    const navToggle = document.getElementById('navToggle');
    if (navToggle) {
        const btn = document.createElement('button');
        btn.className = 'cart-nav-btn';
        btn.id = 'cartNavBtn';
        btn.title = 'View Cart';
        btn.innerHTML = `<i class="fas fa-shopping-cart"></i><span class="cart-badge" id="cartBadge" style="display:none">0</span>`;
        btn.addEventListener('click', openCartDrawer);
        navToggle.parentNode.insertBefore(btn, navToggle);
    }

    /* Drawer */
    const drawer = document.createElement('div');
    drawer.id = 'cartDrawer';
    drawer.className = 'cart-drawer';
    drawer.innerHTML = `
        <div class="cart-header">
            <span class="cart-title"><i class="fas fa-shopping-cart"></i> Your Cart</span>
            <button class="cart-close" id="cartClose"><i class="fas fa-times"></i></button>
        </div>
        <div class="cart-items" id="cartItemsList"></div>
        <div class="cart-footer" id="cartFooter" style="display:none">
            <div class="cart-subtotal">
                <span>Subtotal</span>
                <span class="cart-total-amt" id="cartTotal">&#8377;0</span>
            </div>
            <a href="checkout.html" class="btn-cart-checkout">
                <i class="fas fa-lock"></i> Proceed to Checkout
            </a>
            <button class="cart-clear-btn" onclick="clearCart()">Clear Cart</button>
        </div>`;
    document.body.appendChild(drawer);
    document.getElementById('cartClose').addEventListener('click', closeCartDrawer);

    /* Overlay */
    const overlay = document.createElement('div');
    overlay.id = 'cartOverlay';
    overlay.className = 'cart-overlay';
    overlay.addEventListener('click', closeCartDrawer);
    document.body.appendChild(overlay);

    renderCartItems();
    updateCartBadge();
}

document.addEventListener('DOMContentLoaded', initCart);
