var n = 0; /* Important pour pouvoir éclater les cercles */
var p = 0;
var settimmer = 0;
var items = Array(1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610);
var item = items[Math.floor(Math.random()*items.length)];
timeCounter = 0;

$(document).ready(function(){

	/*
$('.retry').click(function(){
    	var interval = setInterval(valinter, 1000);
    });
*/

	var interval = setInterval(valinter, 1000);
	var intervaldeux = setInterval(makediv, 1000);
	
	$('.retry').click(function(){
	        	location.reload();
			    });
        
	function valinter() {
			makediv();
			var timeCounter = $("b[id=show-time]").html();
            var updateTime = eval(timeCounter)- eval(1);
            $("b[id=show-time]").html(updateTime);
            //console.log('works');
            if(updateTime <=0){
	        	console.log(updateTime);
	        	clearInterval(interval);
	        	clearInterval(intervaldeux);
	        	$('.cercle').remove();
	        	$("b[id=show-time]").html(0);
	        	$('#end').css('display','block');
	        	$('.points').html(p);
	        }
        };
});
	
function makediv(){
	n++;
	var largeurtaupe = $('.cercle').width();
	var hauteurtaupe = $('.cercle').width();
  	
	var posx = (Math.random() * ($('#wrap').width() - largeurtaupe)); /* Au lieu de item il faut soustraire la largeur du cercle créé */
    var posy = (Math.random() * ($('#wrap').height() - hauteurtaupe)); /* Au lieu de item il faut soustraire la hauteur du cercle créé */
	
	/* On crée le cercle */
	$('#wrap').append('<div class="cercle" id="cercle-'+n+'"></div>');
	$('#cercle-'+n).css({ 
		left   : posx, 
		top    : posy, 
		zIndex : n /* Seulement pour que le cercle qui est créé passe au dessus des cercles déjà créé */
	});
	$('#cercle-'+n).animate({ opacity : 1 }, 500);
	
	eclate();
}

function eclate(){
	$('#cercle-'+n).click(function(){
		$(this).remove();
		var items = Array(1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610);
		var item = items[Math.floor(Math.random()*items.length)];
		p = p+item;
		
	});
};