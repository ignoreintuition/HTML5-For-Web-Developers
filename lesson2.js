// Cookie Example

var allCookies = document.cookie;
document.cookie = "login=tre";
console.log(document.cookie);


//Session Storage Example
document.getElementById("stateDropdown").addEventListener("change", function(e){
  console.log(e.target.value);
  sessionStorage.setItem("state", e.target.value);
})

var state = sessionStorage.getItem("state");
console.log(state);
sessionStorage.removeItem("state");


//Local Storage Example
document.getElementById("stateDropdown").addEventListener("change", function(e){
  console.log(e.target.value);
  localStorage.setItem("state", e.target.value);
})

var state = localStorage.getItem("state");
console.log(state);
localStorage.removeItem("state");
