import { useState } from "react"
import { Header } from "./components/Header/Header"
import { TypingText } from "./components/TypingText"
import { TypingHud } from "./components/TypingHUD/TypingHUD";

function App() {
  const [wpm, setWpm] = useState(0);

  return (
    <>
      <Header />
      <TypingText setWpm={setWpm} difficulty="easy" />
      <TypingHud wpm={wpm}/>
    </>
  )
}

export default App
