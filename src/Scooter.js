const Battery = require("./Battery");
const ScooterHireSystem = require("./ScooterHireSystem");
/**
 * The Scooter used by customer when hired from the Charging Station
 */
class Scooter {
	name;
	mode;
	speed;
	battery;
	batteryDepleted;
	shs;

	/**
	 * Different scooter models have different speeds
	 * @param {int} speed in km/h
	 */
	constructor(speed) {
		this.speed = speed;
		this.battery = new Battery();
		this.batteryDepleted = false;
		this.shs = new ScooterHireSystem();
	}

	/**
	 * Makes the scooter go forward and use up battery charge
	 */
	goForward() {
		if (this.battery.chargePower < 1) {
			this.batteryDepleted = true;
			this.stop();
		} else {
			this.battery.depleteCharge();
			console.log("That's a fast scooter!");
		}
		// console.log(this.battery.isDepleted);
		// console.log(this.battery.chargePower);
	}

	/**
	 * Stops the scooter when the battery charge is depleted
	 */
	stop() {
		console.log("battery depleted");
	}

	async generateScooter() {
		const scooter = this.shs.availableScooters.find(
			(item) => item.speed > this.speed && item.available
		);
		this.name = scooter.name;
		this.model = scooter.model;
	}
}

module.exports = Scooter;
