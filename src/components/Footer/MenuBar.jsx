import './Footer.scss';
import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function MenuBar({ media }) {

  const [properties, setProperties] = useState({
    sx: { display: { xs: 'none', md: 'flex' } },
    direction: 'column',
    className: 'navigation flex small-font'
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

  return (
    <Stack
      direction={properties.direction}
      className={properties.className}
      spacing={1}>
      <div className='menu-item'>
        Home
      </div>
      <div className='menu-item'>
        About
      </div>
      <div className='menu-item'>
        Experiences
      </div>
      <div className='menu-item'>
        Contact
      </div>
    </Stack>
  );
}

MenuBar.propTypes = {
  media: PropTypes.string.isRequired
}

