// Product data
const products = [
  { id: 1, name: "Blue T-shirt", price: 15.99, img: "https://via.placeholder.com/300x200?text=Blue+T-shirt" },
  { id: 2, name: "Red Hoodie", price: 29.99, img: "https://via.placeholder.com/300x200?text=Red+Hoodie" },
  { id: 3, name: "Coffee Mug", price: 9.99, img: "https://via.placeholder.com/300x200?text=Coffee+Mug" }
];

// DOM elements
const productContainer = document.getElementById("products");
const yearSpan = document.getElementById("year");

// Render products
function renderProducts() {
  productContainer.innerHTML = products.map(p => `
    <div class="card">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="card-content">
        <h3>${p.name}</h3>
        <p class="price">$${p.price.toFixed(2)}</p>
      </div>
    </div>
  `).join("");
}

// Set footer year
yearSpan.textContent = new Date().getFullYear();

// Init
renderProducts();
