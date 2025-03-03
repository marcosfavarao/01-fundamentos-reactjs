import React from 'react';
import {format, formatDistanceToNow} from 'date-fns';
import {ptBR} from 'date-fns/locale';

import {Comment} from './Comment.tsx';
import {Avatar} from './Avatar.tsx';

import styles from './Post.module.css';

export type PostType = {
  id: number;
  author: { name: string; avatarUrl: string; role: string };
  content: Content[];
  publishedAt: Date;
}

type Content = {
  type: 'paragraph' | 'link';
  content: string
};

type PostProps = {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = React.useState<string[]>([]);
  const [newCommentText, setNewCommentText] = React.useState<string>('');

  const isNewCommentEmpty = newCommentText.trim().length === 0;
  const publishedDateFormatted = format(post.publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", { locale: ptBR });
  const publishedRelativeToNow = formatDistanceToNow(post.publishedAt, { locale: ptBR, addSuffix: true });
  const publishedAtDateTime = post.publishedAt.toISOString();

  function handleCreateNewComment(event: React.FormEvent) {
    event.preventDefault();
    setComments((prev) => [...prev, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: React.InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('necessário preencher o campo');
  }

  function deleteComment(comment: string) {
    setComments((prev) => prev.filter((c) => c !== comment));
  }

  return(
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar hasBorder src={post.author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div>

          <time title={publishedDateFormatted} dateTime={publishedAtDateTime}>{publishedRelativeToNow}</time>
        </header>

        <div className={styles.content}>
          {post.content.map((line) => {
              if(line.type === 'paragraph') return <p key={line.content}>{line.content}</p>
              else return <p key={line.content}><a href='#'>{line.content}</a></p>
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>deixe seu feedback</strong>
          <textarea
            required
            name='comment'
            placeholder='deixe um comentário'
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
          />
          <footer>
            <button type='submit' disabled={isNewCommentEmpty}>publicar</button>
          </footer>
        </form>

        <div className='commentList'>
          {comments.map((comment) => (
            <Comment key={comment} comment={comment} onDeleteComment={deleteComment} />
          ))}
        </div>
      </article>
    </>
  )
}