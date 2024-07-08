import styles from './button.module.scss';

type ButtonTypes = {
  styleClass: string;
  title: string;
}

export default function Button({styleClass, title}: ButtonTypes)  {
  return (
    <button className={`${styleClass} ${styles['button']}`}>{title}</button>
  )
}