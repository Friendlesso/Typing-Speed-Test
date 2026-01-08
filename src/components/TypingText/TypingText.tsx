import { useState } from 'react';
import { getRandomText, type DifficultyProps, type Text } from '../../utils/getRandomText';
import { getWPM } from '../../utils/getWPM';

type TypingTextProps = {
  setWpm: React.Dispatch<React.SetStateAction<number>>
}



export function TypingText({ difficulty, setWpm }: DifficultyProps & TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [correctChar, setCorrectChar] = useState(0);
  const [errors, setErrors] = useState(0);
  const [totalChar, setTotalChar] = useState(0);
  const [charStatus, setCharStatus] = useState<Array<'correct' | 'incorrect'>>([]);

  const [question, setQuestion] = useState<Text>(getRandomText(difficulty));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    const expectedChar = question.text[index];
    const typedChar = e.key;

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
  }

  const characters = question.text.split('');

  if(characters.length === totalChar) {
    setWpm(getWPM(totalChar, errors, 0.5));
  }
  return (
    <div>
      <p className='text-white'>
        {characters.map((char, index) => {
          let className = '';

          if (index < charStatus.length) {
            className =
              charStatus[index] === 'correct'
                ? 'text-green-400'
                : 'text-red-400'
          }

          return (
              <span key={index} className={className}>
                {char}
              </span>
            )
        }
        )}
      </p>
      <input className='bg-white' type="text" onKeyDown={handleKeyDown} />
    </div>
  )
}