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
    hireScooter(chargingStation) {
        
    }

    /**
     * Dock scooter back at the chargingStation when finished
     */
    dockScooter() {
    }

    /**
     * Use scooter until charge is depleted
     */
    useScooter() {
        
    }

}

module.exports = Customer;