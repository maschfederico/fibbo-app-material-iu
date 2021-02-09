import {Add, Remove} from '@material-ui/icons';
import {IconButton,Button} from '@material-ui/core';
import {useState, useContext} from 'react';
import  {Store} from '../../../datasource/store';
import {useHistory} from 'react-router-dom';
const ProductCardAction = ({product})=>{

    const store = useContext(Store);
    const {addItemCart,itemCart} = store;
    const history = useHistory();
    
    const redireccionar = ()=>{
        history.push("/cart")
    };
    

    const [cantidad, setcantidad] = useState(1);
    const aumentar = ()=>{
        if(cantidad < product.stock)
        setcantidad(cantidad + 1)
    };
    const disminuir = ()=>{
        if(cantidad> 1) {
        setcantidad(cantidad - 1)
        }
    };
    const agregarItemCarrito = ()=>{
        addItemCart({productId: product.id, cantidad: cantidad});       
        };
    return(
        <>
           
            {product.stock > 0 ?
            <>
            <IconButton aria-label="aumentar cantidad" onClick={aumentar}>
            <Add/>
            </IconButton>
            {cantidad + "Kg."}
            <IconButton aria-label="disminuir" onClick={disminuir}>
            <Remove/>
            </IconButton>
            <Button variant="contained" size="small" color="secondary" onClick={agregarItemCarrito}>
                Al carrito!
            </Button>
            {itemCart > 0 ?
                <Button variant="contained" size="small" color="secondary" onClick={redireccionar}>
                Ver Carrito
                </Button>
            :
                <></>
            }
            
            </>
            :
            <p>No hay stock disponible. Lo lamentamos.</p>   } 
            
        </>
    );
};
export default ProductCardAction;