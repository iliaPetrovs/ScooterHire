const { expect } = require("@jest/globals");
const ChargingStation = require("../src/ChargingStation");
const Scooter = require("../src/Scooter");

jest.useFakeTimers();

describe("Scooter charging station", () => {
	const chargingStation = new ChargingStation();
	const scooter = new Scooter(5);
	test("releases scooter", () => {
		expect.assertions(2);
		expect(scooter.isReleased).toBeFalsy();
		chargingStation.releaseScooter(scooter);
		expect(scooter.isReleased).toBeTruthy();
	});
	test("locks scooter", () => {
		scooter.isReleased = true;
		expect(scooter.isReleased).toBeTruthy();
		chargingStation.lockScooter(scooter);
		expect(scooter.isReleased).toBeFalsy();
	});
	test("charges scooter", () => {
		expect.assertions(1);
		scooter.battery.chargePower = 2;
		chargingStation.chargeScooter(scooter);
		setTimeout(() => {
			expect(scooter.battery.chargePower).toEqual(100);
			// expect(chargingStation.chargeScooter(scooter)).toEqual("Charged");
		}, 2000);
		jest.runAllTimers();
	});
	test("SetTimeout function", () => {
		chargingStation.chargeScooter(scooter);
		expect(setTimeout).toHaveBeenCalledTimes(3);
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
	});
});
