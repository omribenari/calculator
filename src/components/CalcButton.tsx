import { Text } from '@mantine/core';
import { useStore } from '../store/useStore';
import { showErrorToast } from '../utils/Toast';
import { createStyles } from '@mantine/core';
import CalcUtils from '../utils/calcUtils';

const useStyles = createStyles((theme) => ({
  calcButton: {
    backgroundColor: theme.colors.gray[3],
    color: theme.colors.gray[9],
    fontSize: 24,
    height: 70,
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.colors.gray[4],
    },

    '&:active': {
      backgroundColor: theme.colors.gray[2],
      borderStyle: 'solid',
    },
  },
}));

function CalcButton({ text }: { text: string }) {
  const { classes } = useStyles();
  const { calcType, addLog, calcClear, displayValue, setResult, isResult } =
    useStore();
  const clickHandler = () => {
    addLog(text);
    if (isResult) {
      calcClear();
    } else {
      switch (text) {
        case '=': {
          try {
            let result = CalcUtils.evaluateExpression(displayValue);
            setResult(result);
          } catch (e) {
            if (e instanceof Error) showErrorToast(e.message);
          }
          break;
        }
        case 'AC': {
          calcClear();
          break;
        }
        case '*':
        case '+':
        case '-':
        case '%': {
          if (CalcUtils.canAddOperator(displayValue)) {
            calcType(text);
          }
          break;
        }
        case '.': {
          if (CalcUtils.canAddDecimal(displayValue ?? '')) {
            calcType(text);
          }
          break;
        }
        default:
          calcType(text);
      }
    }
  };
  return (
    <Text
      fw={700}
      className={classes.calcButton}
      onClick={clickHandler}
      title={text}
    >
      {text}
    </Text>
  );
}

export default CalcButton;
