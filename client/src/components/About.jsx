import React from 'react';
import Nestor from '../assets/Nestor.jpeg';
import Carlos from '../assets/Carlos.jpeg';
import Lu from '../assets/Lu.jpeg';
import Jona from '../assets/Jona.jpeg';
import Gaspar from '../assets/Gaspar.jpeg';
import Rodri from '../assets/Rodri.jpeg';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

import about from '../styles/About.module.css'

const developers = [{
  name: 'Néstor Arias Cataldi',
  role: 'Full Stack Developer',
  linkedIn: 'https://www.linkedin.com/in/n%C3%A9stor-arias-cataldi-895b067a',
  gitHub: 'https://github.com/nariascataldi',
  profilePicture: Nestor,
},

{
  name: 'Carlos Solá Zambrano',
  role: 'Full Stack Developer',
  linkedIn: 'https://www.linkedin.com/in/carlos-sol%C3%A1-zambrano-228093224',
  gitHub: 'https://github.com/carlos-sola',
  profilePicture: Carlos,
},


{
  name: 'Luciana Soledad Diaz',
  role: 'Full Stack Developer',
  linkedIn: 'https://www.linkedin.com/in/',
  gitHub: 'https://github.com/LucianaSoledad86',
  profilePicture: Lu,
},

{
  name: 'Jonathan Daniel Pérez',
  role: 'Full Stack Developer',
  linkedIn: 'https://www.linkedin.com/in/jonathanperezfrontenddeveloper',
  gitHub: 'https://github.com/Jonathandanielperez',
  profilePicture: Jona,
},

{
 name: 'Gaspar Pérez',
 role: 'Full Stack Developer',
 linkedIn: 'https://www.linkedin.com/in/gaspar-perez-9006a5239',
 gitHub: 'https://github.com/gasparperez2',
 profilePicture: Gaspar,
},

{
  name: 'Luis Rodrigo Hernández',
  role: 'Full Stack Developer',
  linkedIn: 'https://www.linkedin.com/in/rodrigo-hernandez-4a8b5523b',
  gitHub: 'https://github.com/RodriZach',
  profilePicture: Rodri,
},

];
console.log(developers);

function About() {
  return (
    <div className={about.principalContainer}>
    <Link to= '/'><button className={about.button}>Home</button></Link>
      <h1 className={about.Title}>¡Conocé a los creadores de Coffees Order!</h1>
      <div className={about.centerViewContainer}>
      <div className={about.Cards}>
        {
          developers.map((d, i) => (
            <div className={about.Developers} key={i}>
              <img className= {about.ProfilePicture} src={d.profilePicture}/>
              <div className= {about.Names}>
                <p className= {about.FirstName}>
                  {d.name}
                </p>
              </div>
              <p className= {about.Role}>
                {d.role}
              </p>
              <a href={d.linkedIn} target="_blank">
              <AiFillLinkedin className= {about.LinkedIn}/>
              </a>
              <a href={d.gitHub} target="_blank">
              <AiFillGithub className={about.GitHub}/>
              </a>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  );
}

export default About;