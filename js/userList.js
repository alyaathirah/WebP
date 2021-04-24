
var user = ["alya", "mirul", "hanani", "mira", "nurul", "kina", "marie"];

var userPass = ["alya", "mirul", "hanani", "mira", "nurul", "kina", "marie"];

var admin = ["admin", "superadmin"];

var adminPass = ["admin", "superadmin"];

function Login(){
    var email = $("#email").val();
    var password = $("#pass").val();  

    //for admins only
    for(i=0; i<admin.length; i++){
        if(email == admin[i])
            if(password == adminPass[i]){
                location.assign("homepage.html");//go to homepage admin
                return;
            }
    }

    //for users only
    for(i=0; i<user.length; i++){
        if(email == user[i])
            if(password == userPass[i]){
                location.assign("homepage.html");//go to homepage user
                return;
            }
    }
    
}

function SignUp(){
    
}