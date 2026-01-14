import { Timer } from './components/Timer'
import { TypingStats } from "./components/TypingStats";

type TypingHUDProps = {
  wpm: number;
  accuracy: number;
  isStarted: boolean;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TypingHud({ wpm, accuracy, isStarted, setIsStarted }: TypingHUDProps) {

  return (
    <section className="flex border-b-2 border-(--neutral-700) pb-4">
      <div className="flex">
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
          time={60}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
        />
      </div>

    </section>
  )
}