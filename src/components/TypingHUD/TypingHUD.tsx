import { WPM } from "./components/WPM/WPM";

type TypingHUDProps = {
  wpm: number;
}

export function TypingHud({wpm}: TypingHUDProps) {

 return (
  <div>
    <WPM wpm={wpm} />
  </div>
 )
}