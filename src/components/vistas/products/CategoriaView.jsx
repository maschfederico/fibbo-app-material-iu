import {
    Box,
    Container,
    Grid,
  } from '@material-ui/core';
import { useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Store} from '../../../datasource/store';
import ProductCard from './ProductCard'
const CategoriaView = () => {
    const {products} = useContext(Store);
    const {categoria_id} = useParams();
    let product_by_categoria = products.filter(prod => prod.category === categoria_id);
    
    return ( 
        <Container maxWidth={false}>
            <Box mt={3}>
                <Grid
                    container
                    spacing={3}
                >
                     {product_by_categoria.length ? product_by_categoria.map((product) => (
                        <Grid
                            item
                            key={product.id}
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <ProductCard
                            product={product}
                            extended={true}
                            />
                        </Grid>
                        ))
                        : <p>Perdón pero esta categoría de productos no se encuentra.</p>}
                </Grid>
            </Box>
        </Container>
     );
}
 
export default CategoriaView;