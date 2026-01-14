import type { TimeDropdownValue } from "../features/typingTest/data";

export function getDefaultDifficulty() {
  const raw = localStorage.getItem("diff");
  if (raw === "Easy" || raw === "Medium" || raw === "Hard") return raw;
  return "Easy";
}

export function getDefaultTime() {
  const raw = localStorage.getItem("time");
  if(raw === "Passage") return "Passage";

  const num = Number(raw);
  if([15,30,60,120].includes(num)) return num as TimeDropdownValue;

  return 60;
}