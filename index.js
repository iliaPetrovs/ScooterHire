const ScooterHireSystem = require("./src/ScooterHireSystem");
const Battery = require("./src/Battery");
const Scooter = require("./src/Scooter");
const ChargingStation = require("./src/ChargingStation");
const Customer = require("./src/Customer");
const { slategray } = require("color-name");

const shs = new ScooterHireSystem();
const peter = new Customer();
const battery = new Battery();
const scoot = new Scooter(5);
// scoot.generateScooter();

setTimeout(() => {
	// console.log(shs.checkForScooter());
	// shs.checkForScooter();
	// console.log(shs.availableScooters.filter((item) => item.id == 6));
	console.log(shs.availableScooters.length);
	console.log(scoot.generateScooter());
	scoot.goForward();
	scoot.goForward();
	scoot.goForward();
	//   scoot.goForward();
	// console.log(scoot.name);
}, 10);

// console.log(peter.money);
// peter.hireScooter()
