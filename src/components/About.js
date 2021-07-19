import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: "35vw",
    height: "45vw",
    margin: "2vw"
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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
    margin: '4vw'
  },
  description: {
    fontFamily: 'Nunito',
    justityContent: "center",
    alignItems: "center",
    fontSize: '1vw',
    margin: "0.5vw"
  },
  goDown: {
    color: '#fff',
    fontSize: '4vw',
    display: "flex",
    margin: '3vw',
  },
  icon: {
    display: "flex",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '3vw'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="xl" id='about'>
        <div className={classes.root} style={{ background: 'rgba(232, 236, 241, 0.5)', height: '58vw', borderStyle: 'ridge' }}>
          <Grid container spacing={1}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="Richardkim" src="./images/about.jpeg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={6} sm container>
              <Grid item xs container direction="column" spacing={1}>
                <Grid item xs>
                  <Typography className={classes.content}>
                    About Me
                  </Typography>
                  <Typography variant="body2" className={classes.description} >
                    Full-Stack web developer leveraging background in communication to provide unique perspectives on how end-users interact with websites and software platforms.
                    <br /><br />
                    Earned a certificate in Full Stack Web Development from the University of California Berkeley Coding Boot Camp.

                  </Typography>
                  <br />
                  <Typography variant="body2" className={classes.description} >
                    Innovative problem-solver who is passionate about developing apps.
                    Energetic adopter who enjoys and is eager to adopt new skills in the new projects.
                    Strengths in creativity, teamwork, and building projects from ideation to execution.
                    Know the importance of team work and enjoy and proud to collaborate with others
                  </Typography>
                  <br />
                  <Typography className={classes.content} style={{ color: '#000' }}>
                    Find Me On
                  </Typography>
                  <Grid className={classes.icon} >
                    <Scroll to="contact" smooth={true}><IconButton><EmailIcon /> </IconButton></Scroll>
                    <IconButton aria-label="linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/richard-kim-670262204/')}><LinkedInIcon /> </IconButton>
                    <IconButton aria-label="github.com" onClick={() => window.open('https://github.com/richardyjkim')}><GitHubIcon /></IconButton>
                    <IconButton aria-label="instagram.com" onClick={() => window.open('https://www.instagram.com/immayj_05.15')}> <InstagramIcon /></IconButton>
                  </Grid>

                  <Scroll to="portfolios" smooth={true}>
                    <IconButton>
                      <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                  </Scroll>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
