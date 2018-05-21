var now = 'slider03';
var load = 'ok';
// Les fonctions : 
function show_hide_slide(varShow) {
	//ce qu'on cache
	load = 'wait';
	$('.'+now).animate({left: '100px', opacity: '0'}, 400, function () {
		// remove button
		$('.'+now).css({display: 'none'});
		$('.'+now+'_bouton').removeClass('next_button_active');
		show_slide(varShow);
	});
};
function show_slide(varShow) {
	// add button
	$('.'+varShow+'_bouton').addClass('next_button_active');
	// ce qu'on montre
	$('.'+varShow).css({left: '-100px'});
	$('.'+varShow).css({display: 'block'});
	$('.'+varShow).animate({left: '0px', opacity: '1'}, 400, function () {
		now = varShow;
		window.clearTimeout(timer);
		timer_function();
		load = 'ok';
	});
};
function slide () {
	// clic
	$('.slider01_bouton').click(function() {
		if (now != 'slider01' && load == 'ok') {
			show_hide_slide('slider01');
		}
	});
	$('.slider02_bouton').click(function() {
		if (now != 'slider02' && load == 'ok') {
			show_hide_slide('slider02');
		}
	});
	$('.slider03_bouton').click(function() {
		if (now != 'slider03' && load == 'ok') {
			show_hide_slide('slider03');
		}
	});
};
// PLAY :
var timer;
function timer_function() {
	timer = setTimeout("slide_boucle()",10000);
};	
// boucle :
function slide_boucle() {
	if (now == 'slider01' && load == "ok") {
		show_hide_slide('slider02');
	}
	if (now == 'slider02' && load == "ok") {
		show_hide_slide('slider03');
	}
	if (now == 'slider03' && load == "ok") {
		show_hide_slide('slider01');
	}
	timer_function();
};