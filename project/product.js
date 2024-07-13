let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    total += price;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - ${item.price} PokéCoins`;
        cartItems.appendChild(li);
    });
    document.getElementById('totalPrice').textContent = total;
}
