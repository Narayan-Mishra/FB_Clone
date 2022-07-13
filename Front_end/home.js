function myFun() {

    var user = document.getElementById("User_Name").value

    var pass = document.getElementById("Password").value

    if (user == "") {
        document.getElementById("Message").innerText = "** Please enter your username"
        return false
    }

    else if (user.length < 8) {
        document.getElementById("Message").innerText = "** Please enter a valid username"
        return false
    }

    else if (user === "Narayan.mishra@athenalogics.com" && pass == "9636305777") {
        window.location.href = "welcome.html"
        return false
    }

    else if (pass == "") {
        document.getElementById("Message2").innerText = "** Please enter your Password"
        return false
    }

    else if (pass.length < 8) {
        document.getElementById("Message2").innerText = "** Password should be b/w 8-20 Characters"
        return false
    }

    else if (pass.length > 30) {
        document.getElementById("Message2").innerText = "** Password should be b/w 8-20 Characters"
        return false
    }




}


