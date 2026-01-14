import { useState } from "react"
import { Header } from "./components/Header"
import { TypingText } from "./components/TypingText"
import { TypingHud } from "./components/TypingHUD/TypingHUD";

function App() {
  const [wpm, setWpm] = useState(0);
  const [personalBest, setPersonalBest] = useState<number>(() => {
    return Number(localStorage.getItem("PB") || 0)
  });
  const [accuracy, setAccuracy] = useState(0);
  const [isStarted, setIsStarted] = useState<boolean>(false)

  return (
    <div className="flex flex-col min-h-[80dvh]">
      <Header
        personalBest={personalBest}
      />
      <div className="flex flex-col flex-1 mt-16 gap-8">
        <TypingHud
          wpm={wpm}
          accuracy={accuracy}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
        />
        <section className="relative h-[70vh]">
          <TypingText
            setWpm={setWpm}
            setAccuracy={setAccuracy}
            difficulty="easy"
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
