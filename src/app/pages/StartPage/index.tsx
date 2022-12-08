import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { Title } from 'app/components/Title';
import { Lead } from '../HomePage/components/Lead';
import { A } from 'app/components/A';
import styled from 'styled-components';
import { TextButton } from '../HomePage/Features/GithubRepoForm/components/TextButton';
import { Button } from 'app/components/Button';

export function StartPage() {
  return (
    <>
      <Helmet>
        <title>Let us Know about you.</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Wrapper>
          <Title>Help us get to know you.</Title>
          <Lead>
            <Button href="/" rel="noopener noreferrer">No thanks.</Button>
          </Lead>
          <Lead>
            <A href="/next" rel="noopener noreferrer">
              okay!
            </A>{' '}
          </Lead>
        </Wrapper>
      </PageWrapper>
    </>
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
