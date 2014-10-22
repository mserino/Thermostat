"use strict";

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('by default', function(){
    it('is set at 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('power saving mode will be on', function(){
      expect(thermostat.isPowerSaverOn).toBe(true);
    });

    it('can increase the temperature by one degree', function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });
  });
});