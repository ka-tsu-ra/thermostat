var thermostat = new Thermostat();

document.getElementById("temp").innerHTML = thermostat.temp;

document.getElementById("up").onclick = function(){
  thermostat.up();
  colour();
  document.getElementById("temp").innerHTML = thermostat.temp;
};

document.getElementById("down").onclick = function(){
  thermostat.down();
  colour();
  document.getElementById("temp").innerHTML = thermostat.temp;
};

document.getElementById("toggle").onchange = function(){
  thermostat.toggle();
  colour();
  document.getElementById("temp").innerHTML = thermostat.temp;
};

colour = function(){
  if(thermostat.temp < 18) {
    document.getElementById("temp").className = 'green';
  } else if(18 <= thermostat.temp < 25) {
    document.getElementById("temp").className = 'orange';
  } else if(thermostat.temp >= 25) {
    document.getElementById("temp").className = 'red';
  };
};
