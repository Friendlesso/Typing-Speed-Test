import type { DropdownItemProps } from "../../types/dropdown";

export type TimeDropdownValue = 15 | 30 | 60 | 120 | "passage";
export type DifficultyValue = "Eazy" | "Medium" | "Hard";

export const timeItems: DropdownItemProps<TimeDropdownValue>[] = [
  { value: 15, label: "15s"},
  { value: 30, label: "30s"},
  { value: 60, label: "60s"},
  { value: 120, label: "120s"},
  { value: "passage", label: "passage"},
]


export const difficultyItems: DropdownItemProps<DifficultyValue>[] = [
  { value: "Eazy", label: "Eazy"},
  { value: "Medium", label: "Medium"},
  { value: "Hard", label: "Hard"},
]