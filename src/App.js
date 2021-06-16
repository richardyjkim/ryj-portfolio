import { CssBaseline, makeStyles } from '@material-ui/core';
import Home from './components/Home';
import Portfolios from './components/Portfolios';
import About from './components/About';
import Contact from './components/Contact'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg.jpeg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}))
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Home />
      <About />
      <Portfolios />
      <Contact />
    </div>
  );
}

export default App;
