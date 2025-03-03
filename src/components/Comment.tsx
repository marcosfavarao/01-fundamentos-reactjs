import React from 'react';
import {ThumbsUp, Trash} from 'phosphor-react';
import {Avatar} from './Avatar.tsx';

import styles from './Comment.module.css';

type CommentProps = {
  comment: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({comment, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = React.useState<number>(0);

  function handleDeleteComment() {
    onDeleteComment(comment);
  }

  function handleLikeCount() {
    setLikeCount((prev) => prev + 1);
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src='https://github.com/marcosfavarao.png' />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>marcos favarao</strong>
                <time title={'11 de maio as 08:13h'} dateTime={'2022-05-11 08:13:30'}>cerca de 1h atrás</time>
              </div>

              <button onClick={handleDeleteComment} title='deletar comentário'>
                <Trash />
              </button>
            </header>

            <p>{comment}</p>
          </div>

          <footer>
            <button onClick={handleLikeCount}>
              <ThumbsUp></ThumbsUp>
              aplaudir
              <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
