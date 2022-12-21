/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Sandeep Singh
 *      Student ID: 162054217
 *      Date:       30 November 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;
const displayItems = document.querySelector(".display-items");
const navbar = document.querySelector("#menu");

// Load items
window.addEventListener("DOMContentLoaded", function () {
  // Everything set to 'Apple' by default
  document.getElementById("selected-category").textContent = "Apple";
  displayProductItems(
    products.filter(function (product) {
      if (product.categories.includes("APP-iOS")) {
        return product;
      }
    })
  );

  displayMenuButtons();
});

// Displays all the products in form of cards
function displayProductItems(productItems) {
  // eslint-disable-next-line

  let displayProducts = productItems.map(function (product) {
    if (product.discontinued === false) {
      return createProductCard(product);
    }
  });
  displayProducts = displayProducts.join("");

  displayItems.innerHTML = displayProducts;
}

// Creates a product card
function createProductCard(product) {
  return `<div class="card">
    <img src="${product.imageUrl}" alt="Product-Image">
    <div class="card-info">
    <header>
      <h4>${product.title}</h4>
      <h5 class="price">CAD${(product.price / 100).toLocaleString("en-CA", {
        currency: "CAD",
        style: "currency"
      })}</h5>
    </header>
    <p class="desc">${product.description}</p>
    </div>
  </div>`;
}

// Displays all the menu buttons and changes the heading according to it
function displayMenuButtons() {
  // Creating the navbar dynamically
  const cats = categories
    .map(function (item) {
      return `<button data-id="${item.name}" class="filter-btn" type="button">${item.name}</button>`;
    })
    .join("");

  navbar.innerHTML = cats;
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Filter Items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      let category = e.currentTarget.dataset.id;
      document.getElementById("selected-category").textContent = e.currentTarget.dataset.id;

      // Converting human readable to category codes
      if (category === "Apple") {
        category = "APP-iOS";
      } else if (category === "Samsung") {
        category = "SAM-aOS";
      } else if (category === "Google") {
        category = "GOOGLE-aOS";
      }

      const productCategory = products.filter(function (item) {
        if (item.categories.includes(category)) {
          return item;
        }
      });
      displayProductItems(productCategory);
    });
  });
}
