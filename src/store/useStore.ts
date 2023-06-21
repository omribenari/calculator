import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../auth/auth';

interface Store {
  user: User | null;
  setUser: (user: User | null) => void;
  displayValue: string;
  setResult: (value: string) => void;
  calcType: (value: string) => void;
  calcClear: () => void;
  log: Array<string>;
  addLog: (value: string) => void;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set(() => ({ user })),
      displayValue: '',
      setResult: (value) => set(() => ({ displayValue: value })),
      calcType: (value) =>
        set(() => ({ displayValue: get().displayValue + value })),
      calcClear: () => set(() => ({ displayValue: '' })),
      log: [],
      addLog: (value) => {
        let log = [...get().log, value];
        if (log.length > 20) {
          log = log.slice(-20);
        }
        set(() => ({ log: log }));
      },
    }),
    {
      name: 'calc-store',
    }
  )
);
