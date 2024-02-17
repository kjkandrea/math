/**
 * Calculates the sum of the interior angles of a polygon.
 *
 * @param {number} polygonSides - The number of vertices in the polygon.
 * @returns {number} The sum of the interior angles of the polygon in degrees.
 * @throws {Error} If the number of vertices is less than or equal to 2.
 */
export function sumOfInteriorAngles(polygonSides) {
  if (2 >= polygonSides) {
    throw new Error("The number of sides must be greater than 2");
  }

  return (polygonSides - 2) * 180;
}
