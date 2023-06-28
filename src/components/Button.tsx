import styles from './Button.module.css'
import moreIcon from '../assets/moreIcon.svg'
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button";
}


export function Button({ type, ...props }: ButtonProps) {

  return (
    <button className={styles.newTaskButton} type={type} {...props}>
      <span className={styles.newSpan}>Criar</span> <img src={moreIcon} alt="" />
    </button >
  )
}

