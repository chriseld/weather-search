$("#find-city").on("click", function(event) {

    event.preventDefault();

    var city = $("#city-input").val();

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6267744aea8e18ec095542c8b808ca0a&units=imperial";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        var card = $("<div class='card'>");
        var firstLine = "<p style='font-weight: bold; display: inline;'>" + JSON.parse(JSON.stringify(response.name)) + " (" + moment().format('YYYY/MM/DD') + ")";
        var wicon = $("<img class='wicon' alt='" + response.weather[0].description + "' src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'><br>")
        var temperature = "Temperature: " + JSON.parse(JSON.stringify(response.main.temp)) + "&deg; F<br>";
        var humidity = "Humidity: " + JSON.parse(JSON.stringify(response.main.humidity)) + "%<br>";
        var windspeed = "Windspeed: " + JSON.parse(JSON.stringify(response.wind.speed)) + " MPH<br>";

        card.append(firstLine);
        card.append(wicon);
        card.append(temperature);
        card.append(humidity);
        card.append(windspeed);


        $("#cards").prepend(card);
    });

});
