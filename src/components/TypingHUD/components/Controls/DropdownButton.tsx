import DropdownButtonIcon from '../../../../assets/icons/icon-down-arrow.svg';
import { useEffect, useRef, useState } from "react";
import type { DropdownItemProps } from "../../../../types/dropdown";
import { DropdownMenu } from './DropdownMenu';

type DropdownButtonProps<T> = {
  items: DropdownItemProps<T>[];
  settingLabel?: string;
  selectedSetting: React.Dispatch<React.SetStateAction<T>>;
}

export function DropdownButton<T>({ settingLabel, items, selectedSetting }: DropdownButtonProps<T>) {

  const [buttonLabel, setButtonLabel] = useState('Eazy')
  const [open, setOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  })

  return (
    <div ref={wrapperRef} className="flex items-center gap-1.5">
      <p className="text-(--neutral-400) leading-[120%] -tracking-[0.030rem]">
        {settingLabel}:
      </p>
      <div className='relative'>
        <button
          className={`
            group
            flex 
            gap-3.5 py-1.5 lg:px-12 px-4
            text-white hover:text-(--blue-400)
            rounded-lg
            border border-(--neutral-500) hover:border-(--blue-400)
            cursor-pointer
          `}
          onClick={() => {
            setOpen(prev => !prev);
          }}
        >
          {buttonLabel}
          <img
            className=' testingHover'
            src={DropdownButtonIcon}
            alt="dropdown icon"
          />
        </button>
        <DropdownMenu
          isOpen={open}
          setOpen={setOpen}
          items={items}
          setButtonLabel={setButtonLabel}
          selectedSetting={selectedSetting}
        />
      </div>
    </div>
  )
}