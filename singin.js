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
  var userId = 0;
  var state ="";
  var userTableDB = firebase.database().ref('usersTable')
  
  document.getElementById('signup-form').addEventListener('submit', signupForm);
  
  function signupForm(e) {
    e.preventDefault();
  
    var firstname = getElementVal('firstname');
    var lastname = getElementVal('lastname');
    var phonenumber = getElementVal('phonenumber');
    var email = getElementVal('email');
    var password = getElementVal('password');
  
    saveUser(firstname, lastname, phonenumber, email, password);
    document.getElementById("signin-status").style.display = "block";
    setTimeout(()=>{
      document.getElementById("signin-status").style.display = "none";
      document.getElementById("signin-status").style.transition = "all 0.3s ease-in-out";
    }, 3000);
    document.getElementById("signup-form").reset();
  }
  
  const saveUser = (firstname, lastname, phonenumber, email, password) => {
    var newUserForm = userTableDB.push();
    var newUserId = ++userId; 
    newUserForm.set({
      id: newUserId,
      firstname: firstname,
      lastname: lastname,
      phonenumber: phonenumber,
      email: email,
      password: password,
      state: state
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };