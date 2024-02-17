import { describe, expect, it } from "@jest/globals";
import { calcVolume } from "./05_volumeCalculator";

describe("calcVolume", () => {
  describe("calcCylinderVolume", () => {
    it("calculates correctly for positive radius and height", () => {
      expect(calcVolume.calcCylinderVolume(3, 5)).toBe(3 ** 2 * Math.PI * 5);
    });

    it("throws an error for radius or height less than 0", () => {
      expect(() => calcVolume.calcCylinderVolume(0, -5)).toThrow();
    });
  });

  describe("calcConeVolume", () => {
    it("calculates correctly for positive radius and height", () => {
      expect(calcVolume.calcConeVolume(3, 5)).toBe(
        3 ** 2 * Math.PI * 5 * (1 / 3),
      );
    });

    it("throws an error for radius or height less than 0", () => {
      expect(() => calcVolume.calcConeVolume(0, -5)).toThrow();
    });
  });

  describe("calcSphereVolume", () => {
    it("calculates correctly for positive radius", () => {
      expect(calcVolume.calcSphereVolume(3)).toBe(3 ** 3 * Math.PI * (4 / 3));
    });

    it("throws an error for radius less than 0", () => {
      expect(() => calcVolume.calcSphereVolume(0)).toThrow();
    });
  });
});
