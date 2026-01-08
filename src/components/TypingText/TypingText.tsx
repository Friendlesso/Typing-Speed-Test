import { useEffect, useState } from 'react';
import { getRandomText, type DifficultyProps, type Text } from '../../utils/getRandomText';
import { getWPM } from '../../utils/getWPM';
import { getAccuracy } from '../../utils/getAccuracy';

type TypingTextProps = DifficultyProps & {
  setWpm: React.Dispatch<React.SetStateAction<number>>
  setAccuracy: React.Dispatch<React.SetStateAction<number>>
}

type CharStatus = 'correct' | 'incorrect';

export function TypingText({ difficulty, setWpm, setAccuracy }: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [correctChar, setCorrectChar] = useState(0);
  const [errors, setErrors] = useState(0);
  const [totalChar, setTotalChar] = useState(0);
  const [charStatus, setCharStatus] = useState<Array<CharStatus>>([]);
  // DEV NOTE: CHANGE TO "TEXT"
  const [question, setQuestion] = useState<Text>(getRandomText(difficulty));

  const characters = question.text.split('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    const typedChar = e.key;
    const expectedChar = question.text[index];

    if (typedChar.length !== 1 || e.key === 'Backspace') {
      e.preventDefault();
      return;
    };

    setCharStatus((prev) => [
      ...prev,
      typedChar === expectedChar ? 'correct' : 'incorrect',
    ]);

    setCorrectChar((char) => (typedChar === expectedChar ? char + 1 : char));
    setErrors((error) => (typedChar !== expectedChar ? error + 1 : error));
    setTotalChar((totalChar) => totalChar + 1);
    setIndex((index) => index + 1);
  }

  // DEV NOTE: CHANGE THIS LATER TO USE THE ENDING OF THE TEXT OR THE ENDING OF TIME
  useEffect(() => {
    if (characters.length === totalChar) {
      setWpm(getWPM(totalChar, errors, 0.5));
    }
  }, [totalChar, characters.length, errors, setWpm])

  useEffect(() => {
    setAccuracy(getAccuracy(correctChar, totalChar))
  }, [correctChar, totalChar, setAccuracy])


  const getCharClass = (charIndex: number) => {
    if (charIndex < charStatus.length) {
      return charStatus[charIndex] === 'correct'
        ? 'text-green-400'
        : 'text-red-400';
    }
    return '';
  }
  return (
    <>
      <div className='relative'>
        <p className='text-white'>
          {characters.map((char, charIndex) => {
            let className = getCharClass(charIndex)

            if (charIndex === index) className += 'border-b-2 border-gray-400'

            return (
              <span key={charIndex} className={className}>
                {char}
              </span>
            )
          }
          )}
        </p>
        <input
          type="text"
          value=""
          onKeyDown={handleKeyDown}
          className='absolute top-0 left-0 right-0 bottom-0 outline-none'
        />
      </div>
    </>

  )
}