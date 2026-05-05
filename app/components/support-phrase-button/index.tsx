import { SupportPhrase } from 'app/shared/models/support-phrase';
import classNames from 'classnames';
import type { Dictionary } from '../../i18n/format';
import { translate, translateLines } from '../../i18n/format';
import { Text } from '../ui';

type Props = {
  supportPhrase: SupportPhrase;
  active?: boolean;
  dictionary: Dictionary;
};

export default function SupportPhraseButton({
  supportPhrase,
  active,
  dictionary,
  ...props
}: Props & React.HTMLAttributes<HTMLElement>) {
  const phrase = translate(dictionary, supportPhrase.translationKey);

  const nameClassName = classNames(
    `w-full py-3.5 px-4 rounded-xl relative
    border-solid border-3 h-20 flex items-center
    transition-all duration-200 ease-in-out`,
    {
      'bg-gray-200 group-hover:bg-gray-300 border-transparent': !active,
      'bg-gray-700 border-amber-500': active,
    }
  );
  const textClassName = classNames(
    `font-bold w-full
     transition-colors duration-200 ease-in-out`,
    {
      'text-gray-800': !active,
      'text-gray-50': active,
    }
  );

  return (
    <button
      className="group w-full"
      aria-label={translate(dictionary, 'phrase.selectAria', {
        phrase: phrase.replaceAll('\n', ' '),
      })}
      {...props}
    >
      <div className={nameClassName}>
        <Text as="div" variant="sm" className={textClassName}>
          {translateLines(dictionary, supportPhrase.translationKey).map(
            (line, index, lines) => (
              <span key={line}>
                {line}
                {index < lines.length - 1 && <br />}
              </span>
            )
          )}
        </Text>
      </div>
    </button>
  );
}
