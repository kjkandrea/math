import { describe, expect, it } from "@jest/globals";
import { sumOfInteriorAngles } from "./05_sumOfInteriorAngles";

describe("sumOfInteriorAngles", () => {
  it("calculates correctly for positive polygon sides", () => {
    expect(sumOfInteriorAngles(102)).toBe(100 * 180);
  });

  it("throws an error for polygon sides less than or equal to 2", () => {
    expect(() => sumOfInteriorAngles(2)).toThrow();
  });
});
