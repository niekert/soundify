import leftPad from 'left-pad';
import moment from 'moment';

export function formatSeconds(time) {
  const mins = leftPad(Math.floor(time / 60), 2, '0');
  const seconds = leftPad(Math.floor(time % 60), 2, '0');

  return `${mins}:${seconds}`;
}

export const formatPlaytime = duration =>
 moment.duration(duration).humanize();
