import { Link } from "react-router-dom";
import logo from '../../assets/branding/logo.png'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navoptions}> 
        <Link to='/'><img src={logo} alt="Happy Face inside SM circle (Stephanie Michael)" className={styles.logoImgLeft}/></Link>
        <div className={styles.linksRight}>
          <a href="#about" className={styles.aboutnav}>About</a>
          <a href="#resume" className={styles.resumenav}>Resume</a>
          <a href="#projects" className={styles.projectsnav}>Projects</a>
          <a href="#contact" className={styles.contactnav}>Contact Me</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar