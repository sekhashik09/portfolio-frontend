import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className="about" id="about">
        <h2>About Me</h2> 
    
        <div className="about-text">
            <p>Hi! I'm Sekh Ashik Billa, a passionate <span>MERN Stack Developer</span> and <span>Azure Cloud Developer</span> based in Kolkata, West Bengal. I have a strong foundation in web development principles and practices, with a focus on building high-quality, scalable applications. My journey in technology began during my vocational education in Computer Science, where I developed a keen interest in programming and software development.</p>
            <p>I recently completed an internship at Webguru Infosystem Pvt. Ltd., where I gained hands-on experience in developing web applications using the MERN stack. This opportunity allowed me to work on exciting projects, collaborate with a talented team, and enhance my problem-solving skills.</p>
            <p>I'm always eager to learn new technologies and stay updated with industry trends. In addition to my technical skills, I believe in the importance of effective communication and teamwork in achieving successful outcomes.</p>
        </div>
    
        <div className="about-boxes">
            <div className="box education">
                <h3>Education</h3>
                <p>BCA - Brainware University, Kolkata</p>
                <p>Vocational Education in Computer Science - Basirhat Naihati N.C.M Shiksha Niketan</p>
                <p>Secondary Education - Sangrampur BKAC Institution</p>
            </div>
            <div className="box experience">
                <h3>Experience</h3>
                <p>Internship as a MERN Stack Developer at Webguru Infosystem Pvt. Ltd.</p>
                <p>Projects: Developed multiple web applications using the MERN stack.</p>
            </div>
        </div>
    </section>
    
  )
}

export default About