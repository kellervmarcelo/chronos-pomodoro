import { TrashIcon } from 'lucide-react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import MainTemplate from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';

function History() {
  const { state } = useTaskContext();

  return (
    <MainTemplate>
      <Container>
        <div className={styles.container}>
          <Heading>History</Heading>
          <span className={styles.buttonContainer}>
            <Button
              icon={<TrashIcon size={20} />}
              color='danger'
              aria-label='Apagar todo o histórico'
              title='Apagar todo o histórico'
            ></Button>
          </span>
        </div>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {state.tasks.map(task => {
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.durationInMinutes}min</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{task.type}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}

export default History;
