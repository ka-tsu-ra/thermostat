var thermostat = new Thermostat();

document.getElementById("temp").innerHTML = thermostat.temp;

document.getElementById("up").onclick = function(){
  thermostat.up();
  document.getElementById("temp").innerHTML = thermostat.temp;
};

document.getElementById("down").onclick = function(){
  thermostat.down();
  document.getElementById("temp").innerHTML = thermostat.temp;
};

document.getElementById("toggle").onchange = function(){
  thermostat.toggle();
  document.getElementById("temp").innerHTML = thermostat.temp;
};
