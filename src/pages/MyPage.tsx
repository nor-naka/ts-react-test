import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import TemplateArticleMyPage from '../templates/MyPage';
import { authentication } from '../action/auth';
import { getMyArticleList } from '../action/article';

const MyPage: FC = () => {
  const userId = authentication();
  if (userId === false) {
    return <Redirect to="/" />;
  }

  const articleList = getMyArticleList(userId);

  return <TemplateArticleMyPage articles={articleList} />;
};

export default MyPage;
