$(document).ready(function() {
	$('.fullpage').fullpage({
		scrollOverflow: true,
		scrollOverflowOptions: {click: false},
		menu: '.menu',
		anchors: ['firstPage','secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
		afterRender: function(){
			$('.projects__last').html($('.projects__slides').length);
		},
		afterSlideLoad: function(section, origin, destination){
			$('.projects__first').html(++destination.index);
		}
	});

	new fullpage('.fullpage', {
		anchors: ['page1', 'page2', 'page3', 'page4'],
	  });
	$(document).on('click', '#moveTo', function(){
		console.log('object');
	fullpage_api.moveTo(2);
	});


	$(document).on('click', '.projects__mini a', changeImg);
	$(document).on('input', '.calc', changeInput);
	$(document).on('click', '.scroll-down', function() {
		fullpage_api.moveSectionDown();
	});

	function changeImg(event){
		event.preventDefault();
		$('.projects__big img').attr('src', $(this).attr('data-src'));
	}
	
	function changeInput(event){
		event.preventDefault();
		// console.log($(this));
		$(this).find('.calc__range output').val($(this).find('.calc__range input').val());
	}



});

