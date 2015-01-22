$(document).ready(function(){

	$('.gallery-container').magnificPopup({
		delegate: 'a',
		type: 'image'
	});

	$('a').click(function(e){
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
