import React from 'react';
import { feelingList } from '../../constants/feelings';
import { FeelingButton } from './PopUp.styles';
import { ButtonGroup } from '@mui/material';

function FeelingButtons({ handleFeelingChange, feeling }) {
  return (
    <ButtonGroup variant="contained" sx={{ my: 2 }}>
      {feelingList.map(({ key, variant, label }, i) => {
        return (
          <FeelingButton
            selected={feeling === key}
            key={i}
            variant={variant}
            onClick={(e) => {
              handleFeelingChange(e);
            }}
          >
            {label}
          </FeelingButton>
        );
      })}
    </ButtonGroup>
  );
}

export default FeelingButtons;
