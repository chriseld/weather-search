$("#find-city").on("click", function(event) {

    event.preventDefault();

    var city = $("#city-input").val();

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6267744aea8e18ec095542c8b808ca0a&units=imperial";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var card = $("<div class='card'>");
        var cityName = JSON.parse(JSON.stringify(response.name));
        var dateSearched = moment().format('YYYY MM DD'); 

        card.append(cityName);
        card.append(" (" + dateSearched + ")");

        $("#cards").prepend(card);
    });

});
