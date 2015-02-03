$(document).ready(function(){

	// prevents appending '#'s to URL for anchors which do not link to a new pagae
	$('.not-a-link').click(function(e){
		e.preventDefault();
	});

	$('.slider-content').hide();

	$('.category-trigger').click(function(){
		$(this).siblings('.slider-content').slideToggle(600);
	});

	$('.open-video-popup').magnificPopup({
		type: 'inline'
	});



	//magnific-popup video gallery initializer (using inline item sources)
	// $('.video-gallery').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'inline',
	// 	gallery: {
	// 		enabled: true,
	// 		tPrev: 'Previous (left arrow key)',
	// 		tNext: 'Next (right arrow key)'
	// 	},
	// 	inline: {
	// 		markup: '<div class="video-popup"><div class="mfp-close"></div>'+
	// 					'<video controls class="video-js vjs-default-skin">'+
	// 						'<source class="mfp-source" '
	// 	}
	// });

	//magnific-popup photo gallery initializer
	$('.photo-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			preload: [1,2],
			navigateByImgClick: true,
			tPrev: 'Previous (left arrow key)',
			tNext: 'Next (right arrow key)'
		},
		image: {
			markup: '<div class="mfp-figure">'+
						'<div class="mfp-close"></div>'+
						'<div class="mfp-img"></div>'+
						'<div class="mfp-bottom-bar">'+
							'<div class="mfp-title"></div>'+
							'<div class="mfp-counter"></div>'+
							'<div class="mfp-desc"></div>'+
						'</div>'+
					'</div>',
			cursor: 'mfp-zoom-out',
			verticalFit: true,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		}
	});


	//Magnific popup initialzer for motion videos (using js data sources)
	// var data = [
	// 	{
	// 		motionTitle: "Mr. Fox Has a Plan",
	// 		source_src: "videos/mrfox.mp4",
	// 		video_id: "fox",
	// 		description: "Odd Future Banksy wolf Brooklyn, deep v fixie forage bitters trust fund Wes Anderson sriracha asymmetrical. Trust fund organic meditation ennui. Roof party quinoa next level distillery. Meh viral keytar, ennui you probably haven't heard of them fap fingerstache locavore slow-carb distillery organic 90's Vice Pitchfork Portland. Pickled artisan American Apparel Schlitz vinyl church-key, cray 90's biodiesel bicycle rights Pinterest Helvetica Kickstarter kitsch. Tattooed small batch Brooklyn, McSweeney's seitan church-key Pitchfork drinking vinegar crucifix. Pop-up Brooklyn Pitchfork, semiotics squid cardigan Wes Anderson stumptown readymade flexitarian."
	// 	},
	// 	{
	// 		motionTitle: "Family skiing",
	// 		source_src: "videos/skiing.mp4",
	// 		video_id: "skiing",
	// 		description: "Some other dynamic content Odd Future Banksy wolf Brooklyn, deep v fixie forage bitters trust fund Wes Anderson sriracha asymmetrical. Trust fund organic meditation ennui. Roof party quinoa next level distillery. Meh viral keytar, ennui you probably haven't heard of them fap fingerstache locavore slow-carb distillery organic 90's Vice Pitchfork Portland. Pickled artisan American Apparel Schlitz vinyl church-key, cray 90's biodiesel bicycle rights Pinterest Helvetica Kickstarter kitsch. Tattooed small batch Brooklyn, McSweeney's seitan church-key Pitchfork drinking vinegar crucifix. Pop-up Brooklyn Pitchfork, semiotics squid cardigan Wes Anderson stumptown readymade flexitarian."
	// 	},
	// 	{
	// 		motionTitle: "Warpaint - Lyric Video",
	// 		source_src: "videos/warpaint.mov",
	// 		video_id: "warpaint",
	// 		description: "You want to bottle me up, lock away my heart and soul. You came searching for a rock, that you could build your home upon. But I'm a rolling stone, I'm a rolling stone. And what you need the most, what you, what you need the most is what I have the least"
	// 	}
	// ];

	// $('.video-gallery').magnificPopup({
	// 	items: data,
	// 	type: 'inline',
	// 	inline:{
	// 		markup:
	// 				'<div class="video-popup"><div class="mfp-close"></div>'+
	// 					'<video controls class="video-js vjs-default-skin">'+
	// 						'<source class="mfp-source" type="video/mp4">'+
	// 					'</video>'+
	// 					'<h2 class="mfp-motionTitle"></h2>'+
	// 					'<p class="mfp-description"></p>'+
	// 				'</div>'
	// 	},
	// 	midClick: true,
	// 	alignTop: false,
	// 	showCloseBtn: true,
	// 	closeBtnInside: true
	// });
	

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  				var target = $(this.hash);
	      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
	        		$('html,body').animate({
          			scrollTop: target.offset().top
	        		}, 500);
	        		return false;
	      		}
	    	}
	  	});
	});
});
