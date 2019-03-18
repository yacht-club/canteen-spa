export function formatTime(millis) {
  const hours = Math.floor(millis / 3600);
  let minutes = Math.floor((millis - hours * 3600) / 60);

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

export function isOpen(workFromMillis, workTillMillis) {
  const currentTime = new Date().getTime();
  return currentTime >= workFromMillis && currentTime < workTillMillis;
}
