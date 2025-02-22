import styles from './Post.module.css';

export function Post() {
    return(
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <img className={styles.avatar} src="https://github.com/marcosfavarao.png" />
                        <div className={styles.authorInfo}>
                            <strong>marcos favarao</strong>
                            <span>web developer</span>
                        </div>
                    </div>

                    <time title={'11 de maio as 08:13h'} dateTime={'2022-05-11 08:13:30'}>publicado ha 1h</time>
                </header>

                <div className={styles.content}>
                    <p>fala galeraa 👋</p>
                    <p>acabei de subir mais um projeto no meu portifa. é um projeto que fiz no nlw return, evento da rocketseat. o nome do projeto é doctorCare 🚀</p>
                    <p>👉 &nbsp; <a href="">jane.design/doctorcare</a></p>
                    <p>
                        <a href="">#novoprojeto</a>&nbsp;
                        <a href="">#nlw</a>&nbsp;
                        <a href="">#rocketseat</a>&nbsp;
                    </p>
                </div>

                <form className={styles.commentForm}>
                    <strong>deixe seu feedback</strong>
                    <textarea placeholder={'deixe um comentário'}></textarea>
                    <footer>
                        <button type={'submit'}>publicar</button>
                    </footer>
                </form>
            </article>
        </>
    )
}