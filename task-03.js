/**
 * პირობა იხილეთ HTML ფაილში
 */
const products = [
    {
      id: 1,
      name: "LG OLED TV",
      description: "65-inch OLED 4K Smart TV",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 2,
      name: "Sonos Arc",
      description: "Premium Smart Soundbar",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 3,
      name: "Dyson V15 Detect",
      description: "Cordless Vacuum Cleaner",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 4,
      name: "Instant Pot Duo",
      description: "7-in-1 Electric Pressure Cooker",
      image: "https://fakeimg.pl/150x150",
    },
  ];


  const toggleButton = document.getElementById("toggleButton");
const productList = document.getElementById("productList");

let isVisible = false;

toggleButton.addEventListener("click", () => {
  if (!isVisible) {
    renderProducts();
    toggleButton.textContent = "Hide Products";
  } else {
    productList.innerHTML = "";
    toggleButton.textContent = "Show Products";
  }
  isVisible = !isVisible;
});

function renderProducts() {
  productList.innerHTML = products.map(product => `
    <div class="card">
      <div class="card-header">
        <div class="product-info">
          <div class="avatar">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="product-name">
            <h3>${product.name}</h3>
            <p class="product-info">${product.description}</p>
          </div>
        </div>
      </div>
      <div class="card-content">
        <p class="product-id">Product ID: ${product.id}</p>
      </div>
    </div>
  `).join("");
}

