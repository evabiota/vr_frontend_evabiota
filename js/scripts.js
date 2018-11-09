let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let open = document.getElementById("open");
let close = document.getElementById("close");

let optionsList = document.getElementById("downloadList");

console.log('close');

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
  open.classList.toggle("hidden");
  close.classList.toggle("visible");
	
});

function showList() {

    if (optionsList.style.display === "inline-block") {
		console.log('siiiiiii')
        optionsList.style.display = "none";
    } else {
		console.log('nooo')
        optionsList.style.display ="inline-block";
    }
}