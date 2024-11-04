import React from 'react';
import './Portfolio.css'; // Ensure you have a separate CSS file for styles
import { FaGithub } from "react-icons/fa";
import img from '../../assets/portimg/Capture.png'
import img1 from '../../assets/portimg/Capture1.png'
import img2 from '../../assets/portimg/Capture2.png'
import img3 from '../../assets/portimg/Capture3.png'

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="center-text">
        <h2>My <span>Portfolio</span></h2>
      </div>
      <div className="portfolio-flex">
        <div className="portfolio-card">
          <img src={img} alt="Project 1" />
          <div className="card-overlay">
            <h5>Book Selling Website</h5>
            <p>A brief description of Project 1.</p>
            <a href="https://github.com/sekhashik09/book-selling"target='blank'><FaGithub/></a>
          </div>
        </div>
        <div className="portfolio-card">
          <img src={img1} alt="Project 2" />
          <div className="card-overlay">
            <h5>QR Code Generator</h5>
            <p>A brief description of Project 2.</p>
            <a href="https://github.com/sekhashik09/qrcode-generator"target='blank'><FaGithub/></a>
          </div>
        </div>
        <div className="portfolio-card">
          <img src={img2} alt="Project 3" />
          <div className="card-overlay">
            <h5>Personal Portfolio</h5>
            <p>A brief description of Project 3.</p>
            <a href="#" target='blank'><FaGithub/></a>
          </div>
        </div>
        <div className="portfolio-card">
          <img src={img3} alt="Project 4" />
          <div className="card-overlay">
            <h5>Course Seeking Website</h5>
            <p>A brief description of Project 4.</p>
            <a href="https://github.com/sekhashik09/course-seeking" target='blank'><FaGithub/></a>
          </div>
        </div>
        <div className="portfolio-card">
          <img src={img} alt="Project 5" />
          <div className="card-overlay">
            <h5>Project Title 5</h5>
            <p>A brief description of Project 5.</p>
            <a href="#"><FaGithub/></a>
          </div>
        </div>
        <div className="portfolio-card">
          <img src={img} alt="Project 5" />
          <div className="card-overlay">
            <h5>Project Title 5</h5>
            <p>A brief description of Project 5.</p>
            <a href="#"><FaGithub/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
