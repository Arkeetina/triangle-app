import {
  getTriangleTypeByAngle,
  getTriangleTypeBySide,
} from '../formulas';

describe('formulas', () => {
  describe('getTriangleTypeByAngle', () => {
    it('should return type Right for right triangles', () => {
      const type = getTriangleTypeByAngle([5, 12, 13]);
      expect(type).toBe('Right');
    });
    it('should return type Obtuse for obtuse triangles', () => {
      const type = getTriangleTypeByAngle([5, 12, 50]);
      expect(type).toBe('Obtuse');
    });
    it('should return type Acute for obtuse triangles', () => {
      const type = getTriangleTypeByAngle([1.1, 0.9, 1]);
      expect(type).toBe('Acute');
    });
    it('should return type empty string if there are more than 3 sides passed', () => {
      const type = getTriangleTypeByAngle([1.1, 0.9, 1, 5]);
      expect(type).toBe('');
    });
  });

  describe('getTriangleTypeBySide', () => {
    it('should return type Equilateral for equilateral triangles', () => {
      const type = getTriangleTypeBySide([3, 3, 3]);
      expect(type).toBe('Equilateral');
    });
    it('should return type Isosceles for isosceles triangles', () => {
      const type = getTriangleTypeBySide([3, 7, 3]);
      expect(type).toBe('Isosceles');
    });
    it('should return type Scalene for scalene triangles', () => {
      const type = getTriangleTypeBySide([2, 7, 3]);
      expect(type).toBe('Scalene');
    });
    it('should return type empty string if there are more than 3 sides passed', () => {
      const type = getTriangleTypeByAngle([1.1, 0.9, 1, 5, 8]);
      expect(type).toBe('');
    });
  });
});
