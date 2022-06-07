import React from 'react';
import { feelingList } from '../../constants/feelings';
import { FeelingButton, FeelingButtonContainer } from './PopUp.styles';
import { ButtonGroup } from '@mui/material';

function FeelingButtons({ handleFeelingChange, feeling }) {
  return (
    <FeelingButtonContainer>
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
    </FeelingButtonContainer>
  );
}

export default FeelingButtons;
