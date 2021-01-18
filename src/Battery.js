/**
 * Battery used by the Scooter
 */
class Battery {
	// isDepleted;
	chargePower;
	speedOfDepletion;

	/**
	 *
	 * @param {int} speedOfDepletion the faster the scooter, the faster the battery depletes
	 */
	constructor(speedOfDepletion) {
		this.chargePower = 100;
		this.speedOfDepletion = 10 * speedOfDepletion;
		// this.isDepleted = false;
	}

	/**
	 * Deplete the battery power every time scooter is used
	 */
	depleteCharge() {
		if (this.chargePower > 1) {
			this.chargePower -= this.speedOfDepletion;
			return;
		}
		return;
	}
}

module.exports = Battery;
