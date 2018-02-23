(function(){
	var easySlider = $('.easy-slider');
	var count = $('.easy-slide').length;
	var activeSlide = 0;
	var previousSlide = activeSlide;
	var sliderInterval;

	$(window).on('load', function(){
		var slideId = 1;
		$.each($('.easy-slide'), function(index, value){
			$(value).attr('id', slideId);
			slideId += 1;
		});

		var dots = $('<div></div>').addClass('easy-dots');
		for(var i = 1; i <= count; i++){
			var dot = $('<div></div>').addClass('easy-dot').attr('data-id', i);
			dots.append(dot);
		}
		easySlider.append(dots);

		activeSlide = $('.easy-slide.active').attr('id');

		$('.easy-dot').on('click', switchSlider);

		startSlider(true);

		if( count > 1) sliderInterval = setInterval(startSlider, 15000);

	});

	function startSlider(start = false){
		if(!start) activeSlide = parseInt(activeSlide) + 1;

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

	function switchSlider(){
		clearInterval(sliderInterval);

		$('.easy-slide').fadeOut({duration: 1000}).removeClass('active');
		previousSlide = activeSlide;

		activeSlide = $(this).attr('data-id');

		$('.easy-dot.active').removeClass('active');
		$(this).addClass('active');

		$('#'+activeSlide).fadeIn({duration: 1000}).addClass('active');
		sliderInterval = setInterval(startSlider, 15000);
	}

})();