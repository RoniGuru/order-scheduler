export function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}
export function orderScheduler(names: string[]): string {
  let schedule: string = '';
  let time: number = 0;
  let prepareTime: number = 60;
  let serveTime: number = 30;

  if (names.length === 0) {
    return 'no orders';
  }

  names.map((name) => {
    schedule += `${formatTime(time)} Prepare sandwich for ${name} \n`;
    time += prepareTime;
    schedule += `${formatTime(time)} Serve sandwich for ${name}  \n`;
    time += serveTime;
  });

  schedule += `${formatTime(time)} Take a Break  \n`;

  return schedule;
}
