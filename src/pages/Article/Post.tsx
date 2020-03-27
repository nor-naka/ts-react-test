import React, { FC } from 'react';

import { Redirect } from 'react-router';
import TemplatePost from '../../templates/Article/Post';

import { authentication } from '../../action/auth';

const Post: FC = () => {
  const userId = authentication();

  return userId === false ? <Redirect to="/" /> : <TemplatePost />;
};

export default Post;
