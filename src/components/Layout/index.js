
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  containerTopMargin:{
    marginTop: theme.spacing(4),
  }
}));



const Layout=(props)=> {
    const classes = useStyles();
    const history = useHistory();

    const pageChange = (path) =>{ 
        history.push(path);
    }
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Employee Explorer
          </Typography>
          <Button  onClick={()=>pageChange('/')} color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className={classes.containerTopMargin}>
        {props.children}
      </Container>
    </div>
  );
}

export default Layout;