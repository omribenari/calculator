import React from 'react';
import { useStore } from '../store/useStore';
import { Button, Container, Flex, Stack } from '@mantine/core';

const HistoryPage = () => {
  const { log, clearLog } = useStore();
  const list = log.map((item, index) => {
    return <div key={index}>{`${index}. ${item}`}</div>;
  });

  return (
    <>
      <Stack align="flex-start" justify="flex-start" mx="lg">
        {list}
      </Stack>
      <Flex justify="center" align="center" direction="row" wrap="wrap">
        <Button variant="light" onClick={() => clearLog()}>
          Clear History
        </Button>
      </Flex>
    </>
  );
};

export default HistoryPage;
