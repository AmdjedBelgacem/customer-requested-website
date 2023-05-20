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

document.querySelector('.login-form').addEventListener('submit', loginForm);

function loginForm(e) {
  e.preventDefault();

  const email = getElementVal('email');
  const password = getElementVal('password');

  authenticateUser(email, password);
}

function authenticateUser(email, password) {
  const userTableDB = firebase.database().ref('usersTable');

  userTableDB.once('value', (snapshot) => {
    const users = snapshot.val();

    // Loop through all users in the usersTable node
    for (const userId in users) {
      const user = users[userId];

      if (user.email === email && user.password === password) {
        // Update the state field to "active"
        const updateUser = userTableDB.child(userId);
        updateUser.update({ state: 'active' });

        // Authentication successful, redirect to home.html
        window.location.href = 'home.html';
        return; // Exit the function after successful authentication
      }
    }

    // Authentication failed, display error message
    document.getElementById("login-status").style.display = "block";
    setTimeout(()=>{
      document.getElementById("login-status").style.display = "none";
      document.getElementById("login-status").style.transition = "all 0.3s ease-in-out";
    }, 3000);
    document.getElementById("login-form").reset();
  });
}

const getElementVal = (id) => {
  return document.querySelector(`[name=${id}]`).value;
};