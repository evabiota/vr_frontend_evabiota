let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let open = document.getElementById("open");
console.log('open');
let close = document.getElementById("close");
console.log('close');

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
  open.classList.toggle("hidden");
  close.classList.toggle("visible");
	
});