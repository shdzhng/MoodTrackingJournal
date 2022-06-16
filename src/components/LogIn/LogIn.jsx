import React, { useRef, useCallback, useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { InputLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import colors from '../../constants/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../../context/AuthContext';
import Alert from '@mui/material/Alert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};

export default function LogInModal() {
  const [open, setOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [createUser, setCreateUser] = React.useState(false);
  const [error, setError] = React.useState(null);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const passwordConfirmationRef = useRef('');
  const { signup, login, currentUser } = useAuth();

  console.log(currentUser.email);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCreateUser(false);
    setIsLoggedIn(false);
    setError(null);
  };

  const handleLogIn = useCallback((e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    login(email, password);
    console.log(`logging in with: ${email} ${password}`);

    handleClose();
  }, []);

  const handleCreateUserMode = useCallback((e) => {
    e.preventDefault();
    setError(null);
    setCreateUser(!createUser);
  }, []);

  const handleSignUp = useCallback((e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirmation = passwordConfirmationRef.current.value;

    if (password !== passwordConfirmation) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }

    try {
      setError(null);
      setLoading(true);
      signup(email, password);
    } catch {
      setError(' failed to create account');
      return;
    }

    setLoading(false);
    setError(null);
    handleClose();
  }, []);

  const logInDisplay = isLoggedIn ? 'Log Out' : <AccountCircleIcon />;

  return (
    <div>
      <Button sx={{ color: 'white' }} onClick={handleOpen}>
        {logInDisplay}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            component="form"
            onSubmit={(e) => {
              handleLogIn(e);
            }}
            sx={style}
          >
            <TextField
              inputRef={emailRef}
              sx={{ mt: 2 }}
              placeholder="hello@mooday.com"
              id="email"
              label="Email"
              name="email"
              required
            ></TextField>
            <TextField
              inputRef={passwordRef}
              sx={{ mt: 2 }}
              placeholder="password"
              name="password"
              label="Password"
              type="password"
              id="password"
              required
            ></TextField>
            {createUser === true && (
              <TextField
                inputRef={passwordConfirmationRef}
                sx={{ mt: 2 }}
                placeholder="password confirmation"
                name="password"
                label="Password Confirmation"
                type="password"
                id="passwordConfirmation"
                required
              ></TextField>
            )}

            {error && <Alert severity="error">{error}</Alert>}

            <Box
              display="flex"
              flexDirection="column"
              sx={{ justifyContent: 'center' }}
            >
              {createUser === true && (
                <>
                  <Button
                    sx={{ mt: 2, bgcolor: colors.blue1 }}
                    type="submit"
                    size="small"
                    onClick={(e) => {
                      handleSignUp(e);
                    }}
                    variant="contained"
                  >
                    Sign Up
                  </Button>
                </>
              )}

              {createUser === false && (
                <>
                  <Button
                    type="submit"
                    sx={{ mt: 2, bgcolor: colors.blue1 }}
                    size="small"
                    variant="contained"
                  >
                    Log In
                  </Button>
                  <Button
                    sx={{ mt: 2, bgcolor: colors.blue1 }}
                    type="submit"
                    size="small"
                    onClick={(e) => {
                      handleCreateUserMode(e);
                    }}
                    variant="contained"
                    disabled={loading}
                  >
                    Create New Account
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
