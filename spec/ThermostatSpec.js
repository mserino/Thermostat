describe('Thermostat', function(){
  var thermostat;

  describe('by default', function(){
    it('is set at 20 degrees', function(){
      thermostat = new Thermostat;
      expect(thermostat.temperature).toEqual(20);
    });
  });
});