import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1698306871976-44c89d592958?auto=format&fit=crop&q=40&w=200&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/AdnRamos.png"/>
        <strong>Adn Ramos</strong>
        <span>Web Devloper</span>
      </div>
      <footer>
        <a href="#">
          < PencilLine  size={20}/>
          Editar seu perfil</a>
      </footer>
    </aside>
  );
}