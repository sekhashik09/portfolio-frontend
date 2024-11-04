import React from 'react'
import './Skills.css'
import azsql from '../../assets/skillsimg/azsql.png'
import html from '../../assets/skillsimg/html.png'
import css from '../../assets/skillsimg/css.png'
import js from '../../assets/skillsimg/js.png'
import reactjs from '../../assets/skillsimg/reactjs.png'
import nodejs from '../../assets/skillsimg/nodejs.png'
import expressjs from '../../assets/skillsimg/expressjs.png'
import mongodb from '../../assets/skillsimg/mongodb.png'
import mysql from '../../assets/skillsimg/mysql.png'
import firebase from '../../assets/skillsimg/firebase.png'
import azurecloud from '../../assets/skillsimg/azurecloud.png'
import azvm from '../../assets/skillsimg/azvm.png'
import azvnet from '../../assets/skillsimg/azvnet.png'
import github from '../../assets/skillsimg/github.png'
import git from '../../assets/skillsimg/git.png'
import postman from '../../assets/skillsimg/postman.png'
import docker from '../../assets/skillsimg/docker.png'
import webstrom from '../../assets/skillsimg/webstrom.png'
import vscode from '../../assets/skillsimg/vscode.png'













const Skills = () => {
  return (
    <section className="skills" id="skills">
    <h2>Skills</h2>
    
    {/* <!-- Frontend Skills --> */}
    <div className="skills-category">
        <h3>Frontend</h3>
        <div className="skills-items">
            <div className="skill">
                <img src={html} alt="HTML"/>
                <p>HTML</p>
            </div>
            <div className="skill">
                <img src={css} alt="CSS"/>
                <p>CSS</p>
            </div>
            <div className="skill">
                <img src={js} alt="JavaScript"/>
                <p>JavaScript</p>
            </div>
            <div className="skill">
                <img src={reactjs} alt="React.Js"/>
                <p>React.Js</p>
            </div>
        </div>
    </div>

    {/* <!-- Backend Skills --> */}
    <div className="skills-category">
        <h3>Backend</h3>
        <div className="skills-items">
            <div className="skill">
                <img src={nodejs} alt="Node.js"/>
                <p>Node.js</p>
            </div>
            <div className="skill">
                <img src={expressjs} alt="Express"/>
                <p>Express.js</p>
            </div>
            <div className="skill">
                <img src={mongodb} alt="MongoDB"/>
                <p>MongoDB</p>
            </div>
            <div className="skill">
                <img src={mysql} alt="MySQL"/>
                <p>MySQL</p>
            </div>
            <div className="skill">
                <img src={firebase} alt="FireBase"/>
                <p>FireBase</p>
            </div>
            
        </div>
    </div>

    {/* <!-- Cloud Skills --> */}
    <div className="skills-category">
        <h3>Cloud</h3>
        <div className="skills-items">
            <div className="skill">
                <img src={azurecloud} alt="Azure Cloud"/>
                <p>Azure Cloud</p>
            </div>
            <div className="skill">
                <img src={azvm} alt="Azure VM"/>
                <p>Azure VM</p>
            </div>
            <div className="skill">
                <img src={azsql} alt="Azure SQL"/>
                <p>Azure SQL</p>
            </div>
            <div className="skill">
                <img src={azvnet} alt="Azure VNet"/>
                <p>Az VNet</p>
            </div>
        </div>
    </div>

    {/* <!-- Other Skills --> */}
    <div className="skills-category">
        <h3>Tools</h3>
        <div className="skills-items">
            <div className="skill">
                <img src={github} alt="GitHub"/>
                <p>GitHub</p>
            </div>
            <div className="skill">
                <img src={git} alt="Git"/>
                <p>Git</p>
            </div>
            <div className="skill">
                <img src={postman} alt="Postman"/>
                <p>Postman</p>
            </div>
            <div className="skill">
                <img src={docker} alt="Docker"/>
                <p>Docker</p>
            </div>
            <div className="skill">
                <img src={webstrom} alt="WebStrom"/>
                <p>WebStrom</p>
            </div>
            <div className="skill">
                <img src={vscode} alt="VS Code"/>
                <p>VS Code</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Skills