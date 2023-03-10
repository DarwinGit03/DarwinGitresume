const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('toggle_menu'),
closeMenu = document.getElementById('close_menu')

toggleMenu.addEventListener('click', () =>{
	navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () =>{
	navMenu.classList.remove('show')
})


var typed = new Typed(".multiple-type",{
	strings: ["Web Developer", "OOP-Programmer", "Basic networking"],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 100,
	loop: true
});