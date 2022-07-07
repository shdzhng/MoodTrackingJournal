import React, {
  useRef,
  useCallback,
  useMemo,
  useEffect,
  useState,
} from 'react';
import {
  Backdrop,
  TextField,
  Button,
  Box,
  Fade,
  Modal,
  Typography,
} from '@mui/material';
import moment from 'moment';
import colors from '../../constants/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useAuth } from '../../firebase/AuthContext';
import Alert from '@mui/material/Alert';
import firebase from 'firebase/compat/app';

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

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, []);

  const day = moment().format('HH');
  const messageHeader = useMemo(() => {
    switch (day) {
      case day < 12:
        return 'Good Morning!';
      case day < 17:
        return 'Good Afternoon!';
      default:
        return 'Good Evening!';
    }
  }, [day]);

  const handleOpen = () => {
    if (currentUser) {
      logout();
      return;
    }
    setOpen(true);
  };

  const resetAll = () => {
    setCreateUser(false);
    setForgotPassword(false);
    setCreateUser(false);
    setSignIn(true);
    setError(null);
    setOpen(false);
  };

  const handleClose = async (message) => {
    const user = await firebase.auth().currentUser;
    if (user) {
      resetAll();
    } else {
      setError('please log in to proceed with demo');
    }
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    login(email, password);
    setError(null);
    resetAll();
  };

  const handleCreateUserMode = (e) => {
    e.preventDefault();
    setError(null);
    setForgotPassword(false);
    setSignIn(false);
    setCreateUser(true);
  };

  const handleChangePassword = (e) => {
    setForgotPassword(true);
    setSignIn(false);
  };

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
        <>
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
          <Button
            sx={{ mt: 2, bgcolor: colors.blue1 }}
            size="small"
            onClick={(e) => {
              setForgotPassword(false);
              setSignIn(true);
            }}
            variant="contained"
            disabled={loading}
          >
            Back
          </Button>
        </>
      );
    }

    if (createUser === true) {
      return (
        <>
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
          <Button
            sx={{ mt: 2, bgcolor: colors.blue1 }}
            size="small"
            onClick={(e) => {
              setCreateUser(false);
              setSignIn(true);
            }}
            variant="contained"
            disabled={loading}
          >
            Back
          </Button>
        </>
      );
    }
  };

  return (
    <div>
      <Button sx={{ color: 'white' }} onClick={handleOpen}>
        {logInDisplay}
      </Button>
      <Modal
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
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 800,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Box sx={{ width: '48%', bgcolor: colors.background, p: 3 }}>
              <Typography variant="h6">
                {messageHeader}
                <br />
                Thank you for checking out Mooday :)
              </Typography>
              <Typography sx={{ mt: 2 }}>
                To proceed with demo please{' '}
                <span className="bold">
                  create your own user account* or use the following demo
                  credentials{' '}
                </span>
                to get started:
              </Typography>

              <Typography sx={{ mt: 2, fontSize: '0.75rem' }}>
                *Your unique user account will automatically seeded with a dummy
                database. Click <DeleteIcon fontSize="inherit" /> to remove
                individually, or click{' '}
                <SettingsOutlinedIcon fontSize="inherit" /> then select "Delete
                Journal" to remove all.
              </Typography>

              <Typography sx={{ mt: 2, fontSize: '0.75rem' }}>
                ------ <br /> For inquiries, please reach me at:
                shoud.zhang@gmail.com
                <br />
                <br />
                All quotes by Jiddu Kirshnamurti (1895 - 1986)
              </Typography>
            </Box>

            <Box
              sx={{
                bgcolor: colors.accent,
                width: '1px',
                mx: 1,
              }}
            ></Box>
            <Box display="flex" flexDirection="column" sx={{ width: '48%' }}>
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

              {error && (
                <Fade in={error ? true : false}>
                  <Alert sx={{ mt: 2 }} severity="error">
                    {error}
                  </Alert>
                </Fade>
              )}

              <Box
                display="flex"
                flexDirection="column"
                sx={{ justifyContent: 'center' }}
              >
                {buttonView()}
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  bgcolor: colors.blue3,
                  color: colors.blue1,
                  mt: 2,
                  p: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 17,
                    mb: 2,
                  }}
                >
                  DEMO ACCOUNT NAME: <br />
                  Email: demo@mooday.com <br />
                  Password: MoodayGooday <br />
                </Typography>
                <Typography
                  sx={{
                    px: 2,
                    fontSize: '0.75rem',
                  }}
                >
                  Feel free to make edits to the demo account but bear in mind
                  that your changes will be erased upon refresh.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
