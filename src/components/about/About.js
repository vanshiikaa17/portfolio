import { FaCss3, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa"
import "./about.css"
import { SiExpress, SiJavascript, SiMongodb, SiSpringboot } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { PiFileCppFill } from "react-icons/pi"
import AnchorLink from "react-anchor-link-smooth-scroll"

const About = () => {
    return (
        <div id="about">
            <h1>ABOUT ME</h1>
            <div class="aboutcontainer">
                <div class="aboutdesc">
                    <h2>What I do?</h2>
                    <p>I'm a versatile <b>Fullstack developer</b> proficient in crafting dynamic web solutions. With expertise in <b>MongoDB, Express.js, React.js, and Node.js</b>, I bring creativity and functionality together to build immersive digital experiences.</p>
                    <p>I possess a talent for devising efficient solutions to real-world challenges. Drawing from <b>industry experience</b> and a relentless drive for self-improvement, I've honed a diverse skill set. Explore my portfolio in the <AnchorLink href="#projects">Projects</AnchorLink> section to see my capabilities in action.</p>
                    <p>Driven by a passion for innovation and a commitment to excellence, I'm dedicated to bringing your web projects to life with precision and flair. Let's collaborate and create something extraordinary together.</p>

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

               
            </div>

            <i></i>
        </div>
    )
}

export default About