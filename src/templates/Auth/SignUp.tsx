import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import SignUpForm from '../../molecules/SignUpForm';
import Header from '../../organisms/Header';

const SignUp: FC = () => {
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
          <SignUpForm />
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
