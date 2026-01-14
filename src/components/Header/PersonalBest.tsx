import PersonalBestIcon from '../../assets/icons/icon-personal-best.svg';

type PBProps = {
  personalBest: number
}

export function PersonalBest({ personalBest }: PBProps) {

  return (
    <div className='flex items-center gap-2'>
      <img src={PersonalBestIcon} alt="Personal best icon" />
      <p className='text-(--neutral-400) text-lg'>Personal best: <span className='text-white'>{personalBest}</span></p>
    </div>
  )
}