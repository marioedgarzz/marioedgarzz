import './Footer.scss';
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuBar from "./MenuBar";

export default function Footer() {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container className='footer'>
      <Container sx={{ display: { xs: 'none', md: 'block' } }}>
        <MenuBar media='md'/>
      </Container>

      <Container sx={{ display: { xs: 'flex', md: 'none' } }}>
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
      </Container>
    </Container>
  );
}
