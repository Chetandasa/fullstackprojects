import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';

import useStyles from './styles';
import memories from "../../images/memories.png";


const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  console.log(user);

  // useEffect(() => {
  //   const token = user?.token;

  //   setUser(JSON)
  // }, []);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/"  className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
              <Button variant='container' className={classes.logoout} color="secondary" > Logout</Button>
            </div>
          ) : (
            <Button component={Link} to="/auth" variant='contained' color='primary'>Sign In</Button>
          )}
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar
