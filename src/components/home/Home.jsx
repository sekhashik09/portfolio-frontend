import React from 'react';
import './Home.css'
import { FaGithub,FaFacebook,FaLinkedinIn } from "react-icons/fa";
import myphoto from '../../assets/img/myphoto.png';
import resume from '../../assets/img/resume_5.pdf';

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="main-content">
        <h2>Hi, There!</h2>
        <h1>I'm <span>Sekh Ashik Billa</span></h1>
        <p>Hello! I'm a MERN stack developer, passionate about building efficient and user-friendly web applications. Skilled in creating responsive designs and seamless user experiences, I enjoy turning ideas into digital solutions. I’m always eager to learn and take on new challenges!</p>
        <div className="sci">
          <a href="https://www.facebook.com/devunex.89" target='blank'><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/sekh-ashik-billa-989193258/" target='blank'><FaLinkedinIn /></a>
          <a href="https://github.com/sekhashik09" target='blank'><FaGithub /></a>
        </div>
        <div className="main-btn">
          <a href={resume} className="btn">Download CV</a>
        </div>
      </div>
      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src={myphoto} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
