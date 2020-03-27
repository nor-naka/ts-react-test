import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MenuButton from '../molecules/MenuButton';
import HeaderTitle from '../molecules/HeaderTitle';

const Header: FC = () => {
  return (
    <Box bgcolor="primary.main" position="static">
      <Toolbar variant="regular">
        <MenuButton />
        <HeaderTitle />
        <Button>
          <Link to="/article">
            <Box color="primary.contrastText">article</Box>
          </Link>
        </Button>
        <Button>
          <Link to="/my-page">
            <Box color="primary.contrastText">my page</Box>
          </Link>
        </Button>
        <Button>
          <Link to="/sign-in">
            <Box color="primary.contrastText">Log in</Box>
          </Link>
        </Button>
      </Toolbar>
    </Box>
  );
};

export default Header;
