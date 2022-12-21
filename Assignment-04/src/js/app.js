/**
 * WEB222 – Assignment 04
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
 *      Date:       24 November 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.

const { products, categories } = window;

// Here, we create arrays of descriptions for Apple, Samsung and Google Phones respectively
let AppleArr = [];
let SamsungArr = [];
let GoogleArr = [];

for (let i = 0; i < products.length; i++) {
  products[i].categories.forEach(function (element) {
    if (element === "APP-iOS" && products[i].discontinued === false) {
      AppleArr.push(products[i].description);
    } else if (element === "SAM-aOS" && products[i].discontinued === false) {
      SamsungArr.push(products[i].description);
    } else if (element === "GOOGLE-aOS" && products[i].discontinued === false) {
      GoogleArr.push(products[i].description);
    }
  });
}

// Creating the navbar dynamically
let menu = document.getElementById("menu");
for (let i = 0; i < categories.length; i++) {
  let newMenuItem = document.createElement("button");
  newMenuItem.textContent = categories[i].name;
  newMenuItem.id = categories[i].name;
  menu.appendChild(newMenuItem);
}

// Prints the description of product
function descriptionPrinter(category) {
  // Whenever the user clicks on an element, the program prints the description of the product to the console
  let tableRows = document.getElementsByClassName("tbl-row");

  // Using the length as per the category and printing description
  if (category === "APP-iOS") {
    for (let i = 0; i < AppleArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(AppleArr[i]);
      });
    }
  } else if (category === "SAM-aOS") {
    for (let i = 0; i < SamsungArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(SamsungArr[i]);
      });
    }
  } else if (category === "GOOGLE-aOS") {
    for (let i = 0; i < GoogleArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(GoogleArr[i]);
      });
    }
  }
}

// Creates all the cells for a particular category
function createCells(category) {
  // Fetching the tbody element
  var tbodyRef = document.getElementById("categoryProducts");
  var newRow, newCell, newText;

  // Iterating through the products and creating rows
  for (let i = 0; i < products.length; i++) {
    // creates a table row
    document.createElement("tr");

    // Iterating over array
    products[i].categories.forEach(function (element) {
      if (element === category && products[i].discontinued === false) {
        newRow = tbodyRef.insertRow();
        newRow.className = "tbl-row";

        newCell = newRow.insertCell();
        // Append a text node to the cell
        newText = document.createTextNode(products[i].title);
        newCell.appendChild(newText);

        // Insert a cell at the end of the row
        newCell = newRow.insertCell();
        newCell.id = i;
        newText = document.createTextNode(products[i].description);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        // Append a text node to the cell
        newText = document.createTextNode(
          (products[i].price / 100).toLocaleString("en-CA", { currency: "CAD", style: "currency" })
        );
        newCell.appendChild(newText);
      }
    });
  }
}

// Display Apple iPhones by default
document.getElementById("categoryProducts").innerHTML = "";
document.getElementById("selected-category").textContent = "Apple";
createCells("APP-iOS");

// Function that shows a product list on the basis of the category they belong to
function showProductList(category) {
  document.getElementById("categoryProducts").innerHTML = "";

  // Changing the human readable names to IDs
  for (let k = 0; k < categories.length; k++) {
    if (categories[k].name === category) {
      category = categories[k].id;
    }
  }

  // Creating cells for categories
  createCells(category);
  descriptionPrinter(category);
}

// Change the heading and show product list
let menuArr = document.querySelector("#menu").querySelectorAll("button");
for (let i = 0; i < menuArr.length; i++) {
  menuArr[i].addEventListener("click", function () {
    document.getElementById("selected-category").innerHTML = menuArr[i].textContent;
    showProductList(menuArr[i].textContent);
  });
}

// As the default category is Apple, we call the function by passing 'Apple' as the category
descriptionPrinter("APP-iOS");
