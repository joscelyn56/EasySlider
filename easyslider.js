/*! 
* EasySlider easyslider.js https://github.com/joscelyn56/EasySlider
* Version - 0.0.1
* Licensed under the MIT license - http://opensource.org/licenses/MIT
*
* Copyright (c) 2018 Okwu Joscelyn Kinikachi
*/
'use strict';

(function(){
	
	//Initialize variables.
	var easySlider = $('.easy-slider');
	//Get the number of slides available
	var count = $('.easy-slide').length;
	//Set activeSlide to first slide.
	var activeSlide = 0;
	var previousSlide = activeSlide;
	var sliderInterval;

	//Set first slide id as 1.
	var slideId = 1;

	//Get the list of all slides and loop through it.
	$.each($('.easy-slide'), function(index, value){
		//assign an id to each slide.
		$(value).attr('id', slideId);
		//increment slideId by 1.
		slideId += 1;
	});

	//Create dots automatically based on the number of slides.
	var dots = $('<div></div>').addClass('easy-dots');
	for(var i = 1; i <= count; i++){
		//assign a data attribute of each slide id to each dot.
		var dot = $('<div></div>').addClass('easy-dot').attr('data-id', i);
		dots.append(dot);
	}
	//Append the dots created to the slider.
	easySlider.append(dots);

	//Get the slide with the active class and set it as the active slide.
	activeSlide = $('.easy-slide.active').attr('id');

	//Make dots clickable.
	$('.easy-dot').on('click', switchSlider);

	startSlider(true);

	//if the slider has more than one slide, create an infinite loop with delay of 15s
	if( count > 1) sliderInterval = setInterval(startSlider, 15000);

	//start the slider
	function startSlider(start = false){
		if(!start) activeSlide = parseInt(activeSlide) + 1;

		//if the slider has gotten to the last slide, reset the slider to first slide.
		if( activeSlide > count ){
			activeSlide = 1;
		}

		$('.easy-slide').fadeOut({duration: 1000}).removeClass('active');

		$('#'+previousSlide).fadeOut({duration: 1000}).removeClass('active');
		$('#'+activeSlide).fadeIn({duration: 1000}).addClass('active');
		$('.easy-dot').removeClass('active');
		$('.easy-dot[data-id='+ activeSlide +']').addClass('active');

		previousSlide = activeSlide;
	}

	//Switch slide when dot is clicked.
	function switchSlider(){
		//clear current running loop.
		clearInterval(sliderInterval);

		$('.easy-slide').fadeOut({duration: 1000}).removeClass('active');
		previousSlide = activeSlide;

		activeSlide = $(this).attr('data-id');

		$('.easy-dot.active').removeClass('active');
		$(this).addClass('active');

		$('#'+activeSlide).fadeIn({duration: 1000}).addClass('active');

		//Begin looping from current slide.
		sliderInterval = setInterval(startSlider, 15000);
	}

})();
