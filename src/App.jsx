
import {Post} from './Post'
import { Header } from './components/header'


export function App() {
  return (
    <div>
      <Header/>
      <Post 
      author="Igor Montezuma" 
      content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos perspiciatis fuga quo doloribus esse iure voluptatum! Quos excepturi eos explicabo repudiandae ratione dolorum quod harum. Adipisci et expedita repellat natus."
      />
      
      <Post 
      author="Fred" 
      content="Novo Post!"
      />
    </div>
  )
}

