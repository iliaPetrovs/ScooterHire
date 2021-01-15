const fs = require("fs");

/**
 * The hiring system responsible for managing the available scooters
 */
class ScooterHireSystem {
	static availableScooters;

	/**
	 * Generates a hiring system with a list of available scooters
	 */
	constructor() {
		this.getAllScooters();
	}

	/**
	 * Checks list of available scooters and returns an ID
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
