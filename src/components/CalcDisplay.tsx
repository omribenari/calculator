import { Text } from '@mantine/core';
import { useStore } from '../store/useStore';

function CalcDisplay() {
  const { displayValue } = useStore();
  return (
    <Text
      title={displayValue}
      ta="right"
      size={36}
      px={5}
      lineClamp={1}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[2],
        color: theme.colors.gray[9],
        height: 55,
        borderRadius: 2,
      })}
    >
      {displayValue}
    </Text>
  );
}

export default CalcDisplay;
