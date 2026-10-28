import styles from './styles.module.css';

type ButtonProps = {
  icon: React.ReactNode;
  color?: 'default' | 'danger';
} & React.ComponentProps<'button'>;

export default function Button({
  icon,
  color = 'default',
  ...props
}: ButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
