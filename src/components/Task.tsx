import { useState, ChangeEvent } from 'react'
import styles from './Task.module.css'
import { Checkbox } from './Checkbox'
import { Trash } from 'phosphor-react'
import { EmptyTaskProps } from '../App'

interface TaskProps extends EmptyTaskProps {
  onDeleteTask: (task: string) => void
  onDeleteTaskOne: () => void
  onIsDoneChecked: (checkValue: boolean) => void
}

export function Task({
  onDeleteTask,
  title,
  id,
  onDeleteTaskOne,
  onIsDoneChecked,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleDeleteTask() {
    onDeleteTask(id)

    onDeleteTaskOne()
  }

  function handleChangeCheckeBox(e: ChangeEvent<HTMLInputElement>) {
    const isDoneValue = e.target.checked
    setIsChecked(isDoneValue)
    onIsDoneChecked(isDoneValue)
  }

  return (
    <li className={styles.Task}>
      <div className={styles.taskContent}>
        <Checkbox onChange={handleChangeCheckeBox} />
        <p
          className={isChecked ? styles.TaskCompleted : styles.TaskNotCompleted}
        >
          {title}
        </p>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash size={16} className={styles.taskTrash} />
      </button>
    </li>
  )
}
