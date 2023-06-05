import { KoreanOpenDictionaryService } from '.';

export const lookUpWords = async () => {
  const { data } = await KoreanOpenDictionaryService.get('/api/search', {
    params: {
      key: process.env.NEXT_PUBLIC_OPEN_DICT_KEY || '',
      q: '안녕',
      req_type: 'json',
      part: 'word',
      sort: 'popular',
      advanced: 'n',
    },
  });

  return data;
};
