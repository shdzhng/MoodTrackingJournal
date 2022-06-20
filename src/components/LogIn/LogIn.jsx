import React, { useRef, useCallback, useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import colors from '../../constants/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../../firebase/AuthContext';
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
  const [forgotPassword, setForgotPassword] = React.useState(false);
  const [createUser, setCreateUser] = React.useState(false);
  const [signIn, setSignIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = React.useState(null);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const passwordConfirmationRef = useRef('');
  const { signup, login, logout, currentUser, upload, resetPassword } =
    useAuth();

  const handleOpen = () => {
    if (currentUser) {
      logout();
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setCreateUser(false);
    setForgotPassword(false);
    setCreateUser(false);
    setSignIn(true);
    setError(null);
    setOpen(false);
  };

  const handleLogIn = useCallback((e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    login(email, password);

    handleClose();
  }, []);

  const handleCreateUserMode = useCallback((e) => {
    e.preventDefault();
    setError(null);
    setForgotPassword(false);
    setSignIn(false);
    setCreateUser(true);
  }, []);

  const handleChangePassword = useCallback((e) => {
    setForgotPassword(true);
    setSignIn(false);
  }, []);

  const handleSubmitPasswordChange = useCallback((e) => {
    const email = emailRef.current.value;
    resetPassword(email);
    handleClose();
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

  const logInDisplay = currentUser ? 'Log Out' : <AccountCircleIcon />;

  const inputView = () => {
    if (signIn === true || forgotPassword === true) {
      return;
    }

    if (createUser === true) {
      return (
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
      );
    }
  };

  const buttonView = () => {
    if (signIn === true) {
      return (
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
          >
            Sign Up
          </Button>
          <Button
            sx={{ mt: 2, bgcolor: colors.blue1 }}
            size="small"
            onClick={(e) => {
              handleChangePassword(e);
            }}
            variant="contained"
            disabled={loading}
          >
            Reset Password
          </Button>
        </>
      );
    }

    if (forgotPassword === true) {
      return (
        <Button
          sx={{ mt: 2, bgcolor: colors.blue1 }}
          size="small"
          onClick={(e) => {
            handleSubmitPasswordChange(e);
          }}
          variant="contained"
          disabled={loading}
        >
          Reset
        </Button>
      );
    }

    if (createUser === true) {
      return (
        <Button
          sx={{ mt: 2, bgcolor: colors.blue1 }}
          size="small"
          onClick={(e) => {
            handleSignUp(e);
          }}
          variant="contained"
          disabled={loading}
        >
          Create New Account
        </Button>
      );
    }
  };

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
            {inputView()}

            {forgotPassword !== true && (
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
            )}

            {error && <Alert severity="error">{error}</Alert>}

            <Box
              display="flex"
              flexDirection="column"
              sx={{ justifyContent: 'center' }}
            >
              {buttonView()}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
