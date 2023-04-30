const hamburger = document.querySelector(".hamburger-menu");
const menuItems = document.querySelector(".menu-items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuItems.classList.toggle("active");
});


const userIcon = document.getElementById('user-icon');
const userInfo = document.querySelector('.user-info .info');
const userName = document.getElementById('user-name');
const dateTime = document.getElementById('date-time');
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

function updateUserInfo() {
  userName.textContent = 'John Doe'; 
  dateTime.textContent = getCurrentDateTime();
}

setInterval(() => {
  dateTime.textContent = getCurrentDateTime();
}, 1000);

userIcon.addEventListener('click', () => {
  userInfo.classList.toggle('visible');
});

logoutButton.addEventListener('click', () => {
  alert('Logged out successfully!');
});
