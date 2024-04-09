import './Footer.scss';
import {Stack} from "@mui/material";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

export default function MenuBar({media}) {

  const [properties, setProperties] = useState({
    sx: { display: { xs: 'none', md: 'flex' } },
    direction: 'column',
    className: 'navigation flex small-font'
  });

  const initializeProperties = () => {
    if (media === 'xs') {
      setProperties ({
        sx: { display: { xs: 'flex', md: 'none' } },
        direction: 'column',
        className: 'navigation flex small-font'
      })
    }
    else {
      setProperties ({
        sx: { display: { xs: 'none', md: 'flex' } },
        direction: 'row',
        className: 'navigation flex'
      })
    }
  }

  useEffect(() => {
    initializeProperties();
  }, [media]);

  return (
    <Stack
      sx={properties.sx}
      direction={properties.direction}
      className={properties.className}
      spacing={1}>
      <div className='menu-item'>
        <a href="/home">Home</a>
      </div>
      <div className='menu-item'>
        <a href="/about">About</a>
      </div>
      <div className='menu-item'>
        <a href="/experiences">Experiences</a>
      </div>
      <div className='menu-item'>
        <a href="/contact">Contact</a>
      </div>
    </Stack>
  );
}

MenuBar.propTypes = {
  media: PropTypes.string.isRequired
}

