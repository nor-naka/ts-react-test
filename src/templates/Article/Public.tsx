import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Header from '../../organisms/Header';

import { ContentProps } from '../../action/article'; // use test data

interface ArticleProps {
  articleId: string;
}

const Article: FC<{ article: ContentProps }> = ({ article }) => {
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
          <h1>{`article index article_id: ${article.id}`}</h1>
          <p>タイトル: {article.title}</p>
          <p>更新日時: {article.create}</p>
        </Box>
      </Container>
    </>
  );
};

export default Article;
