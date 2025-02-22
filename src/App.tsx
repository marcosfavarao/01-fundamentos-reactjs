import { Header } from "./components/Header.tsx";
import { Sidebar } from "./components/Sidebar.tsx";

import styles from './app.module.css';
import './global.css';
import {Post} from "./components/Post.tsx";

export function App() {
    return (
        <>
            <Header />
                <div className={styles.wrapper}>
                    <Sidebar />
                    <main>
                        <Post />
                    </main>
              </div>
        </>
    )
}