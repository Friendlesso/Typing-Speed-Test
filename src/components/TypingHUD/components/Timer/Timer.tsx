import { useEffect, useState } from "react";

type TimerProps = {
  time: number;
  isStarted: boolean;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Timer({time}: TimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(time)
  const [isStarted, setIsStarted] = useState<boolean>(false)
  
  useEffect(() => {
    if(!isStarted) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsStarted(false);
          clearInterval(intervalId)
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isStarted]);


 return (
  <div className="border-r-2 border-(--neutral-700) px-3">
    <p className="text-(--neutral-400) text-lg">{timeLeft}</p>
  </div>
 )
}