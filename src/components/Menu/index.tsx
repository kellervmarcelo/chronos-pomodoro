import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export default function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  });

  //lookup table
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.linkMenu}
        href='#'
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon size={24} />
      </a>
      <a
        className={styles.linkMenu}
        href='#'
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon size={24} />
      </a>
      <a
        className={styles.linkMenu}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon size={24} />
      </a>
      <a
        onClick={handleThemeChange}
        className={styles.linkMenu}
        href='#'
        aria-label='Mudar tema'
        title='Mudar tema'
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
