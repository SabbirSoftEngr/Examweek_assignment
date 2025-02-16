let cart = [];

function addToCart(id, name, price, image) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartContainer.innerHTML = "";
    let totalAmount = 0;
    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalAmount += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.quantity} x ${item.price.toFixed(2)} Taka</p>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, '-')">➖</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, '+')">➕</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="btn btn-sm btn-danger">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    cartCount.innerText = totalItems;
    cartTotal.innerText = totalAmount.toFixed(2);
}

function updateQuantity(id, action) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        if (action === '+' && cart[itemIndex].quantity < 10) {
            cart[itemIndex].quantity += 1;
        } else if (action === '-' && cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        }
    }
    updateCart();
}

