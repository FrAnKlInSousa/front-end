import styles from './Sidebar.module.css'
import perfilImage from '../assets/cover.avif'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
    <img 
      className={styles.cover} 
      src={perfilImage} 
      />
    <div className={styles.profile}>
      <Avatar src="https://github.com/FrAnKlInSousa.png"/>
      <strong>Franklin Sousa</strong>
      <span>Web developer</span>
    </div>

    <footer>
      <a href="#">
        <PencilLine size={20}/>
        Editar seu perfil
      </a>
    </footer>
  </aside>
  )

}