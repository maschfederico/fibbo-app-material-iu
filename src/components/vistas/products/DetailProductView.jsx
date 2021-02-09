import {
    Box,
    Container,
    Grid,
  } from '@material-ui/core';
import { useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Store} from '../../../datasource/store';
import ProductCard from './ProductCard'

const DetailProductView = () => {

    const {products} = useContext(Store);
    const {productoid} = useParams();
    const product_selected =[products.filter(prod => prod.id === productoid)[0]];
    
    return (
        <Container maxWidth={false}>
            <Box mt={3}>
                <Grid
                    container
                    spacing={3}
                >
                     {product_selected.length ? product_selected.map((product) => (
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
                        : <p>Perdón pero no es encontrado información sobre este producto.</p>}
                </Grid>
            </Box>
        </Container>
    );
}
 
export default DetailProductView;