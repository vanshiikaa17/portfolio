// import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import "./home.css";
import pdf from "../../Vanshika_Mohindra.pdf"

// import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <div id="home">
      <div className="innerHome">
        <h1>HI, I'M VANSHIKA</h1>
        <p>a MERN based Web Developer</p>
        <p>I thrive on bringing ideas to life through code.</p>
        <a href={pdf}><button className="abtbtn">MY RESUME</button></a>
      </div>
      {/* <div class="social">
        <i><FaLinkedin /></i>
        <i><FaGithub /></i>
        <i><SiLeetcode /></i>
        <i><FaFileAlt /></i>
      </div> */}
    </div>
  )
}

export default Home