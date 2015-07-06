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

  describe()
  //
  // describe('can set temperature', function() {
  //   it('up', function() {
  //     expect(thermostat.set(30)).toEqual('20');
  //   });
  // });
  //
});
