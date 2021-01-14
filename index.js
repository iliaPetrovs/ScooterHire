const ScooterHireSystem = require('./src/ScooterHireSystem');

const shs = new ScooterHireSystem('Hello');

setTimeout(() => {
    console.log(shs.availableScooters);
}, 200);