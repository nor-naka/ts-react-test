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

const SignInForm: FC = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <TextField id="email" label="email" fullWidth />
      <TextField id="pass" label="pass" fullWidth />
      <Button variant="contained" color="primary">
        sign in
      </Button>
      <Link to="/sign-up">
        <Button className={classes.button}>sign up</Button>
      </Link>
    </form>
  );
};

export default SignInForm;
