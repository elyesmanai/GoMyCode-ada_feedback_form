// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPskdlhvtKEBFCzc_S8nDNiyAz_uDbDfA",
    authDomain: "enda-aman.firebaseapp.com",
    databaseURL: "https://enda-aman.firebaseio.com",
    projectId: "enda-aman",
    storageBucket: "enda-aman.appspot.com",
    messagingSenderId: "1008478550824"
  };
  firebase.initializeApp(config);

  document.getElementById('contactform').addEventListener("submit", submitForm);

  function submitForm(e){
      e.preventDefault();

      var name = getValue('name');
      var slide = getValue('slide');
      var message = getValue('message');

      saveMessage(name,slide,message);

      document.getElementById('contactform').reset();
      document.getElementById('alert').style.display = "inline-block";
  }


function getValue(id){
   return document.getElementById(id).value;
}

// Reference messages collection
  var messagesRef = firebase.database().ref('messages');

function saveMessage(contact_name,contact_slide,contact_message){
   var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name   : contact_name,
        slide  : contact_slide,
        message: contact_message,
        state: 0
      });
}
