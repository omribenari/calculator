import { act } from 'react-dom/test-utils';
import { useStore } from './useStore';

describe('useStore', () => {
  beforeEach(() => {
    // Reset the store state after each test
    useStore.setState((state) => ({
      ...state,
      user: null,
      displayValue: '',
      isResult: false,
      log: [],
    }));
  });

  test('initial state', () => {
    const store = useStore.getState();

    expect(store.user).toBeNull();
    expect(store.displayValue).toBe('');
    expect(store.isResult).toBe(false);
    expect(store.log).toEqual([]);
  });

  test('setUser action', () => {
    const newUser = {
      name: 'Omri',
      email: 'omri79@gmail.com',
      password: 'Omri1234',
    };

    act(() => {
      useStore.getState().setUser(newUser);
    });

    const store = useStore.getState();

    expect(store.user).toBe(newUser);
  });

  test('setResult action', () => {
    const resultValue = '42';

    act(() => {
      useStore.getState().setResult(resultValue);
    });

    const store = useStore.getState();

    expect(store.displayValue).toBe(resultValue);
    expect(store.isResult).toBe(true);
  });

  test('calcType action', () => {
    const value = '5';

    act(() => {
      useStore.getState().calcType(value);
    });

    const store = useStore.getState();

    expect(store.displayValue).toBe(value);
  });

  test('calcClear action', () => {
    const value = '5';

    act(() => {
      useStore.getState().calcType(value);
    });

    act(() => {
      useStore.getState().calcClear();
    });

    const store = useStore.getState();

    expect(store.displayValue).toBe('');
    expect(store.isResult).toBe(false);
  });

  test('addLog action', () => {
    const values = ['5', '+', '3'];

    act(() => {
      values.forEach((value) => {
        useStore.getState().addLog(value);
      });
    });

    const store = useStore.getState();
    expect(store.log).toEqual(values);
  });

  test('clearLog action', () => {
    const values = ['5', '+', '3'];

    act(() => {
      values.forEach((value) => {
        useStore.getState().addLog(value);
      });
    });

    act(() => {
      useStore.getState().clearLog();
    });

    const store = useStore.getState();
    expect(store.log).toEqual([]);
  });
});
