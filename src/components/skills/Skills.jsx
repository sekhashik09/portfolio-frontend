import React from 'react';
import './Skills.css';
import azsql from '../../assets/skillsimg/azsql.png';
import html from '../../assets/skillsimg/html.png';
import css from '../../assets/skillsimg/css.png';
import js from '../../assets/skillsimg/js.png';
import reactjs from '../../assets/skillsimg/reactjs.png';
import nodejs from '../../assets/skillsimg/nodejs.png';
import expressjs from '../../assets/skillsimg/expressjs.png';
import mongodb from '../../assets/skillsimg/mongodb.png';
import mysql from '../../assets/skillsimg/mysql.png';
import firebase from '../../assets/skillsimg/firebase.png';
import azurecloud from '../../assets/skillsimg/azurecloud.png';
import azvm from '../../assets/skillsimg/azvm.png';
import azvnet from '../../assets/skillsimg/azvnet.png';
import github from '../../assets/skillsimg/github.png';
import git from '../../assets/skillsimg/git.png';
import postman from '../../assets/skillsimg/postman.png';
import docker from '../../assets/skillsimg/docker.png';
import webstorm from '../../assets/skillsimg/webstrom.png';
import vscode from '../../assets/skillsimg/vscode.png';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="skills" id="skills">
      <h2>{t('skills.title')}</h2>

      <div className="skills-category">
        <h3>{t('skills.frontend')}</h3>
        <div className="skills-items">
          <div className="skill">
            <img src={html} alt="HTML" />
            <p>{t('skills.html')}</p>
          </div>
          <div className="skill">
            <img src={css} alt="CSS" />
            <p>{t('skills.css')}</p>
          </div>
          <div className="skill">
            <img src={js} alt="JavaScript" />
            <p>{t('skills.javascript')}</p>
          </div>
          <div className="skill">
            <img src={reactjs} alt="React.js" />
            <p>{t('skills.react')}</p>
          </div>
        </div>
      </div>

      <div className="skills-category">
        <h3>{t('skills.backend')}</h3>
        <div className="skills-items">
          <div className="skill">
            <img src={nodejs} alt="Node.js" />
            <p>{t('skills.node')}</p>
          </div>
          <div className="skill">
            <img src={expressjs} alt="Express.js" />
            <p>{t('skills.express')}</p>
          </div>
          <div className="skill">
            <img src={mongodb} alt="MongoDB" />
            <p>{t('skills.mongodb')}</p>
          </div>
          <div className="skill">
            <img src={mysql} alt="MySQL" />
            <p>{t('skills.mysql')}</p>
          </div>
          <div className="skill">
            <img src={firebase} alt="Firebase" />
            <p>{t('skills.firebase')}</p>
          </div>
        </div>
      </div>

      <div className="skills-category">
        <h3>{t('skills.cloud')}</h3>
        <div className="skills-items">
          <div className="skill">
            <img src={azurecloud} alt="Azure Cloud" />
            <p>{t('skills.azure_cloud')}</p>
          </div>
          <div className="skill">
            <img src={azvm} alt="Azure VM" />
            <p>{t('skills.azure_vm')}</p>
          </div>
          <div className="skill">
            <img src={azsql} alt="Azure SQL" />
            <p>{t('skills.azure_sql')}</p>
          </div>
          <div className="skill">
            <img src={azvnet} alt="Azure VNet" />
            <p>{t('skills.azure_vnet')}</p>
          </div>
        </div>
      </div>

      <div className="skills-category">
        <h3>{t('skills.tools')}</h3>
        <div className="skills-items">
          <div className="skill">
            <img src={github} alt="GitHub" />
            <p>{t('skills.github')}</p>
          </div>
          <div className="skill">
            <img src={git} alt="Git" />
            <p>{t('skills.git')}</p>
          </div>
          <div className="skill">
            <img src={postman} alt="Postman" />
            <p>{t('skills.postman')}</p>
          </div>
          <div className="skill">
            <img src={docker} alt="Docker" />
            <p>{t('skills.docker')}</p>
          </div>
          <div className="skill">
            <img src={webstorm} alt="WebStorm" />
            <p>{t('skills.webstorm')}</p>
          </div>
          <div className="skill">
            <img src={vscode} alt="VS Code" />
            <p>{t('skills.vscode')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
