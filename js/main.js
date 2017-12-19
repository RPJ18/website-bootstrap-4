let btnToggler = document.querySelector('.navbar-toggler');

btnToggler.addEventListener('click', addBgColor);

function addBgColor() {
	let mainNav = document.querySelector('#mainNav');

	/*
		this needs some fixing, when i click to toggle the navbar, the nav is show with bg white
	*/

	if(mainNav.className === 'navbar navbar-expand-lg navbar-dark') {
		mainNav.classList.remove('navbar-dark');
		mainNav.classList.add('bg-dark');
	} else {
		mainNav.classList.remove('bg-dark');
		mainNav.classList.add('navbar-dark');
	}

}

window.addEventListener('scroll', () => {
	//console.log(document.documentElement.scrollTop);
	let navbar2 = document.querySelector('#mainNav-2');

	if(document.documentElement.scrollTop >= 650) {
		// navbar2.classList.remove('navbar-2');
		navbar2.style.top = 0;
	} else {
		// navbar2.classList.add('navbar-2');
		navbar2.style.top = '-100px';
	}
});


//it's not aplying to all the a tags, just the a brand tag in the top
// document.querySelector('a.js-scroll-trigger[href*="#"]:not([href="#"])').onclick = function() {
// 	console.log('hola');
// }  



$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 54)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});




