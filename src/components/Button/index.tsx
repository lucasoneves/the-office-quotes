import styles from './button.module.scss';

type ButtonTypes = {
  styleClass: string;
  title: string;
  children?: React.ReactNode
}

export default function Button({styleClass, title, children}: ButtonTypes)  {
  return (
    <button className={styleClass}>{children}{title}</button>
  )
}