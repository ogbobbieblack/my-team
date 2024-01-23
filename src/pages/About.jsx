import Clients from "../components/Clients"
import Directors from "../components/Directors"
import HeroAbout from "../components/HeroAbout"
import Ready from "../components/Ready"


const About = () => {
  return (
    <div>
        <HeroAbout/>
        <Directors/>
        <Clients/>
        <Ready/>
    </div>
  )
}

export default About