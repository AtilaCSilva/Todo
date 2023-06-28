import './global.css'
import styles from './App.module.css'
import logoTodo from './assets/Logo.svg'
import { Task } from './components/Task'
import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { EmptyBox } from './components/EmptyBox'

export interface EmptyTaskProps {
  id: string
  title: string
  isDone?: boolean
}

function App() {
  const [tasks, setTask] = useState<EmptyTaskProps[]>([])

  const [newTaskText, setNewTaskText] = useState('')

  const [taskCount, setTaskCount] = useState(0)
  const [taskDone, setTaskDone] = useState(0)

  function IsDoneChecked(checkValue: boolean) {
    if (checkValue) {
      setTaskDone((prevState) => prevState + 1)
    } else {
      setTaskDone((prevState) => prevState - 1)
    }
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTask([...tasks, { id: uuidv4(), title: newTaskText }])
    setTaskCount((prevState) => prevState + 1)
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(
      (task) => task.id !== taskToDelete,
    )
    setTask(tasksWithoutDeletedOne)
  }

  function deleteCreatedTaskOne() {
    setTaskCount((state) => state - 1)
    if (taskDone === 0) {
      setTaskDone(taskDone)
    } else {
      setTaskDone((prevState) => prevState - 1)
    }
  }

  const isInputEmpty = newTaskText.length === 0

  return (
    <>
      <header className={styles.header}>
        <div>
          <img src={logoTodo} alt="" />
        </div>
      </header>

      <main className={styles.TaskMain}>
        <form
          action=""
          onSubmit={handleCreateNewTask}
          className={styles.newTask}
        >
          <Input
            name="tasking"
            onChange={handleNewTaskChange}
            value={newTaskText}
            onInvalid={handleNewTaskInvalid}
            autoComplete="off"
          />
          <Button disabled={isInputEmpty} />
        </form>

        <section className={styles.info}>
          <div>
            <strong className={styles.infoCreated}>Tarefas criadas</strong>
            <span className={styles.infoCount}>{taskCount}</span>
          </div>

          <div>
            <strong className={styles.infoDone}>Concluídas</strong>
            <span className={styles.infoCount}>
              {taskDone} de {taskCount}
            </span>
          </div>
        </section>
        <ul>
          {tasks.length >= 1 ? (
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  title={task.title}
                  onDeleteTask={deleteTask}
                  id={task.id}
                  onDeleteTaskOne={deleteCreatedTaskOne}
                  onIsDoneChecked={IsDoneChecked}
                />
              )
            })
          ) : (
            <EmptyBox />
          )}
        </ul>
      </main>
    </>
  )
}

export default App
