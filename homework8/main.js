let products = [];
const productList = document.getElementById('product-list')

const getProducts = async () => {
  const response = await fetch(
    "https://651ecb0544a3a8aa47690471.mockapi.io/products"
  );
  products = await response.json();
  console.log(products);
  products.forEach((product) => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    const productImage = document.createElement('img');
    productImage.src = product.image;
    const productName = document.createElement('span');
    productName.textContent = product.name;
    const productPrice = document.createElement('span');
    productPrice.textContent = `${product.price}$`;
    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productList.appendChild(productItem);
  })

}


getProducts()

const nameElm = document.getElementById('name')
const priceElm = document.getElementById('price')
const quantityElm = document.getElementById('quantity')
const btn = document.getElementById('btn')
const addProduct = async () => {
  const newProductRequest = {
    name: nameElm.value,
    price: Number(priceElm.value),
    quantity: Number(quantityElm.value),
  };
  const response = await fetch(
    "https://651456bb8e505cebc2eb2685.mockapi.io/products",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProductRequest),
    }
  );
  const newProduct = await response.json();
  products = [...products, newProduct];
  displayProducts();
};
btn.addEventListener('click', addProduct);
displayProducts();