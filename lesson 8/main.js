const productList = document.getElementById('product-list')


const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);
    products.forEach((product)=>{
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        const productImage= document.createElement('img');
        productImage.src = product.image;
        const productName = document.createElement('span');
        productName.textContent = product.title;
        const productPrice = document.createElement('span');
        productPrice.textContent = `${product.price}$` ;
        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productList.appendChild(productItem);

    })

  }
getProducts();


