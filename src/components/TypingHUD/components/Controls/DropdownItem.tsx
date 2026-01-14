import type { DropdownItemProps } from "../../../../types/dropdown"

type DropdownListProps<T> = {
  setButtonLabel: React.Dispatch<React.SetStateAction<string>>;
  selectedSetting: React.Dispatch<React.SetStateAction<T>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DropdownItem<T>({ value, label, setButtonLabel, selectedSetting, setOpen}: DropdownItemProps<T> & DropdownListProps<T>) {

  return (
    <li role="menuItem" className="group">
      <button
        className="text-white leading-[120%] -tracking-[0.0300rem]  px-2.5 border-b border-(--neutral-700) w-full flex gap-3"
        onClick={() => {
          setButtonLabel(label)
          selectedSetting(value)
          setOpen(false)
          console.log(label)
        }}
      >
        <div className="h-4 w-4 border border-(--neutral-0) group-hover:border-(--blue-400) group-hover:border-4 rounded-lg transition-[border] duration-150"></div>
        {label}
      </button>
    </li>
  )
}