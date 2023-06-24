'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { CharacterLimit, db } from '@/lib';
import clsx from 'clsx';
import { Button, Textarea } from '../common';

type Rhyme = {
  content: string;
};

const WriteRhymeForm: React.FC = () => {
  const methods = useForm<Rhyme>({
    mode: 'onChange',
    defaultValues: { content: '' },
  });

  const { watch, handleSubmit } = methods;

  const { length: contentChareactersLength } = watch('content');

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
          <div className="w-full relative">
            <Textarea
              name="content"
              rows={1}
              placeholder="멋진 라임을 뱉어주세요 스껅"
              minLength={CharacterLimit.rhyme.min}
              maxLength={CharacterLimit.rhyme.max}
            />
            <div className="absolute top-1 right-1 w-9 h-9">
              <Button
                type="submit"
                className={clsx(
                  'text-sm',
                  contentChareactersLength >= CharacterLimit.rhyme.min
                    ? 'text-white'
                    : 'text-white/50'
                )}
              >
                {'등록'}
              </Button>
            </div>
          </div>
          <small
            className={clsx(
              'text-xs',
              contentChareactersLength === CharacterLimit.rhyme.max
                ? 'text-error'
                : 'text-gray'
            )}
          >{`${contentChareactersLength}/${CharacterLimit.rhyme.max}`}</small>
        </div>
      </form>
    </FormProvider>
  );
};

export default WriteRhymeForm;
