// v3.1.0
//Docs at http://simpleweatherjs.com
$(document).ready(function() {
	$.simpleWeather({
		//初期設定
		location: 'Ichinoseki, JP',
		unit: 'c',
		success: function(weather) {
			var html="";
			html = '<p class=\"location\">weather in '+weather.city+'</p>';
			//気温の表示
			html += '<p class=\"temp\">Temperature:'+weather.temp+'℃'+'</p>';
			html+='<p class=\"weather\">'+weather.currently+'</p><img src=\"'+weather.image+'\" class=\"weatherimage\">';
			var tmp=weather.high;
			if(tmp<0)
				tmp=tmp*-1;//何故かマイナスになるので負の数のときに-1をかけています。
			html+='<p class=\"todayHT\">Highest Temperature:'+tmp+'℃</p>';
			html+='<p class=\"winddirection\">WindDirection:'+weather.wind.direction+'</p>';
			html+='<p class=\"sun\">sunrise:'+weather.sunrise+' ';
			html+='sunset:'+weather.sunset+'</p>';
			html+='<p class=\"tomorrowweather\">Tomorrow Weather:'+weather.forecast[1].text+'</p><img src=\"'+weather.forecast[1].image+'\" class=\"tomorrowweatherimage\">';
			html+='<p class=\"updated\">Last Update:'+weather.updated+'</p>';
			$("#weather").html(html);
		},
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}
	});
});