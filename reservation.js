const addButton = document.getElementById("add-fillet");
const ribeyeButton = document.getElementById("add-ribeye");
const newyorkButton = document.getElementById("add-newyork");
const tboneButton = document.getElementById("add-tbone");
const salamonButton = document.getElementById("add-salamon");
const lobsterButton = document.getElementById("add-lobster");
const scallopsButton = document.getElementById("add-scallops");
const prawnsButton = document.getElementById("add-prawns");
const cocktailButton = document.getElementById("add-cocktail");
const calamariButton = document.getElementById("add-calamari");
const primeribButton = document.getElementById("add-primerib");
const friesButton = document.getElementById("add-fries");
const cesarButton = document.getElementById("add-cesar");
const steaksaladButton = document.getElementById("add-steaksalad");
const spinachButton = document.getElementById("add-spinach");
const medButton = document.getElementById("add-med");
const sidesButton = document.getElementById("add-sides");
const cheesecakeButton = document.getElementById("add-cheesecake");
const lavaButton = document.getElementById("add-lava");
const cremeButton = document.getElementById("add-creme");
const tiramisuButton = document.getElementById("add-tiramisu");
const ordersList = document.getElementById("orders");
const price = document.getElementById("price");
let counter = 0;
let orderstring = "";
function addToCart(itemName) {
  const newItem = document.createElement("li");
  newItem.textContent = itemName;
  ordersList.appendChild(newItem);
  price.textContent = `Total Price is: ${counter.toFixed(2)} TRY.`
}

addButton.addEventListener("click", function() {
  counter += 599.80;
  orderstring+= `Fillet Mignon, `;
  addToCart("Fillet Mignon: 599.80TRY");
});

ribeyeButton.addEventListener("click", function() {
  counter += 639.80;
  orderstring+= `Ribeye, `;
  addToCart("Ribeye: 639.80TRY");
});

newyorkButton.addEventListener("click", function() {
  counter += 599.80;
  orderstring+= `New York Strip, `;
  addToCart("New York Strip: 599.80TRY");
});

tboneButton.addEventListener("click", function() {
  counter += 699.80;
  orderstring+= `T-Bone, `;
  addToCart("T-Bone: 699.80TRY");
});

salamonButton.addEventListener('click', function() {
  counter += 499.80;
  orderstring += 'Grilled Atlantic Salmon, ';
  addToCart('Grilled Atlantic Salmon: 499.80 TRY');
});

lobsterButton.addEventListener('click', function(){
  counter += 799.80;
  orderstring += 'Lobster Tail, ';    
  addToCart('Lobster Tail: 799.80 TRY');
});

scallopsButton.addEventListener('click', function(){
    counter += 539.80;
    orderstring += 'Jumbo Sea Scallops, ';  
    addToCart('Jumbo Sea Scallops: 539.80 TRY');
});

prawnsButton.addEventListener('click', function(){    
  counter += 579.80;
  orderstring += 'Grilled Jumbo Prawns, ';    
  addToCart('Grilled Jumbo Prawns: 579.80 TRY');
});

cocktailButton.addEventListener('click', function() {    
  counter += 259.80;
  orderstring += 'Classic Shrimp Cocktail, ';    
  addToCart('Classic Shrimp Cocktail: 259.80 TRY');
});

calamariButton.addEventListener('click', function() {    
  counter += 219.80;
  orderstring += 'Crispy Calamari, ';    
  addToCart('Crispy Calamari: 219.80 TRY');
});

primeribButton.addEventListener('click', function() {    
  counter += 239.80;
  orderstring += 'Prime Rib Sliders, ';    
  addToCart('Prime Rib Sliders: 239.80 TRY');
});
friesButton.addEventListener('click', function() {    
  counter += 179.80;
  orderstring += 'Truffle Parmesan Fries, ';
  addToCart('Truffle Parmesan Fries: 179.80 TRY');
});

cesarButton.addEventListener('click', function() {    
  counter += 199.80;
  orderstring += 'Caesar Salad, ';    
  addToCart('Caesar Salad: 199.80 TRY');
});

steaksaladButton.addEventListener('click', function() {    
  counter += 279.80;
  orderstring += 'Grilled Steak Salad, ';    
  addToCart('Grilled Steak Salad: 279.80 TRY');
});

spinachButton.addEventListener('click', function() {    
  counter += 239.80;
  orderstring += 'Spinach and Goat Cheese, ';
  addToCart('Spinach and Goat Cheese: 239.80 TRY');
});

medButton.addEventListener('click', function() {    
  counter += 209.80;
  orderstring += 'Mediterranean Salad, ';    
  addToCart('Mediterranean Salad: 209.80 TRY');
});

sidesButton.addEventListener('click', function() {    
  counter += 99.80;
  orderstring += 'sides, ';    
  addToCart('sides: 99.80 TRY');
});

cheesecakeButton.addEventListener('click', function() {    
  counter += 179.80;
  orderstring += 'New York Cheesecake, ';    
  addToCart('New York Cheesecake: 179.80 TRY');
});

lavaButton.addEventListener('click', function() {    
  counter += 199.80; 
  orderstring += 'Molten Chocolate Lava Cake, ';    
  addToCart('Molten Chocolate Lava Cake: 199.80 TRY');
});

cremeButton.addEventListener('click', function() {    
  counter += 159.80;
  orderstring += 'Crème Brûlée, ';    
  addToCart('Crème Brûlée: 159.80 TRY');
});

tiramisuButton.addEventListener('click', function() {    
  counter += 189.80;
  orderstring += 'Tiramisu, ';
  addToCart('Tiramisu: 189.80 TRY');
});

var reservationID = 0;
var state = "";
const reservationTableDB = firebase.database().ref('reservationTable');
const statusButton = document.getElementById("restatus");
document.getElementById('reserv').addEventListener('submit', reservForm);

function reservForm(e) {
  e.preventDefault();

  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;

  saveReservation(date, time);

  if (date !== undefined && time !== undefined && orderstring !== '') {
    document.getElementById("green").style.display = "block";
    setTimeout(() => {
      document.getElementById("green").style.display = "none";
      document.getElementById("green").style.transition = "all 0.3s ease-in-out";
    }, 3000);
    window.location.href = './checkout.html';
  } else {
    document.getElementById("red").style.display = "block";
    setTimeout(() => {
      document.getElementById("red").style.display = "none";
      document.getElementById("red").style.transition = "all 0.3s ease-in-out";
    }, 3000);
  }

  document.getElementById("reserv").reset();
}

const saveReservation = (date, time) => {
  var newreservForm = reservationTableDB.push();
  var newreservationID = ++reservationID;
  newreservForm.set({
    id: newreservationID,
    date: date,
    time: time,
    orders: orderstring,
    state: "pending",
  });
};