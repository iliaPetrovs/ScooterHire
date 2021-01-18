const { describe, expect } = require("@jest/globals");
const ScooterHireSystem = require("../src/ScooterHireSystem");

jest.useFakeTimers();

describe("Scooter hiring system", () => {
	const shs = new ScooterHireSystem();
	test("reads scooter data", () => {
		// await expect(shs.availableScooters.length).resolves.toBeGreaterThan(20);
		expect.assertions(1);
		return expect(shs.getAllScooters()).resolves.toBeDefined();
		// expect(length).toBeGreaterThan(2);
	});
	test("finds available scooter", () => {
		setTimeout(() => {
			const scooter = shs.checkForScooter(5);
			console.log(shs.checkForScooter());
			expect(scooter.available).toBeTruthy();
		}, 1000);
		jest.runAllTimers();
	});
});
