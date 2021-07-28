function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
document.getElementById("cancel").addEventListener("click", closeFunction);
document.getElementById("contactNav").addEventListener("click", openFunction);


function closeFunction() {
    document.getElementById("contactForm").style.display = "none";
}


function openFunction() {
    document.getElementById("contactForm").style.display = "block";
}