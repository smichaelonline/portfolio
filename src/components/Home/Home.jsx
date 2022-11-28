import styles from './Home.module.css'

function Home() {
  return (
    <div class="animate__animated animate__fadeIn" id={styles.animationDiv}>
      <h1 className={styles.welcome}>Hello!👋🏼 </h1>
    </div>
  )
}

export default Home