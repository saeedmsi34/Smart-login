var inputnameSignup = document.getElementById("inputnameSignup")
var inputemailSignup = document.getElementById("inputemailSignup")
var inputpasswordSignup = document.getElementById("inputpasswordSignup")
var users = []
if (localStorage.getItem("usersList") == null) {
    users = []
} else {
    users = JSON.parse(localStorage.getItem("usersList"))
}
// function addUser(){
   
// }
function signUp() {
    userinputValidation()
    // isExist() 
    // && isExist() == false
    if (userinputValidation() == true    ) {
        var user =
        {
            nameSignup:inputnameSignup.value,
            emailSignup:inputemailSignup.value,
           passwordSignup:inputpasswordSignup.value,
    
        }
        users.push(user)
        localStorage.setItem("usersList", JSON.stringify(users))
        var confirmMsg = document.getElementById("confirmMsg")
        confirmMsg.classList.replace("d-none", "d-block") 
        var signin = document.getElementById("signin")
        signin.classList.replace("d-none", "d-block")
    }
    else {
        
        var tryAgainMsg = document.getElementById("tryagainMsg")
        tryAgainMsg.classList.replace("d-none", "d-block")

    }
}

function userinputValidation() {
    usernameValidation()
    useremailValidation()
    userpasswordValidation()
    if (usernameValidation() == true && useremailValidation() == true && userpasswordValidation() == true) {
        return true;
    } else {
        return false;
    }
}

function usernameValidation() {
    var nameAlert = document.getElementById("nameAlert")
    var regex = /^[A-Za-z]{5,10}(\s?[A-Za-z]{3,10})?$/
    if (regex.test(inputnameSignup.value) == true && inputnameSignup.value != "") {
        inputnameSignup.classList.add("is-valid")
        inputnameSignup.classList.remove("is-invalid")
        nameAlert.classList.replace("d-block", "d-none")
        return true

    } else {
        inputnameSignup.classList.add("is-invalid")
        inputnameSignup.classList.remove("is-valid")
        nameAlert.classList.replace("d-none", "d-block")
        return false

    }

}


function useremailValidation() {
    var emailAlert = document.getElementById("emailAlert")
    var regex = /@[a-z]{5,15}(\.com)$/;
    if (regex.test(inputemailSignup.value) == true && inputemailSignup.value != false) {
        inputemailSignup.classList.add("is-valid")
        inputemailSignup.classList.remove("is-invalid")
        emailAlert.classList.replace("d-block", "d-none")
        return true

    } else {
        inputemailSignup.classList.add("is-invalid")
        inputemailSignup.classList.remove("is-valid")
        emailAlert.classList.replace("d-none", "d-block")
        return false


    }
}

function userpasswordValidation() {
    var passwordAlert = document.getElementById("passwordAlert")
    var regex = /^.{5,15}$/;
    if (regex.test(inputpasswordSignup.value) == true && inputpasswordSignup.value != false) {
        inputpasswordSignup.classList.add("is-valid")
        inputpasswordSignup.classList.remove("is-invalid")
        passwordAlert.classList.replace("d-block", "d-none")
        return true

    } else {
        inputpasswordSignup.classList.add("is-invalid")
        inputpasswordSignup.classList.remove("is-valid")
        passwordAlert.classList.replace("d-none", "d-block")
        return false


    }
}

// لو في ميل او اسم بنفس اللي بيدخله اليوزر يعمل ايرور ويقوله فيه من قبل متسجل isExist

function isExist() {
    var accountexistMsg = document.getElementById("accountexistMsg")
    for (var i = 0; i < users.length; i++) {
        if (users[i].nameSignup.toLowerCase() == inputnameSignup.value.toLowerCase() ||
            users[i].emailSignup.toLowerCase() == inputemailSignup.value.toLowerCase()) {
            inputnameSignup.classList.remove("is-valid")
            inputemailSignup.classList.remove("is-valid")
            accountexistMsg.classList.replace("d-none", "d-block")
            return true;
        }
        else {
            // مفيش ايميل متسجل يجيب false
            return false;
        }
    }

}


var usernameWel = localStorage.getItem("userInfo")
// login
function login() {
    var fillMsg = document.getElementById("fillMsg")
    var loginEmail = document.getElementById("login-email")
    var loginPasswoed = document.getElementById("login-password")
    var loginBtn = document.getElementById("loginBtn")
    var wrongMsg = document.getElementById("wrongMsg")
    if (loginEmail.value == "" || loginPasswoed.value == "") {
        fillMsg.classList.replace("d-none", "d-block")
        return false;
    }
    for (i = 0; i < users.length; i++) {
        if (users[i].emailSignup.toLowerCase() ==loginEmail.value.toLowerCase()
            && users[i].passwordSignup.toLowerCase() ==loginPasswoed.value.toLowerCase()) {
            localStorage.setItem("userInfo", users[i].nameSignup)
            loginBtn.setAttribute("href" ,  "welcome.html")

        } else {
            wrongMsg.classList.replace("d-none", "d-block")

        }

    }

}




function displayWelcomeUser() {
    document.getElementById("username").innerHTML = "welcome " + usernameWel;

}

function logout() {
    localStorage.removeItem("sessionUserName")
}


