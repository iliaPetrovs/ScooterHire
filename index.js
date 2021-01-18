const ScooterHireSystem = require("./src/ScooterHireSystem");
const Battery = require("./src/Battery");
const Scooter = require("./src/Scooter");
const ChargingStation = require("./src/ChargingStation");
const Customer = require("./src/Customer");
const { mainModule } = require("process");
const shs = new ScooterHireSystem();
const peter = new Customer();
const battery = new Battery();
const scoot = new Scooter(5);
const cs = new ChargingStation();
// scoot.generateScooter();

async function main() {
	await shs.getAllScooters();
	// console.log(shs.checkForScooter());
	// shs.checkForScooter();
	// console.log(shs.availableScooters.filter((item) => item.id == 6));
	// scoot.generateScooter();
	// console.log(shs.availableScooters.length);
	// console.log(scoot.shs.availableScooters.length);
	// console.log(scoot.name);
	// console.log(scoot.model);
	// console.log(scoot.isReleased);
	// cs.releaseScooter(scoot);
	// cs.chargeScooter(scoot);
	console.log(shs.availableScooters);
}

main();

setTimeout(() => {
	// console.log(shs.checkForScooter());
	// shs.checkForScooter();
	// console.log(shs.availableScooters.filter((item) => item.id == 6));
	// scoot.generateScooter();
	// console.log(shs.availableScooters.length);
	// console.log(scoot.shs.availableScooters.length);
	// console.log(scoot.name);
	// console.log(scoot.model);
	// console.log(scoot.isReleased);
	// cs.releaseScooter(scoot);
	// cs.chargeScooter(scoot);
	// console.log(scoot.isReleased);
	// peter.hireScooter(3);
	// peter.useScooter();
	// console.log(scoot.test(battery));
	// console.log(cs.chargeScooter(scoot));
	// scoot.goForward();
	// scoot.goForward();
	// scoot.goForward();
	//   scoot.goForward();
	// console.log(scoot.name);
}, 10);

// console.log(peter.money);
// peter.hireScooter()
