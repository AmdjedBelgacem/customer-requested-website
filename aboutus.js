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

const userTableDB = firebase.database().ref('usersTable');

userTableDB.once('value', (snapshot) => {
  const users = snapshot.val();

  for (const userId in users) {
    const user = users[userId];

    if (user.state === 'active') {
      updateUserInfo(user.firstname, user.lastname);
    }
  }
});


function logoutUser() {
  userTableDB.once('value', (snapshot) => {
    const users = snapshot.val();

    for (const userId in users) {
      const user = users[userId];

      if (user.state === 'active') {
        userTableDB.child(userId).update({ state: '' });
      }
    }
  });
  alert('Logged out successfully!');
}

logoutButton.addEventListener('click', logoutUser); 
