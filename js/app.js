  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCxScSrwOf-DCU5BGDL3PkXypGuILi-SsM",
    authDomain: "qapp-e0257.firebaseapp.com",
    projectId: "qapp-e0257",
    storageBucket: "qapp-e0257.appspot.com",
    messagingSenderId: "102035228671",
    appId: "1:102035228671:web:0a4666db7d33abdde189ca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    firebase.auth.Auth.Persistence.LOCAL; 

    $("#btn-login").click(function(){
        
        var email = $("#email").val();
        var password = $("#password").val(); 

        var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });

    });

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });

    function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }