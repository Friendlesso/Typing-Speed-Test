import type { DropdownItemProps } from "../../types/dropdown"
import { DropdownItem } from "./DropdownItem";

type DropdownMenuProps<T> = {
  items: DropdownItemProps<T>[];
  isOpen: boolean;

}

export function DropdownMenu<T>({items, isOpen}:DropdownMenuProps<T>) {
  return (
    <ul role="menu" inert={!isOpen} className={`p-2 text-white *:border-b *:border-gray-500 w-36.25 flex flex-col gap-2 transition-all duration-200 ${isOpen ? 'max-h-37 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
      {items.map(item => (
        <DropdownItem value={item.value} label={item.label} />
      ))}
    </ul>
  )
}