// src/components/Event.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingContext } from '../context/BookingContext';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../assets/register.css';
import '../assets/events.css';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome, faInfoCircle, faEnvelope, faCalendarAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const itemData = [
  {
    img: 'https://i.pinimg.com/736x/e3/71/32/e37132a9e942ea43aee49a98ff257d49.jpg',
    title: 'Bed',
    author: 'Exhibition and Experiential Spaces',
  },
  {
    img: 'https://i.pinimg.com/564x/2d/84/1d/2d841d58c070e9cf046406d04a1c0b5d.jpg',
    title: 'Books',
    author: 'Govt. and Institutional',
  },
  {
    img: 'https://i.pinimg.com/564x/8c/f5/c0/8cf5c06674084abbe5b73ba0ad0e6dc3.jpg',
    title: 'Sink',
    author: 'Virtual',
  },
  {
    img: 'https://i.pinimg.com/564x/5b/10/00/5b1000f6819c94eaa6c15e799d19c948.jpg',
    title: 'Kitchen',
    author: 'CSR',
  },
  {
    img: 'https://i.pinimg.com/564x/03/b7/0c/03b70ca7d1ab64bf695dd6baa3d0065a.jpg',
    title: 'Chairs',
    author: 'Awards & Launches',
  },
  {
    img: 'https://i.pinimg.com/564x/10/be/c2/10bec23b295ff3d41113118b8dc594d7.jpg',
    title: 'Laptop',
    author: 'Musical Concerts',
  },
  {
    img: 'https://i.pinimg.com/564x/3e/79/fc/3e79fc8ee970cd401841a35bd1875180.jpg',
    title: 'Doors',
    author: 'Media/Influencer Activation',
  },
  {
    img: 'https://i.pinimg.com/564x/76/64/b6/7664b69b613a984f7fcfd91df224ccc1.jpg',
    title: 'Coffee',
    author: 'Workshops & Seminars',
  },
  {
    img: 'https://i.pinimg.com/564x/db/28/c2/db28c2b8a7b1f56db5e3a5936a14b959.jpg',
    title: 'Blinds',
    author: 'Summits & Conclaves',
  },
  {
    img: 'https://i.pinimg.com/736x/8b/2f/81/8b2f81df53fe5a048b72bb642ef3ed65.jpg',
    title: 'Storage',
    author: 'Charity Fundraisers',
  },
  {
    img: 'https://i.pinimg.com/564x/02/01/f0/0201f014971417a31cc5b56b7fa77d3d.jpg',
    title: 'Candle',
    author: 'Corporate Dinners',
  },
  {
    img: 'https://i.pinimg.com/564x/10/65/a7/1065a7a32cc18f565bc229a9fbd98637.jpg',
    title: 'Coffee table',
    author: 'Product Launches',
  },
];

const Event = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { setSelectedEvent } = useContext(BookingContext);
  const navigate = useNavigate();

  const filteredData = itemData.filter((item) =>
    item.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImageClick = (item) => {
    setSelectedEvent(item);
    navigate('/booking');
  };

  return (
    <div className="main">
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
      <div className="our_event">
        <h3>Our Events</h3>
        <input
          type="text"
          placeholder="Search Events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="image-gallery-container">
        <Box className="image-gallery-box">
          <ImageList className="image-gallery" variant="masonry" cols={3} gap={16}>
            {filteredData.map((item) => (
              <ImageListItem key={item.img} className="image-item" onClick={() => handleImageClick(item)}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="image-text">{item.author}</div>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
      <footer className="contact-footer">
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
          <p>&copy; 2024 Casara. All Rights Reserved.</p>
          <p>Contact us: <a href="mailto:contact@tantraa.com">contact@tantraa.com</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Event;
