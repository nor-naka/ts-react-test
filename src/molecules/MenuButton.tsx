import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

const MenuButton: FC = () => {
  const classes = useStyles();

  return (
    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
      <Box color="primary.contrastText">
        <MenuIcon />
      </Box>
    </IconButton>
  );
};

export default MenuButton;
