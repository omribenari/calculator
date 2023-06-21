import { Text } from '@mantine/core';
import { useStore } from '../store/useStore';
import { evaluate } from 'mathjs';

function CalcButton({ text }: { text: string }) {
  const { calcType, addLog, calcClear, displayValue, setResult } = useStore();
  const clickHandler = () => {
    addLog(text);
    switch (text) {
      case '=': {
        try {
          const result = evaluate(displayValue);
          setResult(result);
        } catch (e) {
          if (e instanceof Error) alert(e.message);
        }
        break;
      }
      case 'AC': {
        calcClear();
        break;
      }
      default:
        calcType(text);
    }
  };
  return (
    <Text
      fw={700}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[5]
            : theme.colors.gray[3],
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.gray[5]
            : theme.colors.gray[9],
        fontSize: 24,
        height: 70,
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      })}
      onClick={clickHandler}
      title={text}
    >
      {text}
    </Text>
  );
}

export default CalcButton;
