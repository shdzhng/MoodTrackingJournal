import React, { useMemo } from 'react';
import { Typography, Modal, Button, Box } from '@mui/material';
import moment from 'moment';
import colors from '../../constants/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: colors.blue2,
  boxShadow: 24,
  p: 4,
};

export default function DemoLogInMessage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          color: 'white',
          bgcolor: 'green',
          mr: 2,
        }}
      >
        DEMO START HERE
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">
            {messageHeader}
            <br />
            Thank you for checking out Mooday :)
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Please create your own user account* OR use the following demo
            credentials** to get started:
          </Typography>

          <Typography
            sx={{
              textAlign: 'center',
              bgcolor: colors.blue3,
              color: colors.blue1,
              mt: 2,
              fontSize: 17,
            }}
          >
            <br />
            Email: demo@mooday.com <br />
            Password: MoodayGooday <br />
            <br />
          </Typography>

          <Typography sx={{ mt: 2 }}>
            * Your unique user account will automatically seeded with a dummy
            database. Click <DeleteIcon fontSize="inherit" /> to remove
            individually, or click <SettingsOutlinedIcon fontSize="inherit" />{' '}
            then select "Delete Journal" to remove all.
            <br />
            <br />
            ** Feel free to make edits to the demo account but bear in mind that
            your changes will be erased upon refresh.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            For inquiries, please reach me at: shoud.zhang@gmail.com
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
