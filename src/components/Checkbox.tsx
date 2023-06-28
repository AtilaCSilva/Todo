import styles from './Checkbox.module.css'


export function Checkbox({ ...props }) {

  return (
    <input className={styles.taskInput} type="checkbox" name="check" {...props} />
  )
}