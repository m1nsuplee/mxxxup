import { lookUpWords } from '@/service/korean-standard-dictionary';
import { useQuery } from '@tanstack/react-query';

export const useLookUpWords = () => {
  return useQuery({
    queryKey: ['lookUpWords'],
    queryFn: async () => {
      const words = await lookUpWords();

      return words;
    },
  });
};
