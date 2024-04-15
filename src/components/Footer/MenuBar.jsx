import './Footer.scss';
import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function MenuBar({ media }) {

  const [properties, setProperties] = useState({
    direction: 'column',
    className: 'navigation'
  });

  const initializeProperties = () => {
    if (media === 'xs') {
      setProperties({
        direction: 'column',
        className: 'navigation small-navigation'
      })
    } else {
      setProperties({
        direction: 'row',
        className: 'navigation'
      })
    }
  }

  useEffect(() => {
    initializeProperties();
  }, [media]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Stack
      direction={properties.direction}
      className={properties.className}
      spacing={1}>
      <div className='menu-item' onClick={() => {
        scrollToSection('home')
      }}>
        Home
      </div>
      <div className='menu-item' onClick={() => {
        scrollToSection('about')
      }}>
        About
      </div>
      <div className='menu-item' onClick={() => {
        scrollToSection('experience')
      }}>
        Experiences
      </div>
      <div className='menu-item' onClick={() => {
        scrollToSection('contact')
      }}>
        Contact
      </div>
    </Stack>
  );
}

MenuBar.propTypes = {
  media: PropTypes.string.isRequired
}

