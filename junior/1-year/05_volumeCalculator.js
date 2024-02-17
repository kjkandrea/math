const calcVolume = {
  cylinder(radius, height) {
    return radius ** 2 * height * Math.PI
  },
  cone(radius, height) {
    return radius ** 2 * height * Math.PI * (1/3)
  },
  sphere(radius) {
    return radius ** 3 * Math.PI * (4/3)
  }
}
