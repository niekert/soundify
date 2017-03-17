import leftPad from 'left-pad';

export function formatSeconds (time) {
  const mins = leftPad(Math.floor(time / 60), 2, '0');
  const seconds = leftPad(Math.floor(time % 60), 2, '0');

  return `${mins}:${seconds}`;
}
