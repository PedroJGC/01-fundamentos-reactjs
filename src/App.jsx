import { Post } from './Post'

export function App() {
  return (
    <div>
      <Post
        author='Pedro Carvalho'
        content='“Nutra sua mente com grandes pensamentos, pois você nunca irá mais alto do que o que você pensa.”'
      />
      <Post
        author='Gabriel Meireles'
        content='Que reflexão maravilhosa… tenho refletido muito sobre isso, em momentos difíceis tenho orado mais pedindo a Deus sabedoria para não reclamar, e tentar com o auxílio do Espírito Santo tentar entender o propósito daquela situação!'
      />
    </div>
  )
}
