/**
 * Battery used by the Scooter
 */
class Battery {
    isDepleted;
    chargePower;
    speedOfDepletion;

    constructor() {
        this.chargePower = 100;
        this.speedOfDepletion = 20;
    }

    /**
     * Deplete the battery power every time scooter is used
     */
    depleteCharge() {
        if (this.isDepleted) return;
        if (this.chargePower <= 0) this.isDepleted = true;
        this.chargePower -= this.speedOfDepletion;
    }

}

module.exports = Battery;