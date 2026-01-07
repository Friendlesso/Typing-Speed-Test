  import type { DropdownItemProps } from "../../types/dropdown";

  export type TimeMode = number | "passage";
  export type DifficultyMode = "easy" | "medium" | "hard";
  
  export const timeItems: DropdownItemProps<TimeMode>[] = [
    { value: 15, label: "15s" },
    { value: 30, label: "30s" },
    { value: 60, label: "60s" },
    { value: 120, label: "120s" },
    { value: "passage", label: "passage" },
  ]


  export const dificultyItems: DropdownItemProps<DifficultyMode>[] = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ]