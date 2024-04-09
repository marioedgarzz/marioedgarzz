import './Footer.scss';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuBar from "./MenuBar";

import { Grid } from "@mui/material";

export default function Footer() {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [parentWidth, setParentWidth] = useState(0);

  useEffect(() => {
    const parentContainer = document.querySelector('.footer-div');
    if (parentContainer) {
      const width = parentContainer.offsetWidth;
      setParentWidth(width);
    }

    const resizeHandler = () => {
      const width = parentContainer.offsetWidth;
      setParentWidth(width);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className='footer-div'>
      <div className='footer' style={{ width: parentWidth }}>
        <Grid sx={{ display: { xs: 'none', md: 'block' } }}>
          <MenuBar media='md'/>
        </Grid>

        <Grid sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            className='menu-icon'
            size="large"
            aria-controls="menu-appbar-2"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon/>
          </IconButton>

          <Menu
            id="menu-appbar-2"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuBar media='xs'/>
          </Menu>
        </Grid>
      </div>
    </div>
  );
}
