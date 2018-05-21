var icons = {
	"clear-day" : 'B',
	"clear-nigth" : 'C',
	"rain" : 'R',
	"snow" : 'G',
	"sleet" : "X",
	"wind" : "S",
	"fog" : 'N',
	"cloudy" : "Y",
	"partly-cloudy-day" : 'H',
	"partly-cloudy-night" : 'I'
};

var cities = {
	"namur" : { coords : { latitude: 50.467388, longitude: 4.871985 } },
	"charleroi" : { coords : { latitude: 50.410809, longitude: 4.444643 } },
	"bruxelles" : { coords : { latitude: 50.850340, longitude: 4.351710 } },
	"london" : { coords : { latitude: 51.507351, longitude: -0.127758 } },
	"oslo" : { coords : { latitude: 59.913869, longitude: -10.752245 } },
	"current location" : ""
};

function colorIt(ctntBackgroundColor, ctntTextColor, hBackgroundColor, hTextColor){
	var content = $('.ui-content, .ui-panel-wrapper');
	var header = $(".ui-bar-a, .ui-page-theme-a .ui-bar-inherit, html .ui-bar-a .ui-bar-inherit, html .ui-body-a .ui-bar-inherit, html body .ui-group-theme-a .ui-bar-inherit");
	content.css({ 'background-color' : ctntBackgroundColor, 'color' : ctntTextColor });
	header.css({ 'background-color' : hBackgroundColor, 'color' : hTextColor });
}

function changeColorWeather(){
	var currentWeather = $(".icon-weather").attr('data-icon');
	switch(currentWeather){
		case "B":
			colorIt('#395663', '#738E99', '#272C2F', '#608C96');
		break;
		case "C":
			colorIt('#395663', '#738E99', '#272C2F', '#608C96');
		break;
		case "R":
			colorIt('#395663', '#738E99', '#272C2F', '#608C96');
		break;
		case "G":
			colorIt('#395663', '#738E99', '#272C2F', '#608C96');
		break;
		case "X":
			colorIt('#395663', '#738E99', '#272C2F', '#608C96');
		break;
		case "S":
			colorIt('#395663', '#738E99', '#272C2F', '#608C96');
		break;
		case "N":
			colorIt('#395663', '#738E99', '#272C2F', '#608C96');
		break;
		case "Y":
			colorIt('#395663', '#738E99', '#272C2F', '#608C96');
		break;
		case "H":
			colorIt('#E6F6FF', '#7498BC', '#152533', '#D1DFE8');
		break;
		case "I":
			colorIt('#395663', '#738E99', '#272C2F', '#608C96');
		break;
		default:
			colorIt('#395663', '#738E99', '#272C2F', '#608C96');
	}

}

function loadWeather(cityCoords){
	var currentWeather = $(".icon-weather").attr('data-icon');
	console.log(cityCoords);
	var latlng = cityCoords.coords.latitude + "," + cityCoords.coords.longitude;
	var forcecastURL ="https://api.forecast.io/forecast/5b981cd87c6c484aab9fc38aadd586af/"+latlng;
	$.ajax({
		url: forcecastURL,
		jsonpCallback: 'jsonCallback',
		contentType: "application/json",
		dataType: 'jsonp',
		success: function(json){
			console.log(json);
			var currentTemp = Math.round(json.currently.temperature);
			var currentTempDegree = Math.round((currentTemp -32) * 5 / 9);
			$("#current_temp").html(currentTempDegree+"&#176;C");
			$("#current_summary").html(json.currently.summary);
			$(".icon-weather").attr("data-icon",icons[json.currently.icon]);
			changeColorWeather();
			console.log("current weather".toUpperCase());
			console.log(json.currently.icon);
		},
		error: function(e) {
			console.log(e.message);
		}
	});
}

function loadCity(city){
	$("#current_location").html(city);
	if (city.toLowerCase() == "current location"){
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(loadWeather, loadDefaultCity);
		} else {
			loadDefaultCity();
		}
	} else {
		loadWeather(cities[city.toLowerCase()]);
	}
}

function loadDefaultCity(){
	loadCity("Namur");
}

$(document).ready(function(){
	loadDefaultCity();
	$('a.city').bind("click", function(){
		loadCity($(this).html());
	});
});