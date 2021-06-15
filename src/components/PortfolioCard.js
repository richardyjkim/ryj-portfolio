import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 650,
    background: 'rgba(0,0,0,0.5)',
    margin: '10px'
  },
  media: {
    height: '15vw',
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1.5vw',
    color: '#fff'
  },
  description: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '0.5vw',
    color: '#ddd'
  }
});

export default function PortfolioCard({ project, checked }) {
  const classes = useStyles();
  return (
    // <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          height="140"
          image={project.image}
          title={project.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {project.description}
          </Typography>
        </CardContent>
      </Card>
    // </Collapse >
  );
}
