import { makeStyles } from '@material-ui/core';
import { AppBar, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

function Header() {
  const classes = useStyles();
  return (
    <div >
      <AppBar>
        <h1>YjWorld.</h1>
      </AppBar>
    </div>
  );
}

export default App;