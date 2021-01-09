// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

//Implement a cart feature:
// 1. Add items to cart.
function addItemsToCart(arrayItems) {
  arrayItems.forEach(item => {
    user.cart.push((item + tax(item)));
  });
}

// 2. Add 3% tax to item in cart
function tax(item) {
  return item * .03;
}

// 3. Buy item: cart --> purchases
// Assumption they give the x item in cart, so x - 1 for cart index
function buyItem(element) {
  if(element <= 0) {
    return 'Invalid number provided for cart'
  }
  else if (element > user.cart.length) {
    return 'Number provided greater than number of items in cart.'
  }
  else {
    user.purchases.push(user.cart[element-1]);
    user.cart.splice(element-1, 1);
  }
}

// 4. Empty cart
function emptyCart() {
  user.purchases = [];
}

//Bonus:
// accept refunds.
// Track user history.
