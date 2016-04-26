$(document).ready(function() {
	$('.by-date').addClass('invisible');
	$('#sort-by-location').addClass('clicked');

	$('#sort-by-location').click(function() {
		if ($('.by-location').hasClass('invisible')) {
			$('#sort-by-location').addClass('clicked');
			$('#sort-by-date').removeClass('clicked');
			$('.by-location').removeClass('invisible');
			$('.by-date').addClass('invisible');
		}
	});

	$('#sort-by-date').click(function() {
		if ($('.by-date').hasClass('invisible')) {
			$('#sort-by-date').addClass('clicked');
			$('#sort-by-location').removeClass('clicked');
			$('.by-date').removeClass('invisible');
			$('.by-location').addClass('invisible');
		}
	});

	$('#sort-arrow').click(function() {
		var topMargin = $('#sortby').css('margin-top');
		if (topMargin == '0px') {
			$('#sortby').animate ({
				marginTop: '-=85px'
			}, 400);
		}
		else {
			$('#sortby').animate ({
				marginTop: '+=85px'
			}, 400);
		}
	});

	$('.sidebar-arrow').click(function() {
		if($(this).parent().siblings().is(':visible')) {
			$(this).parent().siblings().hide(400);
		}
		else {
			$(this).parent().siblings().show(400);
		}
	});

});