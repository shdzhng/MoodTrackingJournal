import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import colors from '../../../constants/colors';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: colors.background,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: colors.blue1,
}));

export default Item;
