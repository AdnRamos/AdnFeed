import { format, formatDistanceToNow} from 'date-fns';
import  ptBR  from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author{
  name: string;
  avatarUrl: string;
  role: string;
}
interface Content{
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType{
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps{
  post: PostType;
}
// estado = variaveis que eu quero que o componente monitore e que quando elas mudarem, o componente renderize novamente

export function Post({ post }: PostProps){
  const [ comments, setComments ] = useState([
    'Muito bom, parabéns!',
  ])

  const [newCommentText, setNewCommentText ] = useState('')

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentInputEmpty = newCommentText.length === 0;
  
  function handleCreateNewComment(event: FormEvent){
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');

  }
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);  
  }
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Este campo é obrigatório.');
  }

  function deleteComment(commentToDelete: string){
    //imutabilidade é uma caracteristica do react, ou seja, 
    //não podemos alterar o valor de uma variavel, temos que
    // criar uma nova variavel com o valor que queremos
    console.log("commentToDelete");
    const commentsWIthoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentsWIthoutDeleteOne);
  }


  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title= {publishedDateFormatted} dateTime= {post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
       {post.content.map(line => {
          if(line.type === 'paragraph'){
            return <p key={line.content} >{line.content}</p>
          }
          if(line.type === 'link'){
            return <p key={line.content} ><a href="#">{line.content}</a></p>
          }
       } )}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

        <strong>Deixa o seu feedback</strong>

        <textarea 
          name="comment"
          placeholder="Deixe um comentário" 
          value = {newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>

          <button type="submit" disabled={isNewCommentInputEmpty}>Publicar</button>

        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}/>
          
          )
        
        })}
      </div>
    </article>
  );
}