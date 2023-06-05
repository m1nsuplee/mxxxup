import { koreanOpenDictionaryAPIHost } from '@/lib';
import axios from 'axios';

const createService = (baseURL: string) => {
  const service = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return service;
};

export const KoreanOpenDictionaryService = createService(
  koreanOpenDictionaryAPIHost
);
