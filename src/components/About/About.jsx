import headshot from '../../assets/branding/headshot.png'
import styles from './About.module.css'

function About() {
  return (
    <div id="about">
      <img src={headshot} alt="Headshot of Stephanie Michael" className={styles.headshotImg}/>
      <div className={styles.bioDiv}>
        <h1 className={styles.intro}>I'm Stephanie. Nice to meet you.</h1>
        <div className={styles.bio} >
          <p>As a public relations professional turned Software Engineer, I am passionate about brand development and alignment which creates an ideal synergy with software engineering. My ability to consistently be prepared for any situation allows me to look at the bigger picture and make large problems manageable. These skill sets prepare me for building new, eye-catching products for consumers while simultaneously keeping in mind the human experience.</p>
        </div>
      </div>
    </div>
  )
}

export default About 