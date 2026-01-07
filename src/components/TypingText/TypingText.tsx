import { useState } from 'react';
import { getRandomText, type DifficultyProps, type Text } from '../../utils/getRandomText';



export function TypingText({difficulty}: DifficultyProps) {

  const [question, setQuestion] = useState<Text>(getRandomText(difficulty));
  return (
    <div>
      <p className='text-white'>
        {question.text}
      </p>
    </div>
  )
}