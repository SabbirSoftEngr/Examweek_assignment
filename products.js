function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            console.log("Fetched Data:", data); // Debugging log
            displayProducts(data);
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Call Function to Fetch Products
fetchProducts();


function displayProducts(products) {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-lg-2", "col-md-3", "col-sm-6", "mb-4"); // 6 per row
        productCard.innerHTML = `
            <div class="card h-100 text-center shadow-sm">
                <img src="${product.image}" class="card-img-top p-3" alt="${product.title}">
                <div class="card-body">
                    <h6 class="card-title">${product.title.substring(0, 20)}...</h6>
                    <p class="card-text">${product.description.substring(0, 50)}...</p>
                    <p><strong>${(product.price * 120).toFixed(2)} Taka</strong></p>
                    <button onclick="addToCart(${product.id}, '${product.title}', ${product.price * 120}, '${product.image}')" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}


