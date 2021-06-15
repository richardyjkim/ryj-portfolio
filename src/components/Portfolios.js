import { makeStyles } from '@material-ui/core';
import PortfolioCard from './PortfolioCard';
import projects from '../static/projects';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    minheight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="portfolios">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4}>
          <PortfolioCard project={projects[0]} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PortfolioCard project={projects[1]} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PortfolioCard project={projects[2]} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PortfolioCard project={projects[3]} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PortfolioCard project={projects[4]} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PortfolioCard project={projects[5]} />
        </Grid>
      </Grid>
    </div >
  )
}