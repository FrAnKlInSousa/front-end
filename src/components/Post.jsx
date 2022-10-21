import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

export function Post({author, publishedAt, content}){
  const [comments, setComments] = useState([])

  const [newCommentText, setNewCommentText] = useState('')
  const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'de' yyyy 'às' HH'h'mm",
  {
    locale: ptBR,
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, 
    {
      locale: ptBR,
      addSuffix: true
    }
  )

  function handleCreateNewComment(){
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('');
  }

  function handleNewCommentChange(){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment =>{
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatório.')
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>Web Developer</span>
          </div>
        </div>
      <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
      </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
        
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe um comentário</strong>
        <textarea
          onChange={handleNewCommentChange}
          value={newCommentText}
          name='comment'
          placeholder='Deixe um comentário'
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button 
            type='submit' 
            disabled={isNewCommentEmpty}>Publicar
          </button>
        </footer>

      </form>
      <div className={styles.commentList}>
        {comments.map(comment =>{
          return <Comment key={comment} onDeleteComment={deleteComment} content={comment}/>
        })}
      </div>
    </article>
  )
}