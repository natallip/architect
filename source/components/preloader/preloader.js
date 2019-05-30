module.exports = (function () {
	$('#fullpage').addClass('no-scroll');
	$(window).on('load', function() {
		console.log(123);
		$('#preloader').fadeOut('slow');
		$('#fullpage').removeClass('no-scroll');
	});
})();