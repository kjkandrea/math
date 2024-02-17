const calcVolume = {
  /**
   * Calculates the volume of a cylinder.
   *
   * @param {number} radius - The radius of the cylinder.
   * @param {number} height - The height of the cylinder.
   * @returns {number} The volume of the cylinder.
   * @throws {Error} If radius or height is less than or equal to zero.
   */
  calcCylinderVolume(radius, height) {
    if (radius <= 0 || height <= 0) {
      throw new Error('Radius and height must be positive');
    }

    return radius ** 2 * height * Math.PI
  },
  /**
   * Calculates the volume of a cone.
   *
   * @param {number} radius - The radius of the cone.
   * @param {number} height - The height of the cone.
   * @returns {number} The volume of the cone.
   * @throws {Error} If radius or height is less than or equal to zero.
   */
  calcConeVolume(radius, height) {
    if (radius <= 0 || height <= 0) {
      throw new Error('Radius and height must be positive');
    }

    return radius ** 2 * height * Math.PI * (1 / 3)
  },
  /**
   * Calculates the volume of a sphere.
   *
   * @param {number} radius - The radius of the sphere.
   * @returns {number} The volume of the sphere.
   * @throws {Error} If radius is less than or equal to zero.
   */
  calcSphereVolume(radius) {
    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }

    return radius ** 3 * Math.PI * (4 / 3)
  }
}
