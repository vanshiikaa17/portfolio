import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./contact.css";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="contact">
      <h1>CONTACT ME</h1>
      <div class="contactcard">
        <h2>Have a project in mind? </h2>
        <h2>It's always better to have multiple innovative heads brainstorming together to break down a complex task.</h2>
        <h2>So, let's talk? </h2>
        
        <Link to="mailto:vanshikamohindra.vani@gmail.com"><button className="abtbtn">Email Me</button></Link>
        <h2>Do checkout my social space: </h2>
        <div class="social">

          <i><a href="https://www.linkedin.com/in/vanshika-mohindra-543350207/"><FaLinkedin /></a></i>
          <i><a href="https://github.com/vanshiikaa17"><FaGithub /></a></i>

        </div>
        <p><IoMail /> vanshikamohindra.vani@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact