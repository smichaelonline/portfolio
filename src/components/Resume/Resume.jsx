import styles from './Resume.module.css'

import GA from '../../assets/experienceImgs/General-Assembly.png'
import SaatchiLogo from '../../assets/experienceImgs/Saatchi.png'
import Devries from '../../assets/experienceImgs/Devries.png'
import Taylor from '../../assets/experienceImgs/Taylor.png'
import MSU from '../../assets/experienceImgs/Montclair-State.png'

function Resume() {
  return (
    <div id="resume" className={styles.resumeContainer}>
      <h1 className={styles.expHeader}>Experience</h1>

      <h2 className={styles.professionalExp}>Professional</h2>
      <div className={styles.GADiv}>
        <img src={GA} alt="General Assembly Logo" className={styles.logo}/>
        <div className={styles.infoDiv}> 
          <h4 className={styles.time}>August 2022 to November 2022</h4>
          <h2 className={styles.org}>General Assembly - Software Engineering Immersive Fellow</h2>
          <h5 className={styles.location}>Location: Remote</h5>
          
          <p>Successfully completed 500+ hours of expert-led instruction in JavaScript, Python, React as well as other programs as well as  hands-on learning of web and mobile application fundamentals and the industry's most in demand technologies. Developed projects, including:</p>
        </div>
      </div>

      <div className={styles.SaatchiDiv}>
        <img src={SaatchiLogo} alt="M&C Saatchi Logo" className={styles.logo}/>
        <div className={styles.infoDiv}> 
          <h4 className={styles.time}>April 2022 to August 2022 </h4>
          <h2 className={styles.org}>MC Saatchi - Senior Account Executive</h2>
          <h5 className={styles.location}>Location: New York, NY </h5>
          
          <ul className={styles.details}>
            <li>Fulfilled client requests in a timely manner including additional plans where needed</li>
            <li>Created media strategies and pitching plans for upcoming campaigns </li>
          </ul>
        </div>
      </div>

      <div className={styles.DevriesDiv}> 
        <img src={Devries} alt="Devries Global Logo" className={styles.logo}/>
        <div className={styles.infoDiv}> 
          <h4 className={styles.time}>September 2021 to April 2022 </h4>
          <h2 className={styles.org}>DeVries Global - Account Executive</h2>
          <h5 className={styles.location}>Location: New York, NY </h5>
          
          <ul className={styles.details}>
            <li>
              During first week on the job, secured 6 top tier beauty editors to attend event which yielded coverage for new product launch and built relationships with media in the beauty category
            </li>
            <li>
              Created workbacks, run-of-shows, executive messaging, media lists, pitches, press releases, Q&A's, facts sheets and briefing book
            </li>
            <li>
              Proactively identified challenges and developed solutions while remaining on strategy and continued to meet client needs
            </li>
            <li>
              Served as day-to-day client contact and lead in client presentations
            </li>
            <li>
              Actively participated in program ideation and planning across accounts through mailers, events, and media tours. Contributed new ways of thinking and current trends that are relevant for the brand
            </li>
            <li>
              Managed and oversaw junior staff members throughout day-to-day operations
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.TaylorDiv}> 
        <img src={Taylor} alt="Taylor Global Logo" className={styles.logo}/>
        <div className={styles.infoDiv}> 
          <h4 className={styles.time}>September 2019 to September 2021 </h4>
          <h2 className={styles.org}>Taylor Strategy - Assistant Account Executive</h2>
          <h5 className={styles.location}>Location: New York, NY </h5>
          <ul className={styles.details}>
            <li>
              Assisted strategy teams in content calendar planning for paid & organic content, client & legal approvals, and scheduling. Handled daily community management for brand social media accounts
            </li>
            <li>
              Proactively pitch media on an ongoing basis, developing and maintaining key influencer relationships across local, regional, and national print, broadcast, and online channels
            </li>
            <li>
              Managed logistical elements such as scheduling, travel coordination, mailings, event coordination, vendor billing and status updates
            </li>
          </ul>
        </div>
      </div>

      <h1 className={styles.education}>Education</h1>
        
          <div className={styles.edDiv}>
            <img src={GA} alt="General Assembly Logo" className={styles.logoEd}/>
            <div className={styles.edInfo}>
              <h2 className={styles.org}> General Assembly </h2>
              <h4 className={styles.degree}>Software Engineering Immersive</h4> 
              <h5 className={styles.location}>Location: Remote</h5>
            </div>
          </div>
          <div className={styles.edDiv}> 
            <img src={MSU} alt="Montclair State University Logo" className={styles.logoEd}/>
            <div className={styles.edInfo}>
              <h2 className={styles.org}> Montclair State University </h2>
              <h4 className={styles.degree}>Bachelors of Arts in Public Relations</h4> 
              <h5 className={styles.location}>Location: New Jersey</h5>
            </div>
          </div>
    </div>
  )
}

export default Resume 