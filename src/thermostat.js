function Thermostat() {
  this.temp = 20;
  this.powerSave = true;
};

Thermostat.prototype.up = function(num) {
  this.temp += num;
};

Thermostat.prototype.down = function(num) {
  if ((this.temp - num) < 10) {
    this.temp = 10;
  } else {
    this.temp -= num;
  }
}



//
// Thermostat.prototype.display = function() {
//     return("20");
//   };
