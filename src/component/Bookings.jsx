// src/component/Bookings.jsx
import React, { useContext, useState } from 'react';
import { BookingContext } from '../context/BookingContext';
import { useNavigate } from 'react-router-dom';
import '../assets/booking.css';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faHome, faInfoCircle, faEnvelope, faCalendarAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Bookings = () => {
  const { selectedEvent } = useContext(BookingContext);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) errors.email = 'Email is required';
    if (!data.company) errors.company = 'Company is required';
    if (!data.attendees) errors.attendees = 'Number of attendees is required';
    if (!data.date) errors.date = 'Event date is required';
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = {
      name: data.get('name'),
      email: data.get('email'),
      company: data.get('company'),
      attendees: data.get('attendees'),
      date: data.get('date'),
      requests: data.get('requests')
    };

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      
      navigate('/payment');
    }
  };

  return (
    <div className='main'>
      <nav className="navbar">
        <div className="navbar-brand">Casara</div>
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
            <Link to="/events" data-title="Our Events">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </Link>
          </li>
          <li className="profile-dropdown">
            <FontAwesomeIcon icon={faUser} />
            <div className="dropdown-content">
              <Link to="/my-events" data-title="My Events">My Events</Link>
              <Link to="/my-profile" data-title="My Profile">My Profile</Link>
            </div>
          </li>
          <li>
            <Link to="/login" data-title="Logout">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="booking-main">
        <div className="booking-content">
          <h2>Booking for {selectedEvent.author}</h2>
          <img src={selectedEvent.img} alt={selectedEvent.title} className="booking-image" />
          <p>{selectedEvent.author}</p>
          <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Book Your Corporate Event</h3>
            <label>
              Name:
              <input type="text" name="name" />
              {formErrors.name && <span className="error-message">{formErrors.name}</span>}
            </label>
            <label>
              Email:
              <input type="email" name="email" />
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </label>
            <label>
              Company:
              <input type="text" name="company" />
              {formErrors.company && <span className="error-message">{formErrors.company}</span>}
            </label>
            <label>
              Number of Attendees:
              <input type="number" name="attendees" />
              {formErrors.attendees && <span className="error-message">{formErrors.attendees}</span>}
            </label>
            <label>
              Event Date:
              <input type="date" name="date" />
              {formErrors.date && <span className="error-message">{formErrors.date}</span>}
            </label>
            <label>
              Special Requests:
              <textarea name="requests"></textarea>
            </label>
            <button type="submit">Book Now</button>
          </form>
        </div>
        <footer className="booking-footer">
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="footer-contact">
            <p>&copy; {new Date().getFullYear()} Casara. All Rights Reserved.</p>
            <p>
              Contact us: <a href="mailto:contact@company.com">contact@company.com</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Bookings;
