/**
 * The Customer who hires the Scooter
 */
class Customer {
    money;

    /**
     * How much money the customer has in order to hire a scooter
     */
    constructor() {
        this.money = 20;
    }

    /**
     * Give money to chargingStation to hire scooter
     */
    hireScooter() {
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