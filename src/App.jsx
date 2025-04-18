import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author='Pedro Carvalho'
            content='“Nutra sua mente com grandes pensamentos, pois você nunca irá mais alto do que o que você pensa.”'
          />
          <Post
            author='Gabriel Meireles'
            content='Que reflexão maravilhosa… tenho refletido muito sobre isso, em momentos difíceis tenho orado mais pedindo a Deus sabedoria para não reclamar, e tentar com o auxílio do Espírito Santo tentar entender o propósito daquela situação!'
          />
        </main>
      </div>
    </div>
  )
}
