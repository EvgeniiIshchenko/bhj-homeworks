"use strict";

const productQuantityControlInc = document.querySelectorAll(
  ".product__quantity-control_inc"
);
const productQuantityControlDec = document.querySelectorAll(
  ".product__quantity-control_dec"
);
const productQuantityValue = document.querySelectorAll(
  ".product__quantity-value"
);
const product = document.querySelectorAll(".product");
const productAdd = document.querySelectorAll(".product__add");
const cartProducts = document.querySelector(".cart__products");
const productImage = document.querySelectorAll(".product__image");

product.forEach((item, i) => {
  productQuantityControlInc[i].addEventListener("click", () => {
    productQuantityValue[i].textContent++;
  });

  productQuantityControlDec[i].addEventListener("click", () => {
    if (productQuantityValue[i].textContent <= 0) {
      return;
    }
    productQuantityValue[i].textContent--;
  });

  productAdd[i].addEventListener("click", () => {
    if (productQuantityValue[i].textContent <= 0) {
      return;
    }

    const cartProduct = document.createElement("div");
    const cartProductImahe = document.createElement("img");
    const cartProductCount = document.createElement("div");
    cartProduct.classList.add("cart__product");
    cartProductImahe.classList.add("cart__product-image");
    cartProductCount.classList.add("cart__product-count");

    cartProduct.dataset.id = item.dataset.id;
    cartProductImahe.src = productImage[i].src;
    cartProductCount.textContent = productQuantityValue[i].textContent;

    const array = [...cartProducts.querySelectorAll(".cart__product")];
    const exist = array.find((prod) => prod.dataset.id == item.dataset.id);

    if (exist) {
      const newCount =
        Number(productQuantityValue[i].textContent) +
        Number(exist.querySelector(".cart__product-count").textContent);
      exist.querySelector(".cart__product-count").textContent = newCount;
    } else {
      cartProduct.appendChild(cartProductImahe);
      cartProduct.appendChild(cartProductCount);
      cartProducts.appendChild(cartProduct);
    }
  });
});
