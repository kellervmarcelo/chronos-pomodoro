import type { TaskModel } from '../models/TaskModel';

export function getNextCycleType(currentCyle: number): TaskModel['type'] {
  if (currentCyle % 8 === 0) return 'longBreakTime';
  if (currentCyle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}
