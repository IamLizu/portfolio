// Code taken from https://material-ui.com/components/app-bar/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
      textDecoration: 'none',
  },
  navName: {
      fontSize: '17px',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Portfolio <span className={classes.navName}>of <a className={classes.navLink} href="https://iamlizu.com/">S M Mahmudul Hasan</a></span>
          </Typography>
          <Button color="inherit"> <a className={classes.navLink} href="https://iamlizu.com/blog/">Blog</a> </Button>
          <Button color="inherit"> <a className={classes.navLink} href="https://github.com/IamLizu">GitHub</a> </Button>
          <Button color="inherit"> <a className={classes.navLink} href="https://twitter.com/IamLizu">Twitter</a> </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
