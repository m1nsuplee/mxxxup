import axios from 'axios';

export const lookUpWords = async () => {
  const {
    data: { data },
  } = await axios.get<LookUpWordsResponse>(
    '/api/korean-standard-dictionary/look-up-words',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const { channel } = data;

  const { item: words } = channel;

  return words;
};
