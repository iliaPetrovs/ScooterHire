const { expect } = require("@jest/globals");
const Customer = require("../src/Customer");

describe("Customer", () => {
	const customer = new Customer();
	test("constructs properly", () => {
		expect(customer.money).toEqual(20);
	});
	test("throws error when using scooter without one assigned", () => {
		expect(() => {
			customer.useScooter();
		}).toThrow("Can't use scooter as you don't have one!");
	});
	// test("makes the scooter go forward until battery is depleted", () => {
	// 	customer.hireScooter(5);
	// 	// expect(customer.scooterInPossesion).toBeDefined();
	// 	// expect(customer.useScooter()).toEqual(
	// 	// 	"Return Scooter back to charging station"
	// 	// );
	// 	expect(customer.scooterInPossesion).toBeDefined();
	// });
	// test("can hire a scooter", () => {
	// 	expect(customer.hireScooter(5)).toBeDefined();
	// });
});
