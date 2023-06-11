'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { CharacterLimit } from '@/lib';
import clsx from 'clsx';
import { Input } from '../common';

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

  const handleWriteRhymeFormSubmit = handleSubmit((rhyme) => {
    alert(rhyme.content);
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
          <Input
            name="content"
            placeholder="멋진 라임을 뱉어주세요 스껅"
            maxLength={CharacterLimit.rhyme}
          />
          <span className="text-xs text-gray">{`${contentChareactersLength}/${CharacterLimit.rhyme}`}</span>
        </div>
      </form>
    </FormProvider>
  );
};

export default WriteRhymeForm;
