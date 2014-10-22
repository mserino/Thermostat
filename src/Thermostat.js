function Thermostat(){
	this.temperature = 20;
	this.powerSaveMode = true;
};

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1)
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if (this.temperature === this.maximumTemperature()) {
		return (this.temperature = this.maximumTemperature())
	} else {
		return (this.temperature += degrees)
	}
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1)
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if (this.temperature === this.minimumTemperature()) {
		return (this.temperature = this.minimumTemperature())
	}	else {
		return (this.temperature -= degrees)
	}
};

Thermostat.prototype.maximumTemperature = function() {
	return (this.powerSaveMode) ? 25 : 32
};

Thermostat.prototype.minimumTemperature = function() {
	return 10;
};

Thermostat.prototype.togglePowerOff = function() {
	return this.powerSaveMode = false;
};

Thermostat.prototype.togglePowerOn = function() {
	return this.powerSaveMode = true;
};