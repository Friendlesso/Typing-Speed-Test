import { useState } from "react"
import { Header } from "./components/Header"
import { TypingText } from "./components/TypingText"
import { TypingHud } from "./components/TypingHUD/TypingHUD";
import type { DifficultyValue, TimeDropdownValue } from "./features/typingTest/data";

  const defaultDiff = localStorage.getItem("diff") as DifficultyValue | null;

function App() {
  const [wpm, setWpm] = useState(0);
  const [personalBest, setPersonalBest] = useState<number>(() => {
    return Number(localStorage.getItem("PB") || 0)
  });
  const [accuracy, setAccuracy] = useState(0);
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [time, setTime] = useState<TimeDropdownValue>(15)
  const [difficulty, setDifficulty] = useState<DifficultyValue>(
    defaultDiff && ["Eazy", "Medium", "Hard"].includes(defaultDiff)
      ? defaultDiff
      : "Eazy"
  )
  console.log(difficulty);
  console.log(time);



  return (
    <div className="flex flex-col min-h-[80dvh]">
      <Header
        personalBest={personalBest}
      />
      <div className="flex flex-col flex-1 mt-16 gap-8">
        <TypingHud
          wpm={wpm}
          accuracy={accuracy}
          time={time}
          setTime={setTime}
          setDifficulty={setDifficulty}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
        />
        <section className="relative h-[70vh]">
          <TypingText
            setWpm={setWpm}
            time={time}
            setAccuracy={setAccuracy}
            difficulty={difficulty}
            setIsStarted={setIsStarted}
            isStarted={isStarted}
            setPersonalBest={setPersonalBest}
          />
        </section>
      </div>
    </div>
  )
}

export default App
