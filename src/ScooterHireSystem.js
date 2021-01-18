const fs = require("fs");

/**
 * The hiring system responsible for managing the available scooters
 */
class ScooterHireSystem {
	availableScooters;

	/**
	 * Generates a hiring system with a list of available scooters
	 */
	constructor() {
	}

	/**
	 * Checks list of available scooters and returns an ID
	 * @param {int} speed speed of scooter, 1-10
	 */
	checkForScooter(speed = 0) {
		this.availableScooters.filter((scooter) => {
			if (scooter.available) return scooter;
		});
	}

	// async getAllScooters() {
	//     await fs.readFile(__dirname + '/../resources/MOCK_DATA.json', (err, data) => {
	//         if (err) throw err;
	//         const myData = JSON.parse(data);
	//         this.availableScooters = myData;
	//     })
	// }

	/**
	 * Fetches all scooters from JSON data and adds them to available scooters
	 */
	getAllScooters() {
		return new Promise((resolve, reject) => {
			fs.readFile(__dirname + "/../resources/MOCK_DATA.json", (err, data) => {
				if (err) throw err;
				this.availableScooters = JSON.parse(data);
				resolve();
			});
		});
	}
}

module.exports = ScooterHireSystem;
