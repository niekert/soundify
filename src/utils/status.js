import { DONE } from 'app-constants';

export function isDone(status) {
  return DONE.includes(status);
}
