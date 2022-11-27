import headshot from '../../assets/branding/headshot.png'
import styles from './About.module.css'

function About() {
  return (
    <div id="about">
      <h1>I'm Stephanie</h1>
      <img src={headshot} alt="Headshot of Stephanie Michael" className={styles.headshotImg}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas diam. Proin libero nunc consequat interdum varius sit amet. Sit amet facilisis magna etiam. Bibendum arcu vitae elementum curabitur vitae. Lacus sed turpis tincidunt id aliquet risus feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Suspendisse in est ante in nibh. Donec et odio pellentesque diam volutpat. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. In nisl nisi scelerisque eu ultrices.</p>
      <p>Amet nulla facilisi morbi tempus iaculis urna id. Vitae ultricies leo integer malesuada. Orci porta non pulvinar neque laoreet suspendisse interdum. Et ligula ullamcorper malesuada proin libero nunc. Sit amet facilisis magna etiam tempor. Feugiat sed lectus vestibulum mattis. Dictum varius duis at consectetur lorem donec massa sapien. Consequat id porta nibh venenatis. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Erat velit scelerisque in dictum non. Urna id volutpat lacus laoreet non curabitur gravida arcu. Ac turpis egestas sed tempus urna et pharetra pharetra. Sed blandit libero volutpat sed cras ornare arcu. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Amet justo donec enim diam. Arcu dui vivamus arcu felis bibendum. Vel fringilla est ullamcorper eget. Mattis enim ut tellus elementum sagittis vitae et leo duis. Convallis aenean et tortor at. Imperdiet massa tincidunt nunc pulvinar sapien.</p>
    </div>
  )
}

export default About 