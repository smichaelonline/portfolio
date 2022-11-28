import styles from './Contact.module.css'

import LinkedIn from '../../assets/icons/linkedin.svg'
import Github from '../../assets/icons/github.svg'
import Mail from '../../assets/icons/mail.svg'

function Contact() {
  return (
    <div id="contact" className={styles.contactDiv}>
      <h1 className={styles.contact}>Contact</h1>
      <div className={styles.contactInfo}>
        <h3>I'd love to hear from you!</h3>
        <a href="https://www.linkedin.com/in/stephaniemichael001/">
          <img src={LinkedIn} className={styles.logoIcons}alt="LinkedIn Logo" />
        </a>
        <p className={styles.handleLI}>@stephaniemichael001</p>
        <a href="https://github.com/smichaelonline">
          <img src={Github} alt="Github Logo" className={styles.logoIcons} />
        </a>
        <p className={styles.handleGH}>@smichaelonline</p>
        <img src={Mail} alt="Gmail Logo" className={styles.logoIcons} />
        <p className={styles.handleEmail}>stephaniemichael001@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact