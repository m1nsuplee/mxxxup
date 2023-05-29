import {
  useCallback,
  useEffect,
  useState,
  SetStateAction,
  Dispatch,
} from 'react';
import { debounce } from 'lodash';

const DEBOUNCE_SAVE_DELAY_MS = 1000;

export const useAutosave = <T>(
  key: string,
  dataToSave: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [data, setData] = useState<T>(dataToSave);

  const saveData = useCallback((newData: T) => {
    window.localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  }, []);

  const debouncedSave = useCallback(
    debounce(async (newData: T) => {
      saveData(newData);
    }, DEBOUNCE_SAVE_DELAY_MS),
    []
  );

  useEffect(() => {
    if (data || data === 0) {
      debouncedSave(data);
    }
  }, [data, debouncedSave]);

  return [data, setData];
};
