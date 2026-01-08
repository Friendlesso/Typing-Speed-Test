type WPMProps = {
  wpm: number;
}

export function WPM({wpm}:WPMProps) {
 
  return (
  <div className="text-white">
    <p>WPM:<span>{wpm}</span></p>
  </div>
 )
}