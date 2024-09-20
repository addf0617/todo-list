export function getDay(): string {
  const timeElapsed: number = Date.now();
  const today: Date = new Date(timeElapsed);
  return today.toISOString();
}
