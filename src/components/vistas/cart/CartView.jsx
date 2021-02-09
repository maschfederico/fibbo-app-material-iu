import React from 'react';
import {useHistory} from 'react-router-dom';
import {Store} from '../../../datasource/store';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles({
  table: {
    minWidth: 700,
    
  },
  container:{
      paddingTop: 24,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}


const CartView = () => {
    const classes = useStyles();
    const history = useHistory();
    const {cart,totalCart,deleteFromCart} = React.useContext(Store);

    const redireccionarCkeckout = ()=>{
        history.push("/checkout")
    };

    const redireccionarHome = ()=>{
        history.push("/")
    };
    
    return ( 
        <Container maxWidth={false} className={classes.container}>
            {totalCart === 0 ?
                <>
                <p>Tu carrito aun esta vacio</p>
                <Button color="secondary" variant="contained" onClick={redireccionarHome} >Seguir comprando</Button>
                </>
            :
                <TableContainer component={Paper} >
                <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                    <TableCell align="center" colSpan={3}>
                        Detalle de tu compra
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>Producto</TableCell>
                    <TableCell align="right">kg.</TableCell>
                    <TableCell align="right">$/Kg.</TableCell>
                    <TableCell align="right">Subtotal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.map((row) => (
                    <TableRow key={row.titulo}>
                        <TableCell>{row.titulo}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.precio}</TableCell>
                        <TableCell align="right">{ccyFormat(priceRow(row.quantity,row.precio))}</TableCell>
                        <TableCell align="right">
                            <IconButton 
                                color="inherit" 
                                aria-label="acces cart" 
                                component="span"
                                onClick={()=>{deleteFromCart(row.id)}}>
                                    <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    ))}
                    
                    <TableRow>
                        <TableCell rowSpan={3} />
                    <TableCell colSpan={2} align="right">Total</TableCell>
                    <TableCell align="right">{ccyFormat(totalCart)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={4} align="center">
                        <Button color="secondary" variant="contained" onClick={redireccionarCkeckout} >Finalizar mi Compra</Button>
                        <Button color="secondary" variant="contained" onClick={redireccionarHome} >Seguir comprando</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
                </Table>
                </TableContainer>
            }
        
      </Container>
     );
}
 
export default CartView;