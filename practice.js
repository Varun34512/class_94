
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDkUO-8I_ZVhPUTV1GmCQvWEkFXxHvhkWY",
    authDomain: "kwitter-9c2c2.firebaseapp.com",
    databaseURL: "https://kwitter-9c2c2-default-rtdb.firebaseio.com",
    projectId: "kwitter-9c2c2",
    storageBucket: "kwitter-9c2c2.appspot.com",
    messagingSenderId: "145352224925",
    appId: "1:145352224925:web:367ec56ff9205d4c8d2474"
  };
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("user_name").value ;
      firebase.database().ref("/").child(user_name).update({
          purpose : "add user",
          lang : "javascript"
      }) ;
  }