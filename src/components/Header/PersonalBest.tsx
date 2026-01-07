import PersonalBestIcon from '../../assets/icons/icon-personal-best.svg';

export function PersonalBest() {
  
  return (
    <div className='flex items-center gap-2'>
      <img src={PersonalBestIcon} alt="Personal best icon" />
      <p className='text-(--neutral-400)'>Personal best: <span className='text-white'>92 WPM</span></p>
    </div>
  )
}