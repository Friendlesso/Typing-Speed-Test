type TypingStatsProps = {
  label: string
  stat: number
  textColor: string
  isStarted: boolean
}

export function TypingStats({stat, textColor, label, isStarted}: TypingStatsProps) {
  return (
    <div className="border-r-2 border-(--neutral-700) px-3">
      <p className="text-(--neutral-400) text-xl/[120%] -tracking-[0.0375rem] ">
        {label}:
        <span className={`${isStarted ? `${textColor}` : 'text-white'} text-2xl font-bold pl-3`}>
          {stat}{label === "Accuracy" && '%'}
        </span>
      </p>
    </div>
  )
}