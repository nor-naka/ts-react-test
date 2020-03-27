import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ListContent from '../organisms/ListContent';
import Header from '../organisms/Header';

import { ContentProps } from '../action/article'; // use test data

const Index: FC<{ articles: ContentProps[] }> = ({ articles }) => {
  return (
    <>
      <Header />
      <Box>
        <Container maxWidth="md">
          {articles.length > 0 ? (
            <>
              {articles.map((article, index) => (
                <ListContent key={index.toString()} content={article} />
              ))}
            </>
          ) : (
            <ListContent content={false} />
          )}
        </Container>
      </Box>
    </>
  );
};

export default Index;
