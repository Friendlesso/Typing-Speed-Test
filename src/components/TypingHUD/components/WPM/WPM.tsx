type WPMProps = {
  wpm: number;
}

export function WPM({wpm}:WPMProps) {
 
  return (
  <div className="border-r-2 border-(--neutral-700) px-3">
    <p className="text-(--neutral-400) text-lg">WPM:<span className="text-white text-xl font-bold ml-1">{wpm}</span></p>
  </div>
 )
}