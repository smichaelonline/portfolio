import styles from './Contact.module.css'

function Contact() {
  return (
    <div id="contact" className={styles.contactDiv}>
      <h1 className={styles.contact}>Contact</h1>
      <div className={styles.contactInfo}>
        <h3>Reach out if you'd like to work with me!</h3>
        <p>LinkedIn</p>
        <p>Github</p>
        <p>Email</p>
      </div>
    </div>
  )
}

export default Contact