
import styles from "./Navbar.module.css"
import { useState } from 'react'
import { getImageUrl} from "../../utils"



function Navbar() {
    const  [menuOpen,setMenuOpen]=useState(false)


    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
            <img className={styles.menuBtn} 
            onClick={()=>{setMenuOpen(!menuOpen)}}
            src={ menuOpen ? "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/close-window-icon-18-256.png" : "  https://flaticons.net/icon.php?slug_category=user-interface&slug_icon=row "}
            alt="icon" 
            /> 
          
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}  onClick={()=>{setMenuOpen(false)}}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                    <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar


