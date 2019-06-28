/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
window.onload=function() {
const button = document.querySelector(".login-btn");

button.addEventListener("mouseover" , (event) => {
event.target.style.color = "white";
});

button.addEventListener("mouseout" , (event) => {
event.target.style.color = "black";
});





const home = document.querySelector(".home");

home.addEventListener("mouseover" , (event) => {

event.target.style.backgroundColor = "black";
event.target.style.color = "white";
});

home.addEventListener("mouseout" , (event) => {
event.target.style.color = "black";
event.target.style.backgroundColor = "white";
});




const calculator = document.querySelector(".calculator");

calculator.addEventListener("mouseover" , (event) => {

event.target.style.backgroundColor = "black";
event.target.style.color = "white";
});

calculator.addEventListener("mouseout" , (event) => {
event.target.style.color = "black";
event.target.style.backgroundColor = "white";
});





const about = document.querySelector(".About");

about.addEventListener("mouseover" , (event) => {

event.target.style.backgroundColor = "black";
event.target.style.color = "white";
});

about.addEventListener("mouseout" , (event) => {
event.target.style.color = "black";
event.target.style.backgroundColor = "white";
});


const contact = document.querySelector(".Contact");

contact.addEventListener("mouseover" , (event) => {

event.target.style.backgroundColor = "black";
event.target.style.color = "white";
});

contact.addEventListener("mouseout" , (event) => {
event.target.style.color = "black";
event.target.style.backgroundColor = "white";
});




};
