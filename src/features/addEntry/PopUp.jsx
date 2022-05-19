import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SubmitEntryButton, EntryWindow } from './EntryForm.styles';
import Box from '@mui/material/Box';

const style = {
  boxShadow: 24,
};

export default function EntryPopUp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <SubmitEntryButton onClick={handleOpen}>New Entry</SubmitEntryButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EntryWindow>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </EntryWindow>
      </Modal>
    </div>
  );
}
