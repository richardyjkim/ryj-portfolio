import { CssBaseline, makeStyles } from '@material-ui/core';

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
    </div>
  );
}

export default App;
