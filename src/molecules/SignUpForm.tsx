import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& > *': {
        margin: '1rem 0',
      },
    },
    button: {
      margin: '0 1rem',
    },
  }),
);

const SignUpForm: FC = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <TextField id="user-id" label="userID" fullWidth />
      <TextField id="email" label="email" fullWidth />
      <TextField id="pass" label="pass" fullWidth />
      <TextField id="pass-confirm" label="pass-confirm" fullWidth />
      <Button variant="contained" color="primary">
        sign up
      </Button>
      <Link to="/sign-in">
        <Button className={classes.button}>sign in</Button>
      </Link>
    </form>
  );
};

export default SignUpForm;
