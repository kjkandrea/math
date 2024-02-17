const calcVolume = {
  cylinder(radius, height) {
    if (radius <= 0 || height <= 0) {
      throw new Error('Radius and height must be positive');
    }

    return radius ** 2 * height * Math.PI
  },
  cone(radius, height) {
    if (radius <= 0 || height <= 0) {
      throw new Error('Radius and height must be positive');
    }

    return radius ** 2 * height * Math.PI * (1 / 3)
  },
  sphere(radius) {
    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }

    return radius ** 3 * Math.PI * (4 / 3)
  }
}
