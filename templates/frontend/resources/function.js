$(document).ready(function() {
	var wd_width = $(window).width();

	// Ẩn/hiện header
	$(window).scroll(function() {
		if($(this).scrollTop() > 150) {
			$('.pc-header').addClass('hide');
		}else {
			$('.pc-header').removeClass('hide');
		}
	});


	//Thay đổi list video
	if($('.playvideo')) {
		$('.playvideo').click(function(event) {
			var video = $(this).attr('data-video');
			var $el = $('#homepage-video');
			$el.find('iframe').remove();
			$('<iframe width="100%" height="100%" frameborder="0" allowfullscreen></iframe>')
			    .attr("src", 'http://www.youtube.com/embed/' + video)
			    .appendTo($el);

			event.preventDefault();
		});
	}

});