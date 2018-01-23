$(document).ready(function() {
/*inicializando*/
var config = {
   apiKey: "AIzaSyBBqvGqPm9li3jARUpeE827NSeIcqBonJw",
   authDomain: "fir-2e890.firebaseapp.com",
   databaseURL: "https://fir-2e890.firebaseio.com",
   projectId: "fir-2e890",
   storageBucket: "fir-2e890.appspot.com",
   messagingSenderId: "124430309638"
 };
 firebase.initializeApp(config);

 var provider = new firebase.auth.GoogleAuthProvider();

 $('#button-google').on('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    });
  });
  firebase.auth().onAuthStateChanged(function(user) {
    // si el usuario esta activo
    if (user) {
      console.log('logeado');
    } else {
      console.log('usuario no logeado');
    }
  });
});
