
import {Post} from './components/Post/Post'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post 
      author="Igor Montezuma" 
      content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos perspiciatis fuga quo doloribus esse iure voluptatum! Quos excepturi eos explicabo repudiandae ratione dolorum quod harum. Adipisci et expedita repellat natus."
      />
      
      <Post 
      author="Fred" 
      content="Novo Post!"
      />
        </main>
      </div>
    </div>
  )
}

