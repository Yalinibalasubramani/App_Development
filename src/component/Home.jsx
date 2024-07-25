import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faProjectDiagram, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/home.css'; // Make sure to import the CSS file
import { ReactTyped, Typed } from 'react-typed';

const Home = () => {
  return (
    <div>
    <div>
      <nav className="navbar">
        <div className="navbar-brand">C</div>
        <ul className="nav-links">
          <li>
            <Link to="/home" data-title="Home">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li>
            <Link to="/about" data-title="About">
              <FontAwesomeIcon icon={faInfoCircle} />
            </Link>
          </li>
          <li>
            <Link to="/contact" data-title="Contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </li>
          <li>
            <Link to="/project-showcase" data-title="Project Showcase">
              <FontAwesomeIcon icon={faProjectDiagram} />
            </Link>
          </li>
          <li>
            <Link to="/login" data-title="Logout">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="text">
      WE CREATE 
      <span className='text1'>
      <ReactTyped
      strings={["ELEVATED","UNFORGETTABLE","PURPOSEFUL"]}
      typeSpeed={150}
      backSpeed={100}
      loop/>
      </span>
      BRAND EXPERIENCES
    </div>
    </div>
   
    
   
  );

};

export default Home;
