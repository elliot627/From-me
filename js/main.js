$(document).ready(function(){

	//magnific-popup gallery initializer
	$('.gallery-container').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			preload: [1,2],
			navigateByImgClick: true,
			tPrev: 'Previous (left arrow key)',
			tNext: 'Next (right arrow key)'
		},
		mainClass: 'mfp-with-zoom',
		cursor: null
	});

	$('.open-popup').magnificPopup({
		type: 'inline',
		midClick: true,
		alignTop: false
	});


	//magnific-popup html template data


	//magnific-popup html template initializer

	$('.not-a-link').click(function(e){
		e.preventDefault();
	});

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  				var target = $(this.hash);
	      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
	        		$('html,body').animate({
          			scrollTop: target.offset().top
	        		}, 1200);
	        		return false;
	      		}
	    	}
	  	});
	});
});
