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
    it('increase the temperature', function() {
      thermostat.temp = 10
      thermostat.down(5);
      expect(thermostat.temp).toEqual(5);
    });
  });
  //
  // describe('can set temperature', function() {
  //   it('up', function() {
  //     expect(thermostat.set(30)).toEqual('20');
  //   });
  // });
  //
});
