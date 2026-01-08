import { useState } from 'react';
import { getRandomText, type DifficultyProps, type Text } from '../../utils/getRandomText';
import { getWPM } from '../../utils/getWPM';
import { getAccuracy } from '../../utils/getAccuracy';

type TypingTextProps = {
  setWpm: React.Dispatch<React.SetStateAction<number>>
  setAccuracy: React.Dispatch<React.SetStateAction<number>>
}



export function TypingText({ difficulty, setWpm, setAccuracy }: DifficultyProps & TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [correctChar, setCorrectChar] = useState(0);
  const [errors, setErrors] = useState(0);
  const [totalChar, setTotalChar] = useState(0);
  const [charStatus, setCharStatus] = useState<Array<'correct' | 'incorrect'>>([]);
  const [question, setQuestion] = useState<Text>(getRandomText(difficulty));

  const characters = question.text.split('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    const expectedChar = question.text[index];
    const typedChar = e.key;

    // Provent users from deleting mistakes
    if (e.key === 'Backspace') {
      e.preventDefault();
      return;
    }

    if (typedChar.length !== 1) return;

    if (typedChar === expectedChar) {

      setCharStatus((prev) => [...prev, 'correct']);
      setCorrectChar((char) => char + 1);

    } else {

      setCharStatus((prev) => [...prev, 'incorrect'])
      setErrors((error) => error + 1);

    }

    setTotalChar((num) => num + 1)
    setIndex((i) => i + 1);
    setAccuracy(getAccuracy(correctChar,totalChar))
  }

  // DEV NOTE: CHANGE THIS LATER TO USE THE ENDING OF THE TEXT OR THE ENDING OF TIME
  if (characters.length === totalChar) {
    setWpm(getWPM(totalChar, errors, 0.5));
  }
  return (
    <div className='relative'>
      <p className='text-white'>
        {characters.map((char, charIndex) => {
          let className = '';

          if (charIndex < charStatus.length) {
            className =
              charStatus[charIndex] === 'correct'
                ? 'text-green-400'
                : 'text-red-400'
          }

          if(charIndex === index) {
            className += 'border-b-2 border-gray-400'
          }

          return (
            <span key={charIndex} className={className}>
              {char}
            </span>
          )
        }
        )}
      </p>
      <input className='bg-white absolute top-0 left-0 right-0 opacity-0' type="text" onKeyDown={handleKeyDown} />
    </div>
  )
}