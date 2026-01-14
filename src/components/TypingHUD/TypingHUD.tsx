import { difficultyItems, timeItems, type DifficultyValue, type TimeDropdownValue } from '../../features/typingTest/data';
import { DropdownButton } from './components/Controls/DropdownButton';
import { Timer } from './components/Timer'
import { TypingStats } from "./components/TypingStats";

type TypingHUDProps = {
  wpm: number;
  accuracy: number;
  time: number | string;
  isStarted: boolean;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<TimeDropdownValue>>;
  setDifficulty: React.Dispatch<React.SetStateAction<DifficultyValue>>;
}

export function TypingHud({ wpm, accuracy, isStarted, setIsStarted, time, setTime, setDifficulty }: TypingHUDProps) {

  return (
    <section className="flex justify-between border-b-2 border-(--neutral-700) pb-4">
      <div className="flex items-center">
        <TypingStats
          label="WPM"
          stat={wpm}
          textColor="text-white"
          isStarted={isStarted}
        />
        <TypingStats
          label="Accuracy"
          stat={accuracy}
          textColor="text-(--red-500)"
          isStarted={isStarted}
        />
        <Timer
          key={typeof time === "number" ? time : "passage"}
          time={time}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
        />
      </div>
      <div className='flex items-center gap-4'>
        <DropdownButton
          items={difficultyItems}
          settingLabel='Difficulty'
          selectedSetting={setDifficulty}
        />
        <DropdownButton
          items={timeItems}
          settingLabel='Mode'
          selectedSetting={setTime}
        />
      </div>
    </section>
  )
}