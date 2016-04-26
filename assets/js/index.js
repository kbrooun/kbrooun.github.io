
$(document).ready(function() {
	$('.city-box').hide();

	$('.pin-container').click(function() {
		if($(this).siblings().is(':visible')) {
			$(this).siblings().fadeOut(500);
		}
		else {
			$('.city-box').fadeOut(500).delay(100);
			$(this).siblings().fadeIn(500);
		}
	})

	$('#map-container').click(function(e) {
		var item = $('.pin-container');
		if (!item.is(e.target) && item.has(e.target).length === 0) {
        	$('.city-box').fadeOut(500);
    	}
	})

})
