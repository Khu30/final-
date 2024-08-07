// //
const firebaseConfig = {
  apiKey: "AIzaSyBVHDva0972e85i1cVLr-LDyDaJhpIRz-M",
  authDomain: "login-and-sign-in-6c629.firebaseapp.com",
  databaseURL: "https://login-and-sign-in-6c629-default-rtdb.firebaseio.com",
  projectId: "login-and-sign-in-6c629",
  storageBucket: "login-and-sign-in-6c629.appspot.com",
  messagingSenderId: "609204425026",
  appId: "1:609204425026:web:8055826bad56bd900678db",
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
let database = firebase.database();

let form = document.querySelector("#registration-form");

// submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonepattern = /^[0-9]+$/;

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let gender = document.getElementById("gender").value;
  let language = document.getElementById("language").value;
  let country = document.getElementById("country").value;
  let state = document.getElementById("state").value;
  let zipcode = document.getElementById("zipcode").value;
  let about = document.getElementById("about").value;
  let work = document.getElementById("work").checked;
  let student = document.getElementById("student").checked;

  // function validateMobileNumber(phone) {
  //     let mobileRegex = /^[0-9]+$/;
  //     return mobileRegex.test(phone);
  // }
  //
  // if (!validateMobileNumber(phone)) {
  //     document.getElementById('mobileError').textContent = 'Please enter a valid phone number';
  //     return;
  // }
  //
  // function validateEmail(email) {
  //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     return emailPattern.test(phone);
  // }
  //
  // if (!validateEmail(email)) {
  //     document.getElementById('emailError').textContent = 'Please enter a valid EMail address';
  //     return;
  // }

  if (
    emailPattern.test(email) &&
    document.getElementById("password").value.length >= 8 &&
    phonepattern.test(phone)
  ) {
    console.log("Valid email:");
    let formData = {
      name: name,
      phone: phone,
      email: email,
      password: password,
      gender: gender,
      language:language,
      country:country,
      state:state,
      zipcode:zipcode,
      about:about,
      work: work,
      student: student,
    };
  }
});