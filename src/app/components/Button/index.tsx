import styled from 'styled-components/macro';

export const Button = styled.a`
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.primary};
  border: 0;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  cursor: not-allowed;
  text-decoration: none;
`;
