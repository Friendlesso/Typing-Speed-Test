import { useState } from "react";
import type { DropdownItemProps } from "../../types/dropdown";
import { DropdownMenu } from "./DropdownMenu";

type DropdownButtonProps<T> = {
  items: DropdownItemProps<T>[]
  label: string;
}

export function DropdownButton<T>({ label, items }: DropdownButtonProps<T>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setOpen(prev => !prev)
          console.log(open);
        }}
        className={`
          border border-[#717178] hover:border-[#4CA6FF]
          px-2.5 py-1.5 
          w-36.25 
          rounded-lg 
          text-white hover:text-[#4CA6FF]
          cursor-pointer  
          hover:scale-95
          transition-all ease-in duration-200
        `}
      >
        {label}
      </button>
        <DropdownMenu items={items} isOpen={open} />
    </div>
  )
}