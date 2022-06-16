import React, { useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import colors from '../../constants/colors';
import { useAuth } from '../../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Menu,
  Typography,
  IconButton,
  Box,
  Toolbar,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';

import { StyledLinkWhite, StyledLinkBlack } from './NavBar.styles';
import { removeJournal } from '../../app/journalSlice';
import LogInModal from '../LogIn/LogIn';

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { logout, currentUser } = useAuth();
  const [open, setOpen] = React.useState(false);

  const journal = useSelector((state) => state.journal.entries);
  const dispatch = useDispatch();
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const handleDeleteJournal = () => {
    dispatch(removeJournal());
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDownloadJournal = () => {
    const blob = new Blob([JSON.stringify(journal)], {
      type: 'application/json',
    });
    const journalDownloadUrl = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.download = 'journal.txt';
    a.href = journalDownloadUrl;
    a.click();
    URL.revokeObjectURL(journalDownloadUrl);
  };

  const settings = [
    { name: 'Download Journal', function: handleDownloadJournal },
    { name: 'Delete Journal', function: handleDeleteJournal },
  ];

  const pages = [
    { name: 'Journal', route: '/' },
    { name: 'Analytics', route: '/analytics' },
    { name: 'My Word Clouds', route: `/wordclouds` },
  ];

  return (
    <AppBar position="static" style={{ background: `${colors.blue2}` }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuBookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mooday
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <StyledLinkBlack to={page.route}>
                      {page.name}
                    </StyledLinkBlack>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <MenuBookIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mooday
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <StyledLinkWhite to={page.route}>{page.name}</StyledLinkWhite>
              </Button>
            ))}
          </Box>

          <LogInModal />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SettingsOutlinedIcon sx={{ color: 'white' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={() => setting.function()}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
