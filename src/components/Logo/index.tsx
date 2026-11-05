import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import RouterLink from '../RouterLink';

export default function Logo() {
  return (
    <RouterLink className={styles.linkLogo} href='/'>
      <div className={styles.logo}>
        <TimerIcon size={64} />
        <span>Chronos</span>
      </div>
    </RouterLink>
  );
}
