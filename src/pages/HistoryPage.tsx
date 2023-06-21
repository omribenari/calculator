import React from 'react';
import { useStore } from '../store/useStore';
import { Stack } from '@mantine/core';

const HistoryPage = () => {
  const { log } = useStore();
  const list = log.map((item, index) => {
    return <div key={index}>{`${index}. ${item}`}</div>;
  });

  return (
    <Stack align="flex-start" justify="flex-start">
      {list}
    </Stack>
  );
};

export default HistoryPage;
