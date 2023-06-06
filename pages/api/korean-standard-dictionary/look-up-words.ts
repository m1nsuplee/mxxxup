import { koreanStandardDictionaryAPIHost } from '@/lib';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request;

  if (method !== 'GET') {
    response.status(400).json({ message: 'bad requests.' });
  }

  const { data } = await axios.get<LookUpWordsResponse>(
    `${koreanStandardDictionaryAPIHost}/api/search.do`,
    {
      params: {
        key:
          process.env.NEXT_PUBLIC_KOREAN_STANDARD_DICTIONARY_CLIENT_KEY || '',
        q: '안녕',
        req_type: 'json',
        advanced: 'n',
      },
    }
  );

  response.status(200).json({ data });
};

export default handler;
