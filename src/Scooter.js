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
	isReleased;

	/**
	 * Different scooter models have different speeds
	 * @param {int} speed in km/h
	 */
	constructor(speed) {
		this.speed = speed;
		this.battery = new Battery(speed);
		this.batteryDepleted = false;
		this.shs = new ScooterHireSystem();
		this.isReleased = false;
	}

	/**
	 * Makes the scooter go forward and use up battery charge
	 */
	goForward() {
		if (this.battery.chargePower < 1) {
			this.batteryDepleted = true;
			this.stop();
			throw new Error("No charge");
		} else {
			this.battery.depleteCharge();
			console.log("That's a fast scooter!");
			return "Go forward";
		}
	}

	/**
	 * Stops the scooter when the battery charge is depleted
	 */
	stop() {
		console.log("battery depleted");
	}

	/**
	 * Selects the first available scooter with the specified speed requirements to be passed to customer
	 */
	generateScooter() {
		const scooter = this.shs.availableScooters.find(
			(item) => item.speed > this.speed && item.available
		);
		this.name = scooter.scooter_name;
		this.model = scooter.model;
		return "Scooters generated";
	}
}

module.exports = Scooter;
