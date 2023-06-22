import { evaluate, format } from 'mathjs';
const operators = ['*', '+', '-', '%'];

export default class CalcUtils {
  static evaluateExpression(expression: string) {
    if (expression === '') return expression;
    return format(evaluate(expression), { precision: 14 });
  }
  static canAddOperator(expression: string) {
    return expression.length > 0 && !operators.includes(expression.slice(-1));
  }

  static canAddDecimal(expression: string = '') {
    try {
      const regex = /[0-9]*[.]+[0-9]*$/gm;
      const found = expression.match(regex) || [];
      return found.length === 0;
    } catch (e) {
      return false;
    }
  }
}
