const { exportAllDeclaration } = require("@babel/types");
const { expect } = require("@jest/globals");
const Scooter = require("../src/Scooter");

describe("Scooter", () => {
	const scooter = new Scooter(5);
	test("constructs properly", () => {
		expect.assertions(3);
		expect(scooter.speed).toEqual(5);
		expect(scooter.battery.chargePower).toEqual(100);
		expect(scooter.shs).toBeDefined();
	});
	test("goes forward", () => {
		expect(scooter.goForward()).toEqual("Go forward");
	});
	test("can't go forward on no charge", () => {
		scooter.battery.chargePower = 0;
		expect(() => scooter.goForward()).toThrowError("No charge");
	});
	test("generates scooters", () => {
		expect(scooter.generateScooter()).toEqual("Generated scooters");
	});
});
