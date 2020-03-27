import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  }),
);

const HeaderTitle: FC = () => {
  const classes = useStyles();

  return (
    <Typography variant="h6" className={classes.title}>
      <Link to="/">
        <Box color="primary.contrastText">Memo App</Box>
      </Link>
    </Typography>
  );
};

export default HeaderTitle;
