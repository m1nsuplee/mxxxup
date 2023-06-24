'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { CharacterLimit, db } from '@/lib';
import clsx from 'clsx';
import { Textarea } from '../common';

type Rhyme = {
  content: string;
};

const WriteRhymeForm: React.FC = () => {
  const methods = useForm<Rhyme>({
    mode: 'onChange',
    defaultValues: { content: '' },
  });

  const { watch, handleSubmit } = methods;

  const contentChareactersLength = watch('content').length;

  const handleWriteRhymeFormSubmit = handleSubmit(async ({ content }) => {
    await db.from('rhymes').insert([{ content }]);
  });

  return (
    <FormProvider {...methods}>
      <form
        autoComplete="off"
        className="w-full"
        onSubmit={handleWriteRhymeFormSubmit}
      >
        <div
          className={clsx(
            'w-full flex flex-col',
            'justify-start items-end gap-y-2'
          )}
        >
          <Textarea
            name="content"
            rows={1}
            placeholder="멋진 라임을 뱉어주세요 스껅"
            minLength={4}
            maxLength={CharacterLimit.rhyme}
          />
          <small className="text-xs text-gray">{`${contentChareactersLength}/${CharacterLimit.rhyme}`}</small>
        </div>
      </form>
    </FormProvider>
  );
};

export default WriteRhymeForm;
