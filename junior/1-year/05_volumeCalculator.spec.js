import { describe, expect, it } from "@jest/globals";
import { calcVolume } from "./05_volumeCalculator";

describe("calcVolume", () => {
  it("calcCylinderVolume", () => {
    expect(calcVolume.calcCylinderVolume(3, 5)).toBe(3 ** 2 * Math.PI * 5);
  });

  it("calcConeVolume", () => {
    expect(calcVolume.calcConeVolume(3, 5)).toBe(
      3 ** 2 * Math.PI * 5 * (1 / 3),
    );
  });

  it("calcSphereVolume", () => {
    expect(calcVolume.calcSphereVolume(3)).toBe(3 ** 3 * Math.PI * (4 / 3));
  });
});
