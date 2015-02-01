$(document).ready(function(){

	//prevents appending '#'s to URL for anchors which do not link to a new pagae
	$('.not-a-link').click(function(e){
		e.preventDefault();
	});

	//magnific-popup gallery initializer
	// $('.gallery-container').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	gallery: {
	// 		enabled: true,
	// 		preload: [1,2],
	// 		navigateByImgClick: true,
	// 		tPrev: 'Previous (left arrow key)',
	// 		tNext: 'Next (right arrow key)'
	// 	},
	// 	mainClass: 'mfp-with-zoom',
	// 	cursor: null
	// });

	var data = [
		{
			motionTitle: "Mr. Fox Has a Plan",
			source_src: "videos/mrFox.mp4",
			video_id: "fox",
			description: "Odd Future Banksy wolf Brooklyn, deep v fixie forage bitters trust fund Wes Anderson sriracha asymmetrical. Trust fund organic meditation ennui. Roof party quinoa next level distillery. Meh viral keytar, ennui you probably haven't heard of them fap fingerstache locavore slow-carb distillery organic 90's Vice Pitchfork Portland. Pickled artisan American Apparel Schlitz vinyl church-key, cray 90's biodiesel bicycle rights Pinterest Helvetica Kickstarter kitsch. Tattooed small batch Brooklyn, McSweeney's seitan church-key Pitchfork drinking vinegar crucifix. Pop-up Brooklyn Pitchfork, semiotics squid cardigan Wes Anderson stumptown readymade flexitarian."
		},
		{
			motionTitle: "Just some family skiing",
			source_src: "videos/skiing.mp4",
			video_id: "skiing",
			description: "Some other dynamic content Odd Future Banksy wolf Brooklyn, deep v fixie forage bitters trust fund Wes Anderson sriracha asymmetrical. Trust fund organic meditation ennui. Roof party quinoa next level distillery. Meh viral keytar, ennui you probably haven't heard of them fap fingerstache locavore slow-carb distillery organic 90's Vice Pitchfork Portland. Pickled artisan American Apparel Schlitz vinyl church-key, cray 90's biodiesel bicycle rights Pinterest Helvetica Kickstarter kitsch. Tattooed small batch Brooklyn, McSweeney's seitan church-key Pitchfork drinking vinegar crucifix. Pop-up Brooklyn Pitchfork, semiotics squid cardigan Wes Anderson stumptown readymade flexitarian."
		}
	];

	$('.open-popup').magnificPopup({
		items: data,
		type: 'inline',
		inline:{
			markup:
					'<div class="motion-popup"><div class="mfp-close"></div>'+
						'<video controls>'+
							'<source class="mfp-source" type="video/mp4">'+
						'</video>'+
						'<h2 class="mfp-motionTitle"></h2>'+
						'<p class="mfp-description"></p>'+
					'</div>'
		},
		gallery:{
			enabled: true
		},
		midClick: true,
		alignTop: false,
		showCloseBtn: true,
		closeBtnInside: true
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
