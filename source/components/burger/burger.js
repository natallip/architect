module.exports = (function () {
 burger = $('.burger');
	const nav = $('.navigation');
	const page = $('#fullpage');

	burger.click(function () {
		$(this).toggleClass('active');
		nav.toggleClass('open');
		page.toggleClass('no-scroll');
	});

	$(function() {
		$.scrollify({
			section : ".section",
			sectionName : "section-name",
			standardScrollElements: "#about, #works, #project, #building",
			overflowScroll: true,
			before:function(i,panels) {
				var ref = panels[i].attr("data-section-name");      
				$(".pagination .active").removeClass("active");      
				$(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
			}
		});
	});

	$(".pagination a").on("click",function() {
		$.scrollify.move($(this).attr("href"));
		
		burger.removeClass('active');
		nav.removeClass('open');
		page.removeClass('no-scroll');
		return false;
	});   

})();