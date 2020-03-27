import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

import TemplateEdit from '../../templates/Article/Edit';

import { getMyArticle } from '../../action/article';
import { authentication } from '../../action/auth';

type ArticleProps = {} & RouteComponentProps<{
  articleId: string;
}>;

const ArticleEdit: FC<ArticleProps> = ({ match }) => {
  const userId = authentication();
  if (userId === false) {
    return <Redirect to="/" />;
  }
  const { articleId } = match.params;
  const article = getMyArticle(userId, articleId);

  return article === false ? (
    <Redirect to="/" />
  ) : (
    <TemplateEdit article={article} />
  );
};

export default withRouter(ArticleEdit);
