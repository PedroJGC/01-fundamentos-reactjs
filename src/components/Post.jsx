import styles from './Post.module.css'
import { Comment } from './Comment'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://media.licdn.com/dms/image/v2/C4E03AQEgjZifrHUBfQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1617150701815?e=1750291200&v=beta&t=0r07TFh3RTLfrOR0IwMovsLBkCdWaVh-baLhOK7i_kk'
          />
          <div className={styles.authorInfo}>
            <strong>Pedro Carvalho</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title='18 de Abril às 17:53' dateTime='2025-04-18 17:53:30'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento
          da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉&nbsp;<a href='#'>jane.design/doctorcare</a>
        </p>
        <p>
          <a href='#'>#novoprojeto</a> <a href='#'>#nlw </a> <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
