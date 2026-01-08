export function getAccuracy(correctChar:number, totalChar:number) {
  if (totalChar <= 0) return 0;
  return Math.round((correctChar / totalChar) * 100);

}