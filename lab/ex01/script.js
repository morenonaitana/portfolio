$(document).ready(function(){
		makeDiv(); 
});

function makeDiv(){
   
   /*
var mathRandom = Math.floor((Math.random()*100)+1);
   var items = Array(34, 55, 89, 144, 233, 377, 610);
   var item = items[Math.floor(Math.random()*items.length)];
   
   $('#container').delegate('.cercle', 'click', function(){
		console.log('clicked');
		$(this).clone().appendTo('#container').css({'margin-left': item, 'margin-top': item});
	});
*/

	$('#container').delegate('.cercle ', 'click', function(){
	
		$('.arrow').fadeOut();
		
		i=0;
		
		var mathRandom = (Math.random()*100)+1;
		var items = Array(1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610);
		var item = items[Math.floor(Math.random()*items.length)];
		var posx = (Math.random() * ($('#container').width() - item));
	    var posy = (Math.random() * ($('#container').height() - item));
   		
   		console.log(item);
		
		$(this).clone().fadeIn().appendTo('#container').css({'top' : posy, 'left' : posx});
	});
	
};