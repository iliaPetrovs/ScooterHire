const Scooter = require("./Scooter");
const ChargingStation = require("./ChargingStation");
/**
 * The Customer who hires the Scooter
 */
class Customer {
	money;
	scooterInPossesion;

	/**
	 * How much money the customer has in order to hire a scooter
	 */
	constructor() {
		this.money = 20;
	}

	/**
	 * Pick scooter with specified speed. Give money to chargingStation to hire scooter
	 */
	hireScooter(speed) {
		const hiredScooter = new Scooter(speed);
		hiredScooter.generateScooter();
		console.log(hiredScooter);
		if (hiredScooter.cost > this.money) {
			return "You don't have enough money";
		} else {
			this.scooterInPossesion = hiredScooter;
		}
		// this.scooterInPossesion = new Scooter(speed);
	}

	/**
	 * Dock scooter back at the chargingStation when finished
	 */
	dockScooter() {
		const station = new ChargingStation();
		station.lockScooter(this.scooterInPossesion);
	}

	/**
	 * Use scooter until charge is depleted
	 */
	useScooter() {
		if (!this.scooterInPossesion) {
			throw new Error("Can't use scooter as you don't have one!");
		}
		while (!this.scooterInPossesion.batteryDepleted) {
			this.scooterInPossesion.goForward();
		}
		return "Return Scooter back to charging station";
	}
}

module.exports = Customer;
