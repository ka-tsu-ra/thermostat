var thermostat = new Thermostat();


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

  refreshTemp();

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
