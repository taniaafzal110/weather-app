
function initialiser() {
    $("#user-search").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#button-addon2").click();
        }
    });

}

function getWeather() {
	document.querySelector(".weather-info").style.display = "block";


	const cityName = document.querySelector("input").value;

	

   $.ajax({
     url: 
     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2115e9b330fea3fc21883c7208804397&units=metric`,
     success: function(data) {
      console.log(data);
		//const isNight;
		//if (isNight === true) {
			//black background
			//color white
		//}else {
			//orange background
			//color black

		//}
		document.querySelector(".city-name").innerHTML = data.name;
		document.querySelector(".temp > span").innerHTML = `${data.main.temp}°C`;
		document.querySelector(".description").innerHTML = data.weather[0].main;
		document.querySelector(".min").innerHTML = `${data.main.temp_min}°C`;
		document.querySelector(".max").innerHTML = `${data.main.temp_max}°C`;

       let updateTime = new Date();
       let newUpdate = updateTime.toLocaleString();
       document.querySelector(".update-time").innerHTML = newUpdate;

       let calcTime = new Date();
       let sunriseTime = new Date(data.sys.sunrise * 1000);
       let sunsetTime = new Date(data.sys.sunset * 1000);

       if (calcTime > sunriseTime && calcTime < sunsetTime) {
         document.querySelector("body").style["background-image"] = `url(day-bg.jpg)`;
         document.querySelector("body").style["background-position"] = `bottom`;
         document.querySelector("body").style["background-attachment"] = `fixed`;
         document.querySelector("body").style.color = `black`;

     } else {
        document.querySelector("body").style["background-image"] = `url(night-bg-2.jpg)`;
        document.querySelector("body").style["background-position"] = `bottom`;
        document.querySelector("body").style["background-attachment"] = `fixed`;
        document.querySelector("body").style.color = `white`;
    }


    let weatherName = data.weather[0].main;

    switch (weatherName) {
        case "Clouds":
        document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
        break;

        case "Smoke":
        document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-smoke"></i>`;
        break;

        case "Fog":
        document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-fog"></i>`;
        break;

        case "Rain":
        document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-rain"></i>`;
        break;


        case "Mist":
        document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-windy"></i>`;
        break;


        case "Smog":
        document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-smog"></i>`;
        break;


        case "Clear":
        if (calcTime < sunsetTime) {
            document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-day-sunny"></i>`;
        } else {
            document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
        }
        break;

        case "Partly Cloudy":
        if (calcTime < sunsetTime) {
            document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
        } else {
            document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-night-alt-clear"></i>`;
        }
        break;

        case "Haze":
        document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-dust"></i>`;
        break;


        case "Cloudy":
        document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-cloudy"></i>`;
        break;


        case "Storm":
        document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-sandstorm"></i>`;
        break;

        case "Thunderstorm":
        document.querySelector(".weather-icon").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
        break;

    }


},
error: function (err) {
  console.log(err);
}


});
}



