function ThermostatView(element){
	this.el = $(element);
	this.thermostat = new Thermostat;
	this.el.text(this.thermostat.temperature);
	this.bindTo('.increase_temperature', this.thermostat, this.thermostat.increaseTemperature);
	this.bindTo('.decrease_temperature', this.thermostat, this.thermostat.decreaseTemperature);
	this.bindTo('.reset', this.thermostat, this.thermostat.resetTemperature);
};

ThermostatView.prototype.bindTo = function(selector, obj, func) {
	$(selector).on('click', function(){
		$('.temperature h1').text(func.call(obj));
	});
};

$(document).ready(function(){
	new ThermostatView('.temperature h1');

	// $('.temperature h1').text(thermostat.temperature);

	// $('.increase_temperature h1').on('click', function(){
	// 	$('.temperature h1').text(thermostat.increaseTemperature());
	// });

	// $('.decrease_temperature h1').on('click', function(){
	// 	$('.temperature h1').text(thermostat.decreaseTemperature());
	// })
});