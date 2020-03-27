import React, { FC } from 'react';

import TemplateIndex from '../templates/Index';

import { getArticleList } from '../action/article';

const Index: FC = () => {
  const articles = getArticleList();

  return <TemplateIndex articles={articles} />;
};

export default Index;
