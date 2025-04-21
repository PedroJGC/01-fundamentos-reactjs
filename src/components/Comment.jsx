import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src='https://media.licdn.com/dms/image/v2/C4E03AQEgjZifrHUBfQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1617150701815?e=1750291200&v=beta&t=0r07TFh3RTLfrOR0IwMovsLBkCdWaVh-baLhOK7i_kk'
        alt=''
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Carvalho</strong>
              <time title='18 de Abril às 17:53' dateTime='2025-04-18 17:53:30'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
