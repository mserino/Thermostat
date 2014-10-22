"use strict";

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat;
  });

  describe('by default', function(){
    it('starts at 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('has the power save mode set to on', function(){
      expect(thermostat.powerSaveMode).toBe(true);
    });

    it('should have a minimum temperature', function(){
      expect(thermostat.minimumTemperature()).toEqual(10);
    });

    it('should have a maximum temperature', function(){
      expect(thermostat.maximumTemperature()).toEqual(25);
    });
  });

  describe('changing temperature', function(){
    it('can increase the temperature by 1', function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });

    it('can increase the temperature by 3', function(){
      thermostat.increaseTemperatureBy(3);
      expect(thermostat.temperature).toEqual(23);
    });

    it('can decrease the temperature by 1', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });

    it('can decrease the temperature by 3', function(){
      thermostat.decreaseTemperatureBy(3);
      expect(thermostat.temperature).toEqual(17);
    });
  });

  describe('toggling power save mode', function(){
    it('power save mode can be toggled off', function(){
      expect(thermostat.togglePowerOff()).toBe(false);
    });

    it('power save mode can be toggled on', function(){
      expect(thermostat.togglePowerOn()).toBe(true);
    });
  });

  describe('maximum and minimum temperatures', function(){
    it('maximum temperature is set at 32 if power save mode is off', function(){
      thermostat.togglePowerOff();
      expect(thermostat.maximumTemperature()).toEqual(32);
    });

    it('cannot decrease more than 10 degrees', function(){
      thermostat.decreaseTemperatureBy(10);
      expect(thermostat.decreaseTemperature()).toEqual(10);
    });

    it('cannot increase more than 25 if the power save mode is on', function(){
      thermostat.increaseTemperatureBy(5);
      expect(thermostat.increaseTemperature()).toEqual(25);
    });

    it('cannot increase more than 32 if the power save mode is off', function(){
      thermostat.togglePowerOff();
      thermostat.increaseTemperatureBy(12);
      expect(thermostat.increaseTemperature()).toEqual(32);
    });
  });
});