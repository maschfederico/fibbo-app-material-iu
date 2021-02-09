import {ThemeProvider } from '@material-ui/core';
import theme from './themeConfig';
import NavBar from './components/general/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomeView from './components/vistas/HomeView';
import CategoriaView from './components/vistas/products/CategoriaView';
import DetailProductView from './components/vistas/products/DetailProductView';
import CartView from './components/vistas/cart/CartView';
import CheckoutView from './components/vistas/cart/CheckoutView';
import StoreProvider from './datasource/store'
function App() {
  return (
   <ThemeProvider theme = {theme}>
     <StoreProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          
          <Route exact path="/">
            <HomeView/>
          </Route>

          <Route path="/categoria/:categoria_id">
            <CategoriaView />
          </Route>

          <Route path="/item/:productoid">
            <DetailProductView />
          </Route>

          <Route path="/cart">
            <CartView />
          </Route>

          <Route path="/checkout">
            <CheckoutView />
          </Route>

          <Route path="*">
          </Route>

        </Switch>
      </BrowserRouter>
     </StoreProvider> 
   </ThemeProvider>
  );
}

export default App;
