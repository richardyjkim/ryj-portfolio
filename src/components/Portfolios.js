import { makeStyles } from '@material-ui/core';
import PortfolioCard from './PortfolioCard';
import projects from '../static/projects';
import useWindowPostion from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minheight: '50vh',
    display: 'flex',
    justifyContent: 'spaceEvenly',
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  const checked = useWindowPostion('header')

  return (
    <div className={classes.root} id="portfolios">
      <div>
        <PortfolioCard project={projects[0]} checked={checked} />
        <PortfolioCard project={projects[1]} checked={checked} />
      </div>
      <div>
        <PortfolioCard project={projects[2]} checked={checked} />
        <PortfolioCard project={projects[3]} checked={checked} />
      </div>
      <div>
        <PortfolioCard project={projects[4]} checked={checked} />
        <PortfolioCard project={projects[5]} checked={checked} />
      </div>
    </div>
  )
}