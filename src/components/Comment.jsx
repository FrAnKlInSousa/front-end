import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/FrAnKlInSousa.png" />
      <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>
              Danilo Gama
            </strong>
            <time title="01 de Janeiro de 2022 às 02h58min" dateTime="01/01/2022 02:58:23">Cerga de 1h atrás</time>
          </div>
        <button title='Deletar comentário'>
          <Trash size={24}/>
        </button>

        </header>
        <p>
        Muito bom Devon, parabéns!! 👏👏
        </p>
      </div>
      <footer>
        <button>
          <ThumbsUp/>
          Aplaudir <span>20</span>
        </button>
      </footer>
      </div>
    </div>
  );
}