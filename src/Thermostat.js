function Thermostat(){
	this.temperature = 20;
	this.isPowerSaverOn = true;
};

Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees;
	if (this.temperature > this.maximumTemperature()) {
		this.temperature = this.maximumTemperature();
	}
};

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees;
};

Thermostat.prototype.minimumTemperature = function() {
	return 10;
};

Thermostat.prototype.maximumTemperature = function() {
	return (this.isPowerSaverOn) ? 25 : 32
};

Thermostat.prototype.resetTemperature = function() {
	this.temperature = 20;
};