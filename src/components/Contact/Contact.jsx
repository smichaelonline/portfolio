import styles from './Contact.module.css'

function Contact() {
  return (
    <div id="contact">
      <h1 className={styles.contact}>Contact</h1>
      <h3>Reach out if you'd like to work with me!</h3>
      <p>LinkedIn</p>
      <p>Github</p>
      <p>Email</p>
    </div>
  )
}

export default Contact