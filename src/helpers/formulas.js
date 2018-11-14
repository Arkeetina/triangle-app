export const getTriangleTypeByAngle = (sidesArray) => {
  if (sidesArray.length > 3) return '';

  const squaredSidesArray = sidesArray.map(number => number * number);
  const max = Math.max(...squaredSidesArray);
  const minSides = squaredSidesArray.filter(number => number !== max);

  if (max > minSides[0] + minSides[1]) return 'Obtuse';
  if (max === minSides[0] + minSides[1]) return 'Right';
  return 'Acute';
};

export const getTriangleTypeBySide = (sidesArray) => {
  if (sidesArray.length > 3) return '';

  const sortSidesArray = sidesArray.sort();
  const allSidesEqual = sortSidesArray.every(side => side === sidesArray[0]);
  const someSidesEqual = sortSidesArray[0] === sortSidesArray[1]
    || sortSidesArray[1] === sortSidesArray[2];

  if (allSidesEqual) return 'Equilateral';
  if (someSidesEqual) return 'Isosceles';
  return 'Scalene';
};
