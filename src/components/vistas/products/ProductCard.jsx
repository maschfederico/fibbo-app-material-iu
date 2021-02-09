import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    CardActions,
    CardHeader
  } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import ProductCardAction from './ProductCardAction';
  
  const ProductCard = ({product, extended})=>{
    
    return(
    <Card >
        <CardHeader
        title={product.titulo}
        subheader={"$"+product.precio+"/Kg."}
        />
        <CardActionArea component={RouterLink} to={"/item/"+product.id}>
            <CardMedia
            component="img"
            alt={product.titulo}
            //height="140"
            image={product.imagen}
            title={product.titulo}
            />
            <CardContent>
        
        { extended?
        <>
        <Typography variant="body1" color="textSecondary" component="p">
        Descripción y origen del producto:
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {product.descripcion_extendida}
        </Typography>
        </>
        :
        <Typography variant="body2" color="textSecondary" component="p">
            {product.descripcion+"..."}
        </Typography>
        }
        <Typography variant="body2" color="textSecondary" component="p">
            {"Cantidad disponible "+ product.stock+ "Kg."}
        </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
            <ProductCardAction product={product}/>
        </CardActions>
    </Card>
    )
  };

  export default ProductCard;