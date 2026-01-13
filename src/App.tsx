import { useState } from "react"
import { Header } from "./components/Header/Header"
import { TypingText } from "./components/TypingText"
import { TypingHud } from "./components/TypingHUD/TypingHUD";

function App() {
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [isStarted, setIsStarted] = useState<boolean>(false)

  return (
    <>
      <Header />
      <div className="flex flex-col mt-16 gap-8">
        <TypingHud
          wpm={wpm}
          accuracy={accuracy}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
        />
        <TypingText
          setWpm={setWpm}
          setAccuracy={setAccuracy}
          difficulty="easy"
        />
      </div>
    </>
  )
}

export default App
