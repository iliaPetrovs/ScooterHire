const fs = require("fs");

/**
 * The hiring system responsible for managing the available scooters
 */
class ScooterHireSystem {
    availableScooters;
    name;
    
    /**
     * Generates a hiring system with a list of available scooters
     */
    constructor(name) {
        this.name = name;
        this.getAvailableScooters();
    }

    /**
     * Checks list of available scooters and returns an ID
     */
    checkForScooter() {

    }

    async getAvailableScooters() {
        await fs.readFile(__dirname + '/../resources/MOCK_DATA.json', (err, data) => {
            if (err) throw err;
            const myData = JSON.parse(data);
            this.availableScooters = myData;
        })
    }

}

module.exports = ScooterHireSystem;