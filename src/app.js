var thermostat = new Thermostat();
$( document ).ready(function() {

  colour = function(){
    if(thermostat.temp < 18) {
      $("#temp").css("color", "green");
    } else if((thermostat.temp >= 18) && (thermostat.temp < 25)) {
      $("#temp").css("color", "orange");
    } else if(thermostat.temp >= 25) {
      $("#temp").css("color", "red");
    };
  };

  function refreshTemp() {
    colour();
    $("#temp").html(thermostat.temp);
  };

  var cityWeather =  function(city) {
    var city = "London";
    $.getJSON('http://api.openweathermap.org/data/2.5/find?q=' + city + '&units=metric',
      function (data) {
  $('#cityWeather').html(data.list[0].main.temp)
  });
  };

  refreshTemp();
  cityWeather();

  $("#up").click(function() {
    thermostat.up();
    refreshTemp();
  });

  $("#down").click(function() {
    thermostat.down();
    refreshTemp();
  });

  $("#toggle").change(function() {
    thermostat.toggle();
    refreshTemp();
  });
});
