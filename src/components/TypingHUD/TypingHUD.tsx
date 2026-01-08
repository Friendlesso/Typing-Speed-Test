import { Accuracy } from "./components/Accuracy/Accuracy";
import { WPM } from "./components/WPM/WPM";

type TypingHUDProps = {
  wpm: number;
  accuracy: number;
}

export function TypingHud({ wpm, accuracy }: TypingHUDProps) {

  return (
    <section className="flex border-b-2 border-(--neutral-700) py-2">
      <div className="flex gap-3">
        <WPM wpm={wpm} />
        <Accuracy accuracyNum={accuracy} />
      </div>

    </section>
  )
}