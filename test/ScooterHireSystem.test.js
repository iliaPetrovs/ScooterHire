const { describe, expect } = require("@jest/globals");
const ScooterHireSystem = require("../src/ScooterHireSystem");

describe("Scooter hiring system", () => {
  test("reads scooter data", () => {
    const shs = new ScooterHireSystem();
    // await expect(shs.availableScooters.length).resolves.toBeGreaterThan(20);
    expect.assertions(1);
    return expect(shs.getAllScooters()).resolves.toBeDefined();
    // expect(length).toBeGreaterThan(2);
  });
  test("finds available scooter", () => {
    setTimeout(() => {
      const scooter = shs.checkForScooter();
      console.log("AAAAAAAAAAAAA" + scooter.model);
      expect(scooter.available).toBeTruthy();
    }, 10);
  });
});
