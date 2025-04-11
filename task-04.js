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
    {
      id: 5,
      name: "Bose Noise Cancelling Headphones 700",
      description: "Over-ear wireless headphones",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 6,
      name: "Samsung Smart Refrigerator",
      description: "Family Hub Refrigerator with touchscreen display",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 7,
      name: "Roomba i7+",
      description: "Robot Vacuum with Automatic Dirt Disposal",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 8,
      name: "Ninja Foodi Grill",
      description: "Indoor Grill and Air Fryer",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 9,
      name: "Apple HomePod",
      description: "Smart speaker with Siri",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 10,
      name: "Breville Barista Express",
      description: "Espresso Machine",
      image: "https://fakeimg.pl/150x150",
    },
  ];
const searchInput = document.getElementById("search");

const productList = document.getElementById("productList");

function renderProducts(data) {
  productList.innerHTML = data.map(product => `
    <div class="card">
      <div class="card-header">
        <div class="user-info">
          <div class="avatar">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="user-details">
            <h3>${product.name}</h3>
            <p class="user-email">${product.description}</p>
          </div>
        </div>
      </div>
      <div class="card-content">
        <p class="user-id">Product ID: ${product.id}</p>
      </div>
    </div>
  `).join("");
}


renderProducts(products);


searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(keyword)
  );
  renderProducts(filtered);
});