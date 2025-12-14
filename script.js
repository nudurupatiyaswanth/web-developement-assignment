const pages = document.querySelectorAll('.page');
let cart = [];

function showPage(id) {
  pages.forEach(p => p.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  if (id === 'cart') loadCart();
}

function login() {
  alert('Login Successful');
  showPage('home');
}

function registerMember() {
  alert('Registration Successful');
  showPage('home');
}

function addToCart(book, price) {
  cart.push({ book, price });
  alert(book + ' added to cart');
}

function loadCart() {
  let table = document.getElementById('cartTable');
  table.innerHTML = '<tr><th>Book</th><th>Price</th></tr>';
  let total = 0;

  cart.forEach(item => {
    table.innerHTML += `<tr><td>${item.book}</td><td>$${item.price}</td></tr>`;
    total += item.price;
  });

  document.getElementById('total').innerText = 'Total: $' + total;
}
