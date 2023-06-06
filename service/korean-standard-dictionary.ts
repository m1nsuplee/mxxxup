import service from '.';

export const lookUpWords = async () => {
  const {
    data: { data },
  } = await service.get<LookUpWordsResponse>(
    '/api/korean-standard-dictionary/look-up-words'
  );

  const { channel } = data;

  const { item: words } = channel;

  return words;
};
