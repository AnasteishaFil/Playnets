$('.menu_btn').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('menu_btn_active');
	$('.slide_menu').toggleClass('slide_menu_active');
	$('.nav_menu').toggleClass('nav_menu_active');
});
$('.btn_planet').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('btn_planet_active');
	$('.link_planet').toggleClass('link_planet_active');
});