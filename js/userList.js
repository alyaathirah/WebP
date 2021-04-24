var email = document.getElementsByName("email");
var password = document.getElementsByName("password");

var user = [alya, mirul, hanani, mira, nurul, kina, marie]

var userPass = [alya, mirul, hanani, mira, nurul, kina, marie]

var admin = [admin, superadmin]

var adminPass = [admin, superadmin]

async function Login(email, password){
    for(i=0; i<admin.length; i++){
        if(email == admin[i])
            if(password = adminPass[i])
                window.location.href("homepage.html")
    }
}

function SignUp(){
    
}