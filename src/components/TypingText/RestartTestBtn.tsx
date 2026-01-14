import RestartIcon from '../../assets/icons/icon-restart.svg';

type RestartTestBtn = {
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

export function RestartTestBtn({ setIsStarted }: RestartTestBtn) {
  return (
    <div
      className={`
        w-full 
        border-t-2 border-(--neutral-700) 
        mt-16
        flex justify-center overflow-hidden
        transition-all duration-300 ease-in
      `}
    >
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
        onClick={() => {
          setIsStarted(false);
        }}
      >
        Restart Test
        <img className='transition group-hover:invert' src={RestartIcon} alt="Restart test icon" />
      </button>
    </div>
  )
}