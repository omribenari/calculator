import { Container, Grid } from '@mantine/core';
import CalcDisplay from './CalcDisplay';
import CalcButton from './CalcButton';

const Calculator = () => {
  return (
    <Container w={300} mx="auto">
      <Grid gutter={3}>
        <Grid.Col span={12}>
          <CalcDisplay />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="7" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="8" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="9" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="*" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="4" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="5" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="6" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="%" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="1" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="2" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="3" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="+" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="0" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="." />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="AC" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CalcButton text="=" />
        </Grid.Col>
        <Grid.Col span={12}></Grid.Col>
      </Grid>
    </Container>
  );
};

export default Calculator;
