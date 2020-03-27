import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

import TemplatePrivate from '../../templates/Article/Private';

import { authentication } from '../../action/auth';
import { getMyArticle } from '../../action/article';

type MyArticleProps = {} & RouteComponentProps<{
  articleId: string;
}>;

const Private: FC<MyArticleProps> = ({ match }) => {
  const userId = authentication();
  if (userId === false) {
    return <Redirect to="/" />;
  }
  const { articleId } = match.params;
  const article = getMyArticle(userId, articleId);

  return article === false ? (
    <Redirect to="/" />
  ) : (
    <TemplatePrivate article={article} />
  );
};

export default withRouter(Private);
