import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Header from '../../organisms/Header';

import { ContentProps } from '../../action/article'; // use test data

const MyArticle: FC<{ article: ContentProps }> = ({ article }) => {
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
          <h1>{`article my index article_id: ${article.id}`}</h1>
          <p>タイトル: {article.title}</p>
          <p>更新日時: {article.create}</p>
          <Link to={`/my-page/edit/${article.id}`}>
            <Button variant="contained" color="primary">
              edit
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default MyArticle;
