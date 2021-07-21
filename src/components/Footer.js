import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    textAlign: 'center',
    height: '4vw',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '0.85vw'
  }
}));

function Footer() {
  const classes = useStyles();


  return (
    <React.Fragment>
      <Container maxWidth="xl" id='footer' style={{ backgroundColor: "rgba(232, 236, 241, 0.85)" }}>
        <div className={classes.root}>
          © 2021 Richard Youngje Kim, UCB, bootcamp, Portfolio. Passonate and hubmle.
          <br></br>
          All Rights Reserved.
          </div>
      </Container>
    </React.Fragment >
  )

}

export default Footer;