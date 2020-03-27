import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import SignInForm from '../../molecules/SignInForm';
import Header from '../../organisms/Header';

const SignIn: FC = () => {
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
          <SignInForm />
        </Box>
      </Container>
    </>
  );
};

export default SignIn;
