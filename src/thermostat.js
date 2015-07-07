function Thermostat() {
  this.temp = 20;
  this.powerSave = true;
};

Thermostat.prototype.up = function() {
  if(this.powerSave) {
    if(this.temp + 1 > 25) {
      this.temp = 25
    } else {
      this.temp ++;
    }
  } else {
    if(this.temp + 1 > 32) {
      this.temp = 32
    } else {
      this.temp ++;
    }
  }

};

Thermostat.prototype.down = function() {
  if ((this.temp - 1) < 10) {
    this.temp = 10;
  } else {
    this.temp --;
  }
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = false;
};

Thermostat.prototype.powerSaveOn = function() {
  this.powerSave = true;
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
}
