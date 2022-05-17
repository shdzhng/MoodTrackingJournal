import styled from 'styled-components';
import colors from '../../constants/Colors';

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid ${colors.gray700};
`;

const TableHead = styled.thead``;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableData = styled.td`
  border: 1px solid ${colors.gray700};
`;

export { Table, TableData, TableRow, TableHead, TableBody };
