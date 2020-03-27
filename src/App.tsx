import React, { FC, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import 'typeface-roboto';
import Box from '@material-ui/core/Box';
import customTheme from './customTheme';

import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import ArticlePublic from './pages/Article/Public';
import ArticleIndex from './pages/Index';
import ArticleEdit from './pages/Article/Edit';
import ArticlePrivate from './pages/Article/Private';
import ArticlePost from './pages/Article/Post';
import MyPage from './pages/MyPage';
import Home from './pages/Home';

const Pages: FC = () => {
  useEffect(() => {
    document.body.style.backgroundColor = customTheme.palette.background.paper;
  }, []);

  return (
    <Box bgcolor="background.paper">
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/article/:articleId" component={ArticlePublic} />
        <Route path="/article" component={ArticleIndex} />
        <Route path="/my-page/edit/:articleId" component={ArticleEdit} />
        <Route path="/my-page/article/:articleId" component={ArticlePrivate} />
        <Route path="/my-page/post" component={ArticlePost} />
        <Route path="/my-page" component={MyPage} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Box>
  );
};

export default Pages;
