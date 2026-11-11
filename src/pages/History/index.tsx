import { TrashIcon } from 'lucide-react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import MainTemplate from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { useEffect, useState } from 'react';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import RouterLink from '../../components/RouterLink';
import { toast } from 'react-toastify';
import { showMessage } from '../../adapters/tostifyWrapper';

function History() {
  const { state, dispatch } = useTaskContext();
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'asc',
      };
    },
  );

  const hasTasks = state.tasks.length;

  useEffect(() => {
    document.title = 'Histórico - Chronos Pomodoro';
  }, []);

  useEffect(() => {
    async function resetState() {
      setSortTaskOptions(prevState => ({
        ...prevState,
        tasks: sortTasks({
          tasks: state.tasks,
          direction: prevState.direction,
          field: prevState.field,
        }),
      }));
    }

    resetState();
  }, [state.tasks]);

  useEffect(() => {
    async function resetHistory() {
      if (!confirmClearHistory) return;

      dispatch({ type: TaskActionTypes.RESET_STATE });
      setConfirmClearHistory(false);
    }

    resetHistory();
  }, [confirmClearHistory, dispatch]);

  useEffect(() => {
    return () => {
      showMessage.dismiss();
    };
  }, []);

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTaskOptions.direction === 'desc' ? 'asc' : 'desc';

    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTaskOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  const taskTypeDictionary = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso curto',
    longBreakTime: 'Descanso longo',
  };

  function handleResetHistory() {
    toast.dismiss();
    showMessage.confirm(
      'Tem certeza que deseja apagar todas as tasks?',
      confirmation => {
        setConfirmClearHistory(confirmation);
      },
    );
  }

  return (
    <MainTemplate>
      <Container>
        <div className={styles.container}>
          <Heading>History</Heading>
          <span className={styles.buttonContainer}>
            {Boolean(hasTasks) && (
              <Button
                icon={<TrashIcon size={20} />}
                color='danger'
                aria-label='Apagar todo o histórico'
                title='Apagar todo o histórico'
                onClick={handleResetHistory}
              ></Button>
            )}
          </span>
        </div>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          {Boolean(hasTasks) && (
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSortTasks({ field: 'name' })}
                    className={styles.thSort}
                  >
                    Tarefa
                  </th>
                  <th
                    onClick={() =>
                      handleSortTasks({ field: 'durationInMinutes' })
                    }
                    className={styles.thSort}
                  >
                    Duração
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'startDate' })}
                    className={styles.thSort}
                  >
                    Data
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortTaskOptions.tasks.map(task => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.durationInMinutes}min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {Boolean(!hasTasks) && (
          <div className={styles.noTasksContainer}>
            <p className={styles.noTasks}>Ainda não existem tarefas criadas.</p>
            <RouterLink href='/'>Criar a primeira tarefa</RouterLink>
          </div>
        )}
      </Container>
    </MainTemplate>
  );
}

export default History;
