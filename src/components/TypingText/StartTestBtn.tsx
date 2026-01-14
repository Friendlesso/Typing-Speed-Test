type StartTypingBtnProps = {
  inputRef: React.RefObject<HTMLInputElement | null>;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
  isStarted: boolean;
}

export function StartTestBtn({inputRef, setIsStarted, isStarted}: StartTypingBtnProps) {
  return (
    <div className={`text-white flex flex-col items-center gap-5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${isStarted ? 'hidden' : 'block'}`}>
      <button
        className='bg-(--blue-600) hover:bg-(--blue-400) font-semibold text-xl/[120%] tracking-[0.019rem] hover:scale-95 py-4 px-6 w-fit rounded-xl cursor-pointer transition-all duration-150 ease-in-out'
        onClick={() => {
          setIsStarted(true)
          inputRef.current?.focus();
        }}
      >
        Start typing test
      </button>
      <p className="font-semibold text-xl/[120%] tracking-[0.019rem]">Or click the text and start typing</p>
    </div>
  )
}