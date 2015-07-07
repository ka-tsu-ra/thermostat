describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('at the start, displays', function() {
    it('20', function() {
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('can', function() {
    it('increase the temperature', function() {
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
    });
  });

  describe('can', function() {
    it('decrease the temperature', function() {
      thermostat.down();
      expect(thermostat.temp).toEqual(19);
    });
  });

  describe('has', function() {
    it('a minimum temp of 10', function() {
      thermostat.temp = 10;
      thermostat.down();
      expect(thermostat.temp).toEqual(10);
    });
  });

  describe('at the start, powersaving mode is', function() {
    it('on', function() {
      expect(thermostat.powerSave).toEqual(true);
    });
  });

  describe('when in power saving mode', function() {
    it('has a max temperature of 25', function() {
      thermostat.temp = 25;
      thermostat.up();
      expect(thermostat.temp).toEqual(25);
    });
  });

  describe('when not in power saving mode', function() {
    it('has a max temperature of 32', function() {
      thermostat.powerSave = false;
      thermostat.temp = 32;
      thermostat.up();
      expect(thermostat.temp).toEqual(32);
    });
  });

  describe('it has a reset button', function() {
    it('that sets the temp to 20', function() {
      thermostat.temp = 24;
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('it has a powersave', function() {
    it('toggle', function() {
      thermostat.powerSave = true;
      thermostat.toggle();
      expect(thermostat.powerSave).toEqual(false);
    });
  });

  describe('the powersave toggle can', function() {
    it('turn the powersave back on', function() {
      thermostat.powerSave = false;
      thermostat.toggle();
      expect(thermostat.powerSave).toEqual(true);
    });
  });

  describe('the thermostat', function() {
    it('knows what colour it should be', function() {
      thermostat.temp = 26;
      expect(thermostat.colour).toEqual('red');
    });
  });

});
