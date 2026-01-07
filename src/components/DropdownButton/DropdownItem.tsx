import type { DropdownItemProps } from "../../types/dropdown";

export function DropdownItem<T>({value, label }: DropdownItemProps<T>) {
 return (
  <li role="menuItem">
    <button onClick={() => {
      console.log(value)
    }}>
      {label}
    </button>
  </li>
 )
}