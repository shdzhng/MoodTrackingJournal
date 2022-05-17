import styled, { css } from 'styled-components';

const buttonVariants = {
  low: '#199237',
  medium: '#ed7200',
  high: '#d62629',
};

const PriorityButton = styled('button')`
  padding: 1rem 1rem;
  border-radius: 2.5rem;
  color: white;
  background-color: ${({ variant }) => buttonVariants[variant]};
  border: ${({ selected }) => (selected ? `1px solid black` : 'none')};
`;

const FormButton = styled.button`
  background-color: white;
  border: 1 solid black;
`;

export { PriorityButton, FormButton };
