import {useState,useContext} from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  Badge
} from '@material-ui/core';

import {useHistory} from 'react-router-dom';


import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {Store} from '../../datasource/store';

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
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCart = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const store = useContext(Store);
  const {itemCart, totalCart} = store;
  const history = useHistory();

  const redireccionar = ()=>{
    handleClose()
    history.push("/cart")
  };
 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" component={RouterLink} to={`/`}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
            Fibbo
          </Typography>
          <Button color="inherit" component={RouterLink} to={`/categoria/verduras`}>Verduras</Button>
          <Button color="inherit"  component={RouterLink} to={`/categoria/frutas`}>Frutas</Button>
          <Button color="inherit"  component={RouterLink} to={`/categoria/bebidas`}>Bebidas</Button>
          <IconButton 
            color="inherit" 
            aria-label="acces cart" 
            component="span"
            onClick={handleCart}>
              <Badge
              badgeContent={itemCart}
              color="secondary"
              >
                <ShoppingCartIcon />
              </Badge>
          </IconButton>
          <Menu
                id="cart-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
               {"  Items "+ itemCart+" , Total: $"+totalCart+ "  "}
               <Button color="secondary" variant="contained" onClick={redireccionar}>Ver Carrito</Button>
              </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

