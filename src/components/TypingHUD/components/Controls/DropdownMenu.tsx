import type { DropdownItemProps } from "../../../../types/dropdown"
import { DropdownItem } from "./DropdownItem"

type DropdownMenuProps<T> = {
  items: DropdownItemProps<T>[]
  isOpen: boolean
  setButtonLabel: React.Dispatch<React.SetStateAction<string>>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedSetting: React.Dispatch<React.SetStateAction<T>>
}

export function DropdownMenu<T>({ items, isOpen, setButtonLabel, selectedSetting, setOpen }:DropdownMenuProps<T>) {

  return (
    <ul
      role="menu"
      className={`
        absolute top-full left-0 
        bg-(--neutral-800) 
        w-fit
        z-10 
        flex flex-col 
        gap-2  
        rounded-lg 
        overflow-hidden
        transition-all duration-300 ease-in-out
        ${isOpen 
          ? 'max-h-90 py-2.5 mt-2 opacity-100 pointer-events-auto'
          : 'max-h-0 opacity-0 pointer-events-none'
        }
      `}
    >
      {items.map(item => (
        <DropdownItem<T>
          key={String(item.value)}
          label={item.label}
          value={item.value}
          setButtonLabel={setButtonLabel}
          selectedSetting={selectedSetting}
          setOpen={setOpen}
        />
      ))}
    </ul>
  )
}