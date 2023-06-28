import styles from './Input.module.css'

export function Input({ ...props }) {
  return (
    <input
      className={styles.newTaskInput}
      type="text"
      {...props}
      placeholder="Adicione uma nova tarefa"
      required
    />
  )
}
