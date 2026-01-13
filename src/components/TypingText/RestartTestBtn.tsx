import RestartIcon from '../../assets/icons/icon-restart.svg';


export function RestartTestBtn() {
 return (
  <div className='w-full border-t-2 border-(--neutral-700) mt-16 flex justify-center'>
    <button className='mt-8 flex text-white gap-2.5'>
      Restart Test
      <img src={RestartIcon} alt="Restart test icon" />
    </button>
  </div>
 )
}