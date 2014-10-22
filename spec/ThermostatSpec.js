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

    it('can decrease the temperature by one degree', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });

    it('has a minimum temperature of 10 degrees', function(){
      expect(thermostat.minimumTemperature()).toEqual(10);
    });

    it('has a maximum temperature of 25 degrees', function(){
      expect(thermostat.maximumTemperature()).toEqual(25);
    });

    it('when power saver on cannot increase the temperature more than 25 degrees', function(){
      thermostat.increaseTemperatureBy(6);
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('custom options', function(){
    it('can increase the temperature by 12', function(){
      thermostat.isPowerSaverOn = false;
      thermostat.increaseTemperatureBy(12);
      expect(thermostat.temperature).toEqual(32);
    });

    it('can decrease the temperature by 10', function(){
      thermostat.decreaseTemperatureBy(10);
      expect(thermostat.temperature).toEqual(10);
    });

    it('maximum temperature is 32 if power saver mode off', function(){
      thermostat.isPowerSaverOn = false;
      expect(thermostat.maximumTemperature()).toEqual(32);
    });
  });
});