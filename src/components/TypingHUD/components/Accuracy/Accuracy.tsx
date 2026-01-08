type AccuracyProps = {
  accuracyNum: number;
}

export function Accuracy({accuracyNum}:AccuracyProps) {
  console.log(accuracyNum);

 return (
  <div className="text-white">
    <p>Accuracy: <span>{accuracyNum}%</span></p>
  </div>
 )
}