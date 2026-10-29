import { useContext } from 'react';
import { TaskContext } from './index';

export function useTaskContext() {
  return useContext(TaskContext);
}
