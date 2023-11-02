import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./comment.module.css";
import { Avatar } from "../Avatar/Avatar";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    console.log("Deletando comentário...");
    onDeleteComment(content);
  }

  return (
    <div className={styles.Comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/85948415?v=4"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Igor Montezuma</strong>
              <time
                title="18 de Outubro às 20:49h"
                dateTime="2023-10-18 20:49:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
