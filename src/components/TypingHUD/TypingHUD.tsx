import { Accuracy } from "./components/Accuracy/Accuracy";
import { Timer } from "./components/Timer/Timer";
import { WPM } from "./components/WPM/WPM";

type TypingHUDProps = {
  wpm: number;
  accuracy: number;
  isStarted: boolean;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TypingHud({ wpm, accuracy, isStarted, setIsStarted }: TypingHUDProps) {

  return (
    <section className="flex border-b-2 border-(--neutral-700) py-2">
      <div className="flex">
        <WPM wpm={wpm} />
        <Accuracy accuracyNum={accuracy} />
        <Timer time={60} isStarted={isStarted} setIsStarted={setIsStarted} />
      </div>

    </section>
  )
}