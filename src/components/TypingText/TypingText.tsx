import { useEffect, useRef, useState } from 'react';
import { getRandomText, type DifficultyProps, type Text } from '../../utils/getRandomText';
import { getWPM } from '../../utils/getWPM';
import { getAccuracy } from '../../utils/getAccuracy';
import { StartTestBtn } from './StartTestBtn';
import { RestartTestBtn } from './RestartTestBtn';

type TypingTextProps = DifficultyProps & {
  difficulty: string
  setWpm: React.Dispatch<React.SetStateAction<number>>
  time: number | string;
  setAccuracy: React.Dispatch<React.SetStateAction<number>>
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setPersonalBest: React.Dispatch<React.SetStateAction<number>>;
  isStarted: boolean;
}

type CharStatus = 'correct' | 'incorrect';

export function TypingText({
  difficulty,
  setWpm,
  time,
  setAccuracy,
  setIsStarted,
  isStarted,
  setPersonalBest
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [correctChar, setCorrectChar] = useState(0);
  const [errors, setErrors] = useState(0);
  const [totalChar, setTotalChar] = useState(0);
  const [charStatus, setCharStatus] = useState<Array<CharStatus>>([]);
  // DEV NOTE: CHANGE TO "TEXT"
  const [question, setQuestion] = useState<Text>(getRandomText(difficulty));

  const inputRef = useRef<HTMLInputElement>(null);
  const characters = question.text.split('');

  useEffect(() => {
    setQuestion(getRandomText(difficulty))
  }, [difficulty])

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
    
      // WPM logic
      const finalWPM = getWPM(totalChar, errors, (Number(time) / 60))
      setWpm(finalWPM);

      // Personal Best Logic
      const prevPB = Number(localStorage.getItem("PB") || 0);
      if (finalWPM > prevPB) {
        localStorage.setItem("PB", String(finalWPM))
        setPersonalBest(finalWPM)
      }

  }, [totalChar, characters.length, errors, setWpm, setPersonalBest, time])

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
      <div className=
        {`
          relative 
          flex flex-col items-center 
          h-[80%]
          ${!isStarted
            ? 'blur-md'
            : 'blur-none'
          }
        `}
      >
        <p className='text-white text-[2.5rem] leading-[136%] tracking-[0.4px]'>
          {characters.map((char, charIndex) => {
            const status = charStatus[charIndex];
            let className = getCharClass(charIndex)

            if (charIndex === index) className += 'bg-(gray-400) border-b-2 border-gray-400'

            if (status === 'incorrect') {
              className += ' border-b-2 border-red-400'
            }

            return (
              <span key={charIndex} className={className}>
                {char}
              </span>
            )
          }
          )}
        </p>
        <input
          ref={inputRef}
          type="text"
          readOnly
          name='TextInput'
          onClick={() => {
            setIsStarted(true)
          }}
          onKeyDown={handleKeyDown}
          className='absolute top-0 left-0 right-0 bottom-0 outline-none cursor-pointer'
        />
      </div>
      <StartTestBtn
        inputRef={inputRef}
        setIsStarted={setIsStarted}
        isStarted={isStarted}
      />
      {isStarted && (
        <RestartTestBtn
          setIsStarted={setIsStarted}
        />
      )}
    </>
  )
}