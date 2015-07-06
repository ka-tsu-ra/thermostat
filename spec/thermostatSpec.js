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
      thermostat.up(5);
      expect(thermostat.temp).toEqual(25);
    });
  });

  describe('can', function() {
    it('decrease the temperature', function() {
      thermostat.down(5);
      expect(thermostat.temp).toEqual(15);
    });
  });

  describe('can', function() {
    it('decrease the temperature', function() {
      thermostat.temp = 20;
      thermostat.down(11);
      expect(thermostat.temp).toEqual(10);
    });
  });

  describe('at the start, powersaving mode is', function() {
    it('on', function() {
      expect(thermostat.powerSave).toEqual(true);
    });
  });

  describe('powersaving mode can be turned', function() {
    it('off', function() {
      thermostat.powerSave = true;
      thermostat.powerSaveOff();
      expect(thermostat.powerSave).toEqual(false);
    });
  });

  describe('powersaving mode can be turned', function() {
    it('on', function() {
      thermostat.powerSave = false;
      thermostat.powerSaveOn();
      expect(thermostat.powerSave).toEqual(true);
    });
  });

  describe('when in power saving mode', function() {
    it('has a max temperature of 25', function() {
      thermostat.up(6);
      expect(thermostat.temp).toEqual(25);
    });
  });

  describe('when not in power saving mode', function() {
    it('has a max temperature of 32', function() {
      thermostat.powerSave = false;
      thermostat.up(14);
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

});
