import { Text } from '@mantine/core';
import { useStore } from '../store/useStore';
import { evaluate, format } from 'mathjs';
import { showErrorToast } from '../utils/Toast';
import { createStyles } from '@mantine/core';

const operators = ['*', '+', '-', '%'];

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
            if (displayValue === '') return;
            let result = evaluate(displayValue);
            result = format(result, { precision: 14 });
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
          if (
            displayValue.length === 0 ||
            (displayValue.length > 0 &&
              operators.includes(displayValue.slice(-1)))
          ) {
            break;
          }
          calcType(text);
          break;
        }
        case '.': {
          if (displayValue.length > 0 && displayValue.slice(-1) === '.') {
            return;
          }
          calcType(text);
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
