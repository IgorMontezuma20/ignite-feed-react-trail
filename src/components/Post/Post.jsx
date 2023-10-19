
import styles from  './Post.module.css';

export function Post() {
  return (
    <div>
      <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/85948415?v=4" />
                <div className={styles.authorInfo}>
                  <strong>Igor Montezuma</strong>
                  <span>Full Stack Developer</span>
                </div>
            </div>

            <time title='18 de Outubro às 20:49h' dateTime='2023-10-18 20:49:00'>Publicado há 1h</time>
        </header>

        <div className={styles.content}>
         <p>Fala galeraa 👋</p>
         <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
         <p>👉 <a href="">jane.design/doctorcare</a></p>
         <p>
          <a href=""> #novoprojeto </a>{' '}
          <a href="">#nlw </a>{' '}
          <a href="">#rocketseat</a></p>
        </div>
      </article>
    </div>
  )
}