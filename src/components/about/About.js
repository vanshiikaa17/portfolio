import { FaCss3, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa"
import "./about.css"
import { SiExpress, SiJavascript, SiMongodb, SiSpringboot } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { PiFileCppFill } from "react-icons/pi"

const About = () => {
    return (
        <div id="about">
            <h1>ABOUT ME</h1>
            <div class="aboutcontainer">
                <div class="aboutdesc">
                    <h2>What I do?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum harum nobis aperiam, non ut? Id autem nostrum natus adipisci modi commodi eum exercitationem. Animi facere accusantium illum ut excepturi mollitia maxime officiis labore saepe, id corporis magnam veniam dolore sit aut tenetur libero. Dolorem!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sed, assumenda odit velit laudantium architecto adipisci facere consequatur quos, deserunt exercitationem ex rem ullam doloribus? Eligendi, sequi. Ab exercitationem delectus molestias maxime, facilis porro qui?</p>
                </div>
                <div class="techstack">
                    <h2>My Skillset</h2>
                    <div class="stack">
                        <div><i><FaReact /></i><p> &nbsp;React.js</p></div>
                        <div><i><SiMongodb /></i><p> &nbsp;MongoDB</p></div>
                        <div><i><SiExpress /></i><p> &nbsp;Express.js</p></div>
                        <div><i><FaNodeJs /></i><p> &nbsp;Node.js</p></div>
                        <div><i><SiJavascript /></i><p> &nbsp;JavaScript</p></div>
                        <div><i><PiFileCppFill /></i><p> &nbsp;C++</p></div>
                        <div><i><FaHtml5 /></i><p> &nbsp;HTML5</p></div>
                        <div><i><FaCss3 /></i><p> &nbsp;CSS3</p></div>
                        <div><i><GrMysql /></i><p> &nbsp;MySQL</p></div>
                        <div><i><SiSpringboot /></i><p> &nbsp;Springboot</p></div>
                        <div><i><FaGithub /></i><p> &nbsp;GitHub</p></div>
                    </div>

                </div>
                {/* <h3>Please find my resume here: </h3>
        <button className="abtbtn">MY RESUME</button> */}

                {/* <div class="social">
                    <h3>My resume: </h3>
                    <i><FaLinkedin /></i>
                    <i><FaGithub /></i>
                    
                    <a href={pdf}> <i><FaFileAlt /></i></a>
                </div> */}
            </div>

            <i></i>
        </div>
    )
}

export default About