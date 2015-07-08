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





 // colour = function(){
 //   if(thermostat.temp < 18) {
 //     document.getElementById("temp").className = 'green';
 //   } else if(thermostat.temp < 25) {
 //     document.getElementById("temp").className = 'orange';
 //   } else {
 //     document.getElementById("temp").className = 'red';
 //   };
 // };

});
