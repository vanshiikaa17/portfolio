import React from 'react'
import { FaCode } from 'react-icons/fa'
import { IoIosInformationCircle, IoIosLink } from 'react-icons/io'
// import imgg from "../../images/gb.png";
import "./projects.css"
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
    return (
        <div className='projectcard'>
            <img src={props.img} alt={props.title} />
            <div className='desc'>
                <h2>{props.title}</h2>
                <p>{props.shortdesc}</p>
                <div class="moreoptions">

                    <i><a href={props.github}><FaCode /></a></i>
                    <i><a href={props.link}><IoIosLink /></a></i>
                    <i><Link to='/description'><IoIosInformationCircle /></Link></i>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard