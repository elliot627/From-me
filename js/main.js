$(document).ready(function(){
	var skrollz = skrollr.init({
		forceHeight: false,
		smoothScrolling: true,
		mobileDeceleration: 0.001
	});

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  				var target = $(this.hash);
	      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
	        		$('html,body').animate({
          			scrollTop: target.offset().top
	        		}, 1000);
	        		return false;
	      		}
	    	}
	  	});
	});
});
