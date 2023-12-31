import React, { useCallback, useMemo } from 'react';
import { useStore } from '../store/useStore';
import { Button, Flex, List, Badge } from '@mantine/core';

const HistoryPage = () => {
  const { log, clearLog } = useStore();
  const list = useMemo(
    () =>
      log.map((item, index) => {
        return (
          <List.Item key={index}>
            <Badge variant="filled" size="lg" w={50}>
              {item}
            </Badge>
          </List.Item>
        );
      }),
    [log]
  );

  const clearLogHandler = useCallback(() => {
    clearLog();
  }, [clearLog]);

  return (
    <>
      <List type="ordered" withPadding size="lg">
        {list}
      </List>
      <Flex justify="center" align="center" direction="row" wrap="wrap">
        <Button variant="light" onClick={clearLogHandler}>
          Clear History
        </Button>
      </Flex>
    </>
  );
};

export default HistoryPage;
