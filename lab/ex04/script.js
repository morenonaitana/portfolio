var prevWidth     = 0;
var side          = 0;
var n             = 0;
var whiteSpace    = 0;
var prevprevWidth = 0;
$(document).ready(function(){
	
	$('#submit').click(function(){
		var value = parseInt($('#number').val());
		if(value>9 && value<101){
			whiteSpace = $('#wrap').width();
			prevWidth = value;
			init();
		} else {
			alert('enter a number From 10 To 100');
		}
	});
});

function init(){
	makediv();
	
}


function makediv(){
	$('#form').css('display', 'none');
	n++;
	
	if(n == 1){
		$('#rect-'+n).css('margin-top', '50px');
	}
	
	if(n > 2){
		side = prevWidth+prevprevWidth;
		$('#rect-'+(n-1)).removeClass('last');	
	}else if(n == 2){
		$('#rect-'+(n-1)).removeClass('last');
		side = prevWidth;
	}else{
		side = prevWidth;
	}
	
	if(whiteSpace > side/3){
		$('#wrap').append('<div class="rect" id="rect-'+n+'"></div>');
		$('#rect-'+n).addClass('last');
		$('#rect-'+n).css({
			height  : side-2 ,
			width : side-2
		});
		
		function pair(n){
		   return ((n-1)%2);
		};
		pair();
		
		if(pair(n)==true){
			$('#rect-'+n).css('clear', 'both');
			
		} else{
			$('#rect-'+n).css({
				'margin-top': -prevprevWidth 
			});
		}
		
		if(n == 1){
			$('#rect-'+n).css({
				'margin-top' : '0'
			});
		}
		prevprevWidth = prevWidth;
		console.log('prevprevWidth '+prevprevWidth);
		prevWidth  = side;
		console.log('prevwidth '+prevWidth);
		console.log('side '+side);
		$('.rect').click(function(){
			if($(this).hasClass('last')){
				init();
				
			}
		});	
	}
	
	whiteSpace = whiteSpace - side;
	
}



