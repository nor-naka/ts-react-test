import React, { FC } from 'react';
import Box from '@material-ui/core/Box';

import { Link } from 'react-router-dom';
import { ContentProps } from '../action/article';

type ListContentProps = ContentProps | false;

const ListContent: FC<{ content: ListContentProps }> = ({ content }) => {
  if (content === false) {
    return (
      <Box
        margin="2rem 0"
        padding="2rem"
        color="text.primary"
        bgcolor="background.default"
      >
        <p>cannot find article</p>
      </Box>
    );
  }

  return (
    <Link to={`/article/${content.id}`}>
      <Box
        margin="2rem 0"
        padding="2rem"
        color="text.primary"
        bgcolor="background.default"
      >
        <p>{content.title}</p>
        <p>{content.create}</p>
      </Box>
    </Link>
  );
};

export default ListContent;
