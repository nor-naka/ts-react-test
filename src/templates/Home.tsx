import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from '../organisms/Header';

const Home: FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box
          margin="2rem 0"
          padding="2rem"
          color="text.primary"
          bgcolor="background.default"
        >
          <h1>Home</h1>
        </Box>
      </Container>
    </>
  );
};

export default Home;
