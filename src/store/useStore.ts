import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../auth/auth';

interface Store {
  user: User | null;
  setUser: (user: User | null) => void;
  displayValue: string;
  isResult: boolean;
  setResult: (value: string) => void;
  calcType: (value: string) => void;
  calcClear: () => void;
  log: Array<string>;
  addLog: (value: string) => void;
  clearLog: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      user: null,
      isResult: false,
      setUser: (user) => set(() => ({ user })),
      displayValue: '',
      setResult: (value) =>
        set(() => ({ displayValue: value, isResult: true })),
      calcType: (value) =>
        set(() => ({ displayValue: get().displayValue + value })),
      calcClear: () => set(() => ({ displayValue: '', isResult: false })),
      log: [],
      addLog: (value) => {
        let log = [...get().log, value];
        if (log.length > 20) {
          log = log.slice(-20);
        }
        set(() => ({ log: log }));
      },
      clearLog: () => set(() => ({ log: [] })),
    }),
    {
      name: 'calc-store',
    }
  )
);
