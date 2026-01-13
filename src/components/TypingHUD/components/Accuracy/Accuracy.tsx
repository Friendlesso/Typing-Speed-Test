type AccuracyProps = {
  accuracyNum: number;
}

export function Accuracy({accuracyNum}:AccuracyProps) {

 return (
  <div className="border-r-2 border-(--neutral-700) px-3">
    <p className="text-(--neutral-400) text-lg">Accuracy: <span className="text-white text-xl font-bold ml-1">{accuracyNum}%</span></p>
  </div>
 )
}