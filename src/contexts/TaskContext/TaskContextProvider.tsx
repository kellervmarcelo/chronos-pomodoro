import { useState } from 'react';
import { TaskContext } from './index';
import { initialTaskState } from './initialTaskState';

type TaskContextProvider = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProvider) {
  const [state, setState] = useState(initialTaskState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
