import { CHANGE_PERIOD } from './constants';

export function changePeriod(id: string) {
  return {
    type: CHANGE_PERIOD,
    payload: id,
  };
}
