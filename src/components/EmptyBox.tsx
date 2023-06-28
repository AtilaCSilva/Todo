import styles from './EmptyBox.module.css'
import clipboard from '../images/Clipboard.png'

export function EmptyBox() {
  return (
    <section className={styles.Empty}>
      <div>
        <img src={clipboard} alt="" />
      </div>

      <div>
        <strong className={styles.emptyTextStrong}>
          Você ainda não tem tarefas cadastradas
        </strong>
        <p className={styles.emptyText}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </section>
  )
}
