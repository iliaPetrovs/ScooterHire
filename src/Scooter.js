/**
 * The Scooter used by customer when hired from the Charging Station
 */
class Scooter {
    speed;

    /**
     * Different scooter models have different speeds
     * @param {int} speed in km/h
     */
    constructor(speed) {
        this.speed = speed;
    }

    /**
     * Makes the scooter go forward and use up battery charge
     */
    goForward() {

    }

    /**
     * Stops the scooter when the battery charge is depleted
     */
    stop() {

    }

}

module.exports = Scooter;