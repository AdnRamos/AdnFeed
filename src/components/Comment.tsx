import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){

  const [ likeCount, setLikeCount ] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }
  function handleLikeComment(){
    //sempre que precisar atualizar uma informação ,
    //que depende do valor anterior, devemos utilziar o padrão de funções
    //que nos permite acessar o valor anterior
    setLikeCount((state) => {
      return state + 1;
    });
    //caso não dependesse poderiamos utilizar o seguinte:
    //setLikeCount(likeCount + 1);
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https:github.com/diego3g.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Schrodinger</strong>
              <time title= "28 de outubro às 5:00 am." dateTime="2023-10-28">Publicado há 1h</time>

            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment} >
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}