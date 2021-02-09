import {
    Box,
    Container,
    Grid,
  } from '@material-ui/core';
import { useContext } from 'react';
import {Store} from '../../datasource/store';
import ProductCard from './products/ProductCard'
//import productos from '../../mockdata/productos'
const HomeView = () => {
    const {products} = useContext(Store);
    //const products = productos;
    return ( 
        <Container maxWidth={false}>
            <Box mt={3}>
                <Grid
                    container
                    spacing={3}
                >
                     {products.length ? products.map((product) => (
                        <Grid
                            item
                            key={product.id}
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <ProductCard
                            product={product}
                            />
                        </Grid>
                        ))
                        : <p>Bienvenido! Aguarda un instante estamos inicializando Fibbo</p>}
                </Grid>
            </Box>
        </Container>
    );
}
 
export default HomeView;