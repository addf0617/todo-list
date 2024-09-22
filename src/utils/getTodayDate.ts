export function getTodayDate(): string {
  const today: Date = new Date();
  return today.toLocaleDateString() + " " + today.toLocaleTimeString();
}
