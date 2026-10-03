let quantity = 0;

let addButton = document.getElementById("addButton");
let plusButton = document.getElementById("plusButton");
let minusButton = document.getElementById("minusButton");

addButton.addEventListener("click", function () {
  quantity = quantity + 1;

  addButton.innerHTML = "Cart: " + quantity;
});

plusButton.addEventListener("click", function () {
  quantity = quantity + 1;

  addButton.innerHTML = "Cart: " + quantity;
});

minusButton.addEventListener("click", function () {
  if (quantity > 0) {
    quantity = quantity - 1;

    addButton.innerHTML = "Cart: " + quantity;
  }
});
