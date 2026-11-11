import type { TaskModel } from '../../models/TaskModel';
import type { TaskStateModel } from '../../models/TaskStateModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.COUNT_DOWN;
      payload: Pick<TaskStateModel, 'secondsRemaining'>;
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    }
  | {
      type: TaskActionTypes.RESET_STATE;
    }
  | {
      type: TaskActionTypes.CHANGE_SETTINGS;
      payload: TaskStateModel['config'];
    };
