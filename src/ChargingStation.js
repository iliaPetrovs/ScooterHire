/**
 * The charging system that charges, locks and releases scooters
 */
class ChargingStations {
	costToHire;

	constructor() {
		this.costToHire = 5;
	}

	/**
	 * Charge the battery of the scooter
	 */
	// chargeScooter(scooter) {
	// 	console.log("Charge in progress...");
	// 	while (scooter.battery.chargePower < 100) {
	// 		setTimeout(() => {
	// 			scooter.battery.chargePower += 10;
	// 			if (scooter.battery.chargePower > 100)
	// 				scooter.battery.chargePower = 100;
	// 			console.log("Charge power is at " + scooter.battery.chargePower);
	// 		}, 1000 * scooter.battery.chargePower);
	// 	}
	// 	console.log("Scooter is fully charged");
	// }

	/**
	 * Charge the battery of the scooter
	 * @param {Scooter} scooter scooter used by customer
	 */
	chargeScooter(scooter) {
		console.log("Charge in progress...");
		setTimeout(() => {
			scooter.battery.chargePower = 100;
			console.log("Fully charged");
			return "Charged";
		}, 2000);
	}

	/**
	 * Release scooter for customer to use
	 */
	releaseScooter(scooter) {
		console.log("Enjoy using the scooter");
		scooter.isReleased = true;
	}

	/**
	 * Lock scooter until it is fully charged and hired by a customer
	 */
	lockScooter(scooter) {
		console.log("Thank you for returning the scooter");
		scooter.isReleased = false;
	}
}

module.exports = ChargingStations;
