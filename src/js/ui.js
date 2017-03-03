$(function(){
	$('.l_visual > li > a').fullScreen();



	$('.visual').slide({
		slide_type : 'mono',
		setAuto : true,
		auto_speed : 4000
	});
	$('.notice_wrap').slide({
		slide_type : 'mono',
		direction : 'vertical',
		setAuto : true,
		auto_speed : 2000
	});



})
