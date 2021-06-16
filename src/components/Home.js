import { useEffect, useState } from 'react'
import { IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    height: '85vw',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarTitle: {
    flexGrow: "1"
  },
  appbarWrapper: {
    width: '90%',
    margin: '0 auto'
  },
  icon: {
    color: '#fff'
  },
  title: {
    color: '#fff',
    fontSize: '4vw'
  },
  container: {
    textAlign: "center",
  },
  goDown: {
    color: '#fff',
    fontSize: '4vw',
    textAlign: 'center',
  }
}));

function Home() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, [])
  return (
    <div className={classes.root} id="home">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>YjWorld.</h1>
          <IconButton>
            <ListIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={50}>
        <div className={classes.container}>
          <h1 className={classes.title}>Welcome to YjWorld <br /></h1>
          <h2 >+ and I develop websites</h2>
          <Scroll to="about" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

export default Home;