import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.linkMenu} href='#'>
        <HouseIcon size={24} />
      </a>
      <a className={styles.linkMenu} href='#'>
        <HistoryIcon size={24} />
      </a>
      <a className={styles.linkMenu} href='#'>
        <SettingsIcon size={24} />
      </a>
      <a className={styles.linkMenu} href='#'>
        <SunIcon size={24} />
      </a>
    </nav>
  );
}
