import { A } from 'app/components/A';
import styled from 'styled-components/macro';
import { Title } from '../../components/Title';
import { Lead } from './components/Lead';

export function Masthead() {
  return (
    <Wrapper>
      <Title>Please wait...</Title>
      <Lead>
        If page doesn't load click {' '}<A
          href="/start"
          rel="noopener noreferrer"
        >
        here
        </A>{' '} to go to the next page. {' '}
      </Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
