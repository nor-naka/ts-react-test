import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import MyListContent from '../organisms/MyListContent';
import Header from '../organisms/Header';

import { ContentProps } from '../action/article';

const MyPage: FC<{ articles: ContentProps[] }> = ({ articles }) => {
  return (
    <>
      <Header />
      <Box>
        <Container maxWidth="md">
          {articles.length > 0 ? (
            <>
              {articles.map((article, index) => (
                <MyListContent key={index.toString()} content={article} />
              ))}
            </>
          ) : (
            <MyListContent content={false} />
          )}
          <Link to="/my-page/post">
            <Button variant="contained" color="primary">
              post
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
};

export default MyPage;
