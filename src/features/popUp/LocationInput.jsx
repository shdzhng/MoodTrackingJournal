import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LocationInput() {
  return (
    <form>
      <TextField
        type="text"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}

export default LocationInput;
