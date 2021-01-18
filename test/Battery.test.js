const { expect } = require("@jest/globals");
const Battery = require("../src/Battery");

describe("Battery", () => {
	const battery = new Battery(10);
	test("construct battery class", () => {
		expect(battery.chargePower).toEqual(100);
	});
	test("depletes the battery", () => {
		battery.depleteCharge();
		expect(battery.chargePower).toEqual(0);
	});
	test("deplete battery with no charge", () => {
		battery.chargePower = 0;
		expect(battery.depleteCharge()).toEqual("Empty");
	});
});
