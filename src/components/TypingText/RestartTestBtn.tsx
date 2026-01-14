import RestartIcon from '../../assets/icons/icon-restart.svg';


export function RestartTestBtn() {
  return (
    <div className='w-full border-t-2 border-(--neutral-700) mt-16 flex justify-center'>
      <button
        className='
          group
          flex 
          bg-(--neutral-800) hover:bg-(--neutral-0)
          text-white hover:text-(--neutral-900) 
          gap-2.5 mt-8 px-4 py-2.5 
          rounded-xl
          cursor-pointer
          transition-colors duration-200
        '
      >
        Restart Test
        <img className='transition group-hover:invert' src={RestartIcon} alt="Restart test icon" />
      </button>
    </div>
  )
}