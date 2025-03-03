import {Header} from './components/Header.tsx';
import {Sidebar} from './components/Sidebar.tsx';
import {Post} from './components/Post.tsx';
import type {PostType} from './components/Post.tsx';

import styles from './app.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: 'marcos favarao',
      avatarUrl: 'https://github.com/marcosfavarao.png',
      role: 'web developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'acabei de subir mais um projeto no meu portifa. é um projeto que fiz no nlw return, evento da rocketseat. o nome do projeto é doctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'diego fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'cto @ rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'fala galeraa 👋' },
      { type: 'paragraph', content: 'acabei de subir mais um projeto no meu portifa. é um projeto que fiz no nlw return, evento da rocketseat. o nome do projeto é doctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  }
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (<Post key={post.id} post={post} />))}
        </main>
      </div>
    </>
  )
}