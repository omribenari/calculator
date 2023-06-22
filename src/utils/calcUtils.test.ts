import { evaluate, format } from 'mathjs';
import CalcUtils from './calcUtils';

jest.mock('mathjs', () => ({
  evaluate: jest.fn(),
  format: jest.fn(),
}));

describe('CalcUtils', () => {
  describe('evaluateExpression', () => {
    test('returns empty string when expression is empty', () => {
      const result = CalcUtils.evaluateExpression('');
      expect(result).toBe('');
    });

    test('calls evaluate and format with the expression', () => {
      (evaluate as jest.Mock).mockReturnValue(4);
      (format as jest.Mock).mockReturnValue('4');

      const result = CalcUtils.evaluateExpression('2 + 2');

      expect(evaluate).toHaveBeenCalledWith('2 + 2');
      expect(format).toHaveBeenCalledWith(4, { precision: 14 });
      expect(result).toBe('4');
    });
  });

  describe('canAddOperator', () => {
    test('returns false when expression is empty', () => {
      const result = CalcUtils.canAddOperator('');
      expect(result).toBe(false);
    });

    test('returns false when last character is an operator', () => {
      const result = CalcUtils.canAddOperator('2+');
      expect(result).toBe(false);
    });

    test('returns true when last character is not an operator', () => {
      const result = CalcUtils.canAddOperator('2');
      expect(result).toBe(true);
    });
  });

  describe('canAddDecimal', () => {
    test('returns true when expression is empty', () => {
      const result = CalcUtils.canAddDecimal('');
      expect(result).toBe(true);
    });

    test('returns false when last character is a decimal', () => {
      const result = CalcUtils.canAddDecimal('2.5');
      expect(result).toBe(false);
    });

    test('returns true when last character is not a decimal', () => {
      const result = CalcUtils.canAddDecimal('2');
      expect(result).toBe(true);
    });
  });
});
