// "npm i phosphor-react" para instalar a biblioteca de ícones
import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src='https://media.licdn.com/dms/image/v2/C4E03AQEgjZifrHUBfQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1617150701815?e=1750291200&v=beta&t=0r07TFh3RTLfrOR0IwMovsLBkCdWaVh-baLhOK7i_kk'
        />

        <strong>Pedro Carvalho</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
