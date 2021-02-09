import { Grid,Container, TextField, Button } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import {Store} from '../../../datasource/store';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    container:{
        paddingTop: 25,
    },

    table: {
        minWidth: 700,
        
      },
  });

const ccyFormat= (num)=>{
    return `${num.toFixed(2)}`;
  };
const CheckoutView = () => {
    const {totalCart,cart,itemCart,buyCart,id_compra} = useContext(Store);
    const classes = useStyles();
    const history = useHistory();
    const [user,setuser] = useState(
        {
        nombre: '',
        email: '',
        telefono: '',
        }
    );
    const [validaremail, setvalidarmail] = useState("");
    const [validado, setvalidado] = useState(false);
    const [loadingconfirmacion,setloadingconfirmacion] = useState(false)
    const handleOnChange = (e)=>{
        console.log(user)
        setuser({...user,[e.target.name]:e.target.value})
    };

    const handlevalidar = (e)=>{
        setvalidarmail(e.target.value)
    };

    useEffect(()=>{
       if(validaremail === user.email && user.email.length>0 ){
           setvalidado(true)
       }else{
           setvalidado(false)
       } 
    },[validaremail,user]);

    const confirmarCompra = ()=>{
        buyCart(user);
        setloadingconfirmacion(true);
    };

    const redireccionarHome = ()=>{
        history.push("/")
    };
    return (
        <>
        {itemCart === 0? 
            <> 
                {!loadingconfirmacion?<>
                <p>Carrito vacio</p>
                <Button color="secondary" variant="contained" onClick={redireccionarHome} >Seguir comprando</Button>
                </>
                :
                <>
                 <p>{"Su compra quedó registrada con el código:" + id_compra}</p>
                <Button color="secondary" variant="contained" onClick={redireccionarHome} >Seguir comprando</Button>
                </>   
                }
            </>
            :
        <>
        <Container classes maxWidth={false} className={classes.container} >
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="spanning table">
            <TableHead>
                <TableRow>
                    <TableCell align="center" colSpan={2}>
                        Detalle de tu compra
                    </TableCell>
                     
                </TableRow>
                <TableRow>
                    <TableCell>Producto</TableCell>
                    <TableCell align="right">kg.</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cart.map((row) => (
                <TableRow key={row.titulo}>
                    <TableCell>{row.titulo}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                </TableRow>
                ))}
                
                <TableRow>
                
                <TableCell colSpan={1} align="right">Total a Pagar</TableCell>
                <TableCell align="right">{ccyFormat(totalCart)}</TableCell>
                </TableRow>
                
            </TableBody>
            </Table>
            </TableContainer>
    </Container>
    <Container classes maxWidth={false} className={classes.container} >
        <form >
            <Grid container component={Paper}>
                <Grid item>
                    <TextField 
                    variant="outlined"
                    label="Nombre y apellido"
                    value={user.nombre}
                    name="nombre"
                    onChange={handleOnChange}
                    disabled={loadingconfirmacion}
                    />
                 </Grid>

                 <Grid item>
                    <TextField 
                    variant="outlined"
                    label="Telefono"
                    name="telefono"
                    value={user.telefono}
                    onChange={handleOnChange}
                    disabled={loadingconfirmacion}
                    />
                 </Grid>

                 <Grid item>
                    <TextField 
                    variant="outlined"
                    label="Email"
                    value={user.email}
                    name="email"
                    onChange={handleOnChange}
                    disabled={loadingconfirmacion}
                    />
                 </Grid>
                
                 <Grid item>
                    <TextField 
                    error={!validado && validaremail.length>0}
                    variant="outlined"
                    label="Confirma tu Email"
                    value={validaremail}
                    onChange={handlevalidar}
                    helperText={!validado && validaremail.length>0? "email incorrecto":""}
                    disabled={loadingconfirmacion}
                    />
                 </Grid>

                 <Grid item>
                    <Button disabled={!validado || loadingconfirmacion} variant="contained" color="secondary" onClick={confirmarCompra}>Confirmar mi compra</Button>
                    {loadingconfirmacion ?<p>Aguarda que estamos procesando tu compra</p> : <></>}
                 </Grid>

            </Grid>
        </form>
    </Container>
        </>}
        </>
        );
}
 
export default CheckoutView;