document.getElementById("close").addEventListener("click", cancelFunction);
document.getElementById("cancel").addEventListener("click", closeFunction);
document.getElementById("contactNav").addEventListener("click", openFunction);
document.getElementById("signUpOpen").addEventListener("click", signFunction);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function cancelFunction() {
    document.getElementById("contactForm").style.display = "none";
}

function closeFunction() {
    document.getElementById("signUpForm").style.display = "none";
}

function openFunction() {
    document.getElementById("contactForm").style.display = "block";
}

function signFunction() {
    document.getElementById("signUpForm").style.display = "block";
}

setTimeout(function () {
    document.getElementById("signUpForm").style.display = "block";
}, 4000);