import { useEffect, useState } from "react";

type TimerProps = {
  time: number;
  isStarted: boolean;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Timer({time, isStarted, setIsStarted}: TimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(time)

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
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
  }, [isStarted, setIsStarted]);


 return (
  <div className="border-r-2 border-(--neutral-700) px-3">
    <p className="text-(--neutral-400) text-xl">Time: <span className="text-(--yellow-400) text-2xl font-bold ml-1">{formattedTime}</span></p>
  </div>
 )
}