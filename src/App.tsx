import { useState } from "react"
import { Header } from "./components/Header/Header"
import { TypingText } from "./components/TypingText"
import { TypingHud } from "./components/TypingHUD/TypingHUD";

function App() {
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [isStarted, setIsStarted] = useState<boolean>(false)

  return (
    <div className="flex flex-col max-h-dvh">
      <Header />
      <div className="flex flex-col flex-1 mt-16 gap-8">
        <TypingHud
          wpm={wpm}
          accuracy={accuracy}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
        />
        <div>
          <TypingText
            setWpm={setWpm}
            setAccuracy={setAccuracy}
            difficulty="hard"
            setIsStarted={setIsStarted}
            isStarted={isStarted}
          />
        </div>
      </div>
    </div>
  )
}

export default App
