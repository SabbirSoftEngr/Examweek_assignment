function toggleCart() {
    let cartOverlay = document.getElementById("cart-overlay");
    if (!cartOverlay) {
        console.error("❌ Error: Cart overlay not found!");
        return;
    }
    cartOverlay.classList.toggle("open");
}
