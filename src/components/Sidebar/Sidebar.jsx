import styles from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=50"/>

            <div className={styles.profile}>
                <strong>Igor Montezuma</strong>
                <span>FullStack Developer</span>
            </div>

           <footer>
            <a href="#">Editar seu perfil</a>
           </footer>
        </aside>
    )
}