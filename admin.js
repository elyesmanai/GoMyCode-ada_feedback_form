// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8SdxstCFLtxJpPOFRdJh4gTgjhY-iVR0",
    authDomain: "gomycode-1000-coders-ma7lehom.firebaseapp.com",
    databaseURL: "https://gomycode-1000-coders-ma7lehom.firebaseio.com",
    projectId: "gomycode-1000-coders-ma7lehom",
    storageBucket: "gomycode-1000-coders-ma7lehom.appspot.com",
    messagingSenderId: "800448132496"
  };
  firebase.initializeApp(config);

var feedbacks = firebase.database().ref('feedbacks');
setInterval(jibli,100)

function jibli(){
		$("#feedbacks").html("");
		feedbacks.once('value').then(function(snapshot){
			snapshot.forEach(afra7bih);
		}).then(function(){
			 $('#myTable').DataTable();
		})

}

function afra7bih(singlesnapshot){
	var feedback = singlesnapshot.val();
	$("#feedbacks").append("<tr><td>"+feedback.student+"</td><td>"+feedback.slide+"</td><td>"+feedback.msata+"</td><td>"+feedback.track+"</td></tr>")

}