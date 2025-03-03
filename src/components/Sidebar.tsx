import {PencilLine} from 'phosphor-react';
import {Avatar} from './Avatar.tsx';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src='https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />

        <div className={styles.profile}>
          <Avatar hasBorder src='https://github.com/marcosfavarao.png' />
          <strong>marcos favarao</strong>
          <span>web developer</span>
        </div>

        <footer>
          <a href='#'>
            <PencilLine />
            editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  )
}
