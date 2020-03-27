import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

import TemplatePublic from '../../templates/Article/Public';

import { getArticle } from '../../action/article';

type PublicArticleProps = {} & RouteComponentProps<{
  articleId: string;
}>;

const Public: FC<PublicArticleProps> = ({ match }) => {
  const { articleId } = match.params;
  const article = getArticle(articleId);

  return article === false ? (
    <Redirect to="/" />
  ) : (
    <TemplatePublic article={article} />
  );
};

export default withRouter(Public);
