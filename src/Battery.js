/**
 * Battery used by the Scooter
 */
class Battery {
	// isDepleted;
	chargePower;
	speedOfDepletion;

	constructor(speedOfDepletion) {
		this.chargePower = 100;
		this.speedOfDepletion = 10 & speedOfDepletion;
		// this.isDepleted = false;
	}

	/**
	 * Deplete the battery power every time scooter is used
	 */
	depleteCharge() {
		// if (this.isDepleted) return;
		if (this.chargePower > 1) {
			this.chargePower -= this.speedOfDepletion;
			return;
		}
		// if (this.chargePower < 0)
		console.log("we here");
		// this.isDepleted = true;
		return;
		// } else {
		// 	this.chargePower -= this.speedOfDepletion;
		// }
	}
}

module.exports = Battery;
