const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
function validator() {
    document.getElementById("submit").addEventListener("click", function (e) {
        e.preventDefault()
        validationInput()
    })
}
function validationInput() {
    let isValid = true
    let userName = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let password2 = document.getElementById("password2").value

    if (userName.trim() === "") {
        document.getElementById("username-errormsg").style.visibility = 'visible'
        document.getElementById("username-errormsg").textContent = "User Name is empty"
        isValid = false
    } else {
        document.getElementById("username-errormsg").style.visibility = 'hidden'
    }

    if (!validateEmail(email)) {
        document.getElementById("email-errormsg").style.visibility = 'visible'
        document.getElementById("email-errormsg").textContent = "Email is not invalid"
        isValid = false
    } else {
        document.getElementById("email-errormsg").style.visibility = 'hidden'
    }

    if (password.trim() === "") {
        document.getElementById("password-errormsg").style.visibility = 'visible'
        document.getElementById("password-errormsg").textContent = "Password is not invalid"
        isValid = false
    } else {
        document.getElementById("password-errormsg").style.visibility = 'hidden'
    }

    if (password2.trim() === "" ) {
        document.getElementById("password2-errormsg").style.visibility = 'visible'
        document.getElementById("password2-errormsg").textContent = "Enter password again"
        isValid = false
    } else {
        if (password.trim() !== password2.trim()) {
            isValid = false
            document.getElementById("password2-errormsg").style.visibility = 'visible'
            document.getElementById("password2-errormsg").textContent = "Password is not match"
        } else {
            document.getElementById("password2-errormsg").style.visibility = 'hidden'
        }
    }


    if (isValid) {
        alert("ok luoon")
    }


}
validator()