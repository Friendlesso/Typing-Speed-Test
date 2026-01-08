export function getWPM(totalChar:number,errorChar:number, time:number) {
  const wpmGross = (totalChar / 5) / time;
  const errorsMade = (errorChar / 5) / time;

  const wpmNet = Math.floor(wpmGross - errorsMade); 

  return wpmNet;
}