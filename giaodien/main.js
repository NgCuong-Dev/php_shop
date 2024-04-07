fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const productList = document.getElementById("productList");
    data.products.forEach((product) => {
      //tao cac phan tu html
      const div = document.createElement("div");
      const productName = document.createElement("h1");
      const productImages = document.createElement("img");
      const productPrice = document.createElement("span");

      //them phan tu
      //   console.log(product);
      productName.textContent = product.name;
      productImages.src = product.images;
      productPrice.textContent = `Price: $${product.price}`;
    });
    // Thêm các phần tử vào div chứa danh sách sản phẩm
    div.appendChild(productName);
    div.appendChild(productPrice);
    div.appendChild(productImage);
    // Thêm div chứa sản phẩm vào danh sách sản phẩm
    productList.appendChild(div);
  })
  .catch((error) => console.error("Error fetching JSON:", error));
