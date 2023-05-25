const hamburger = document.querySelector(".hamburger-menu");
const menuItems = document.querySelector(".menu-items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuItems.classList.toggle("active");
});

const userIcon = document.getElementById('user-icon');
const userInfo = document.querySelector('.user-info .info');
const userName = document.getElementById('user-name');
const userNameLaptop = document.getElementById('user-name-laptop');
const dateTime = document.getElementById('date-time');
const lapDateTime = document.getElementById('laptop-date-time');
const logoutButton = document.getElementById('logout-button');

function getCurrentDateTime() {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  return now.toLocaleString('en-US', options);
}

function updateUserInfo(firstname, lastname) {
  userName.textContent = firstname + ' ' + lastname;
  userNameLaptop.textContent = firstname + ' ' + lastname;
  dateTime.textContent = getCurrentDateTime();
  lapDateTime.textContent = getCurrentDateTime();
}

setInterval(() => {
  dateTime.textContent = getCurrentDateTime();
  lapDateTime.textContent = getCurrentDateTime();
}, 1000);

userIcon.addEventListener('click', () => {
  userInfo.classList.toggle('visible');
});

logoutButton.addEventListener('click', () => {
  alert('Logged out successfully!');
});

const firebaseConfig = {
  apiKey: "AIzaSyCYBZb5OjXixzYT0ZHAPtPRORUnf7r5FT8",
  authDomain: "lastsummer-35f2f.firebaseapp.com",
  databaseURL: "https://lastsummer-35f2f-default-rtdb.firebaseio.com",
  projectId: "lastsummer-35f2f",
  storageBucket: "lastsummer-35f2f.appspot.com",
  messagingSenderId: "281508440300",
  appId: "1:281508440300:web:ef225293ce81d3c014ddc9"
};

firebase.initializeApp(firebaseConfig);

const reservationTableDB = firebase.database().ref('reservationTable');
const paymentTableDB = firebase.database().ref('paymentTable');
let paymentID = 0;
let fullName = "";
let datetimeres = "";
let reservationID = ""; 

reservationTableDB.once('value', (snapshot) => {
  const reservations = snapshot.val();

  for (const resapt in reservations) {
    const resapi = reservations[resapt];

    if (resapi.state === 'pending') {
      datetimeres = `${resapi.date} ${resapi.time}`;
      reservationID = resapt; 
    }
  }
});


document.getElementById('paymentform').addEventListener('submit', paymentForm);

function paymentForm(e) {
  e.preventDefault();

  const cardHolder = getElementVal('cardHolder');
  const cardID = getElementVal('cardID');
  const expireDate = getElementVal('expireDate');
  const cvv = getElementVal('cvv');

  if (cardID.length == 16 && isValidExpireDate(expireDate) && cvv.length === 3) {
    userPayment(cardHolder, cardID, expireDate, cvv);
    var successMessage = document.createElement('p');
    successMessage.textContent = `Glad to have you at ${datetimeres}`;
    document.getElementById('paid').appendChild(successMessage);
    
    updateReservationID(reservationID, paymentID);
    updateReservationState(reservationID); 
  } else {
    alert("Something is wrong");
  }
}

const updateReservationID = (reservationID, paymentID) => {
  const reservationRef = reservationTableDB.child(reservationID);
  reservationRef.update({ id: paymentID });
};

const isValidExpireDate = (expireDate) => {
  const dateRegex = /^(0[1-9]|1[0-2])\/(2[4-9]|[3-9][0-9])$/;
  return dateRegex.test(expireDate);
};

const userPayment = (cardHolder, cardID, expireDate, cvv) => {
  const newPaymentForm = paymentTableDB.push();
  const newPaymentID = ++paymentID;
  newPaymentForm.set({
    id: newPaymentID,
    reservationOwner: fullName,
    cardHolder,
    cardID,
    expireDate,
    cvv,
    state: 'confirmed'
  });
};

function getElementVal(elementId) {
  return document.getElementById(elementId).value;
}
