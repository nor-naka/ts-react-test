import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Header from '../../organisms/Header';

const ArticlePost: FC = () => {
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
          <h1>article post</h1>
          <p>タイトル: input</p>
          <p>更新日時: input</p>
        </Box>
      </Container>
    </>
  );
};

export default ArticlePost;
