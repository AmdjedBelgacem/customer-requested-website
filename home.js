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

var minusBtns = document.querySelectorAll('.minus-btn');
var plusBtns = document.querySelectorAll('.plus-btn');
minusBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var input = this.nextElementSibling;
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
    }
  });
});
plusBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var input = this.previousElementSibling;
    var value = parseInt(input.value);
    if (value < 10) {
      input.value = value + 1;
    }
  });
});
function smoothScroll(event) {
  event.preventDefault();
  
  const targetId = event.target.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

/*Database*/
var form = document.querySelector('.signup-form');

        // Add form submit event listener
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Get form input values
            var firstname = form.firstname.value;
            var lastname = form.lastname.value;
            var phonenumber = form.phonenumber.value;
            var email = form.email.value;
            var password = form.password.value;

            // Create an object with the form data
            var formData = {
                firstname: firstname,
                lastname: lastname,
                phonenumber: phonenumber,
                email: email,
                password: password
            };

            // Store form data in localStorage
            localStorage.setItem('formData', JSON.stringify(formData));

            // Display a success message or redirect to another page
            alert('Form data stored successfully!');
        });

        // Retrieve the stored form data from localStorage
        var storedData = localStorage.getItem('formData');

        // Check if any data is stored
        if (storedData) {
            // Parse the JSON string back into an object
            var formData = JSON.parse(storedData);

            // Display the form data in the console
            console.log(formData);
        } else {
            console.log('No data found in localStorage.');
        }