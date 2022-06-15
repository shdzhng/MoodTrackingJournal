import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import colors from '../../../constants/colors';
import { MenuItem, FormControl, Select, Box, Grid } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: colors.background,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: colors.blue1,
}));

const StyledBox = styled(Box)(({ theme }) => ({}));

export { Item, StyledBox };
