import React, { useState } from 'react';
import { makeStyles, IconButton } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import { Link as Scroll } from 'react-scroll';
import Button from '@material-ui/core/Button';
import useFormControls from '../static/ContactFormControls';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  content: {
    display: "flex",
    textTransform: "uppercase",
    fontSize: '2.5vw',
    color: '#fff',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    justityContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: '3vw'
  },
  description: {
    fontFamily: 'Nunito',
    justityContent: "center",
    alignItems: "center",
    fontSize: '1.5vw',
    margin: "3.5vw"
  },
  form: {
    width: "45vw",
    margin: '1vw'
  },
  goHome: {
    color: '#fff',
    fontSize: '3vw',
    display: "flex",
    margin: '3vw',
  },
}));

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name"
  },
  {
    name: "email",
    label: "Email",
    id: "my-email"
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10
  }
];

export default function Contact() {
  const classes = useStyles();
  const {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
  } = useFormControls();


  return (
    <React.Fragment>
      <Container maxWidth="xl" id='contact'>
        <div className={classes.root} style={{ background: 'rgba(0,0,0,0.3)', height: '35vw', borderStyle: 'ridge' }}>
          <Grid container spacing={1}>
            <Grid item xs={6} sm container>
              <Grid item xs container direction="column" spacing={1}>
                <Grid item xs>
                  <Typography className={classes.content}>
                    Contact Me
                  </Typography>
                  <Typography variant="body2" className={classes.description} >
                    I truely Thank you for visiting my website,
                    if you have any questions please do not desitate me to contact me.
                    if you could leave breif message here, I will surely get back to you as soon as possible.
                    Once Again Thank you so much for visiting
                    </Typography>
                  <Scroll to="home" smooth={true}>
                    <IconButton>
                      <HomeIcon className={classes.goHome} />
                    </IconButton>
                  </Scroll>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <form autoComplete="off" onSubmit={handleFormSubmit} className={classes.form} >
                {inputFieldValues.map((inputFieldValue, index) => {
                  return (
                    <TextField
                      className={classes.form}
                      variant='outlined'
                      key={index}
                      onChange={handleInputValue}
                      onBlur={handleInputValue}
                      name={inputFieldValue.name}
                      label={inputFieldValue.label}
                      error={errors[inputFieldValue.name]}
                      multiline={inputFieldValue.multiline ?? false}
                      fullWidth
                      rows={inputFieldValue.rows ?? 1}
                      autoComplete="none"
                      {...(errors[inputFieldValue.name] && {
                        error: true,
                        helperText: errors[inputFieldValue.name]
                      })}
                    />
                  )
                })}
                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  disabled={!formIsValid()}
                >
                  Send Message
      </Button>
              </form>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment >
  );
}