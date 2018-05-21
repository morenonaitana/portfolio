var item = 0;

$(document).ready(function(){
		makeDiv(); 
});

function makeDiv(){
   
   	$('#container').delegate('#button', 'click', function(){
	$('#currentitem').remove();
	$('.cercle').remove();
	i=0;
	var mathRandom = (Math.random()*100)+1;
	var items = Array(1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610);
	var posx = (Math.random() * ($('#container').width() - item));
	var posy = (Math.random() * ($('#container').height() - item));
	var item = items[Math.floor(Math.random()*items.length)];
	console.log(item);
	$('<div id="currentitem">'+item+'</div>').appendTo('#container');
	n=0;
	while(n<item){
	n++;
	$('<div class="cercle"></div>').appendTo('#wrap');
	};
	console.log($('.cercle'));
});
}