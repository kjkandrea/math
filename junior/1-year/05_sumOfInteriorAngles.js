function sumOfInteriorAngles (vertices) {
  if (2 >= vertices) {
    throw new Error('The vertices must be greater than 2')
  }

  return (vertices - 2) * 180
}
