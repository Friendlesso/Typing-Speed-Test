import PersonalBestIcon from '../../assets/icons/icon-personal-best.svg';

type PBProps = {
  personalBest: number
}

export function PersonalBest({ personalBest }: PBProps) {

  return (
    <div className='flex items-center gap-2'>
      <img src={PersonalBestIcon} alt="Personal best icon" />
      <p className='text-(--neutral-400) text-lg/[120%] tracking-[-0.0375rem]'>
        Personal best:
        <span className='text-white pl-1'>
          {personalBest}
        </span>
      </p>
    </div>
  )
}