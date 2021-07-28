// function navFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }
// function contactFunction() {
//     var y = document.getElementById("contactNav");
//     if (y.className === "hidden") {
//         y.className += "block";
//     }else {
//         y.className = "hidden";
//     }
// }
document.getElementById("cancel").addEventListener("click", closeFunction);
function closeFunction() {
    document.getElementById("contactNav").style.display = "none";
}
document.getElementById("myTopnav").addEventListener("click", openFunction);
function openFunction() {
    document.getElementById("contactNav").style.display = "block";
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}