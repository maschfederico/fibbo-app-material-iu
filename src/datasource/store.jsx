import { useState, useEffect, createContext } from "react";
import {getFirestore} from '../datasource/firestore';
import firebase from 'firebase/app'


export const Store = createContext();

const StoreProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [id_compra, setid_comra] = useState(0);
    const [products, setProducts] = useState([]);
    const [totalCart, settotalCart] = useState(0);
    const [itemCart, setitemCart] = useState(0);
    
  
    const addItemCart = ({productId,cantidad}) => {
      const index = cart.findIndex(item => item.id === productId) 
      const prodAlCart = products.filter(prod=>prod.id === productId)[0];
      if (index === -1) { 
        prodAlCart.quantity = cantidad;
        setCart([...cart, prodAlCart]);
      } else {
        cart[index].quantity= cart[index].quantity + cantidad;
        setCart([...cart]);
      }
    };
  
    const deleteFromCart = productId => {
      const prodFueraDeCart = cart.filter(prod => prod.id !== productId);
      setCart(prodFueraDeCart);
    };

    const deleteCart = ()=>{
      setCart([])
    };

    const computarTotal = ()=>{
        let total = 0;
        cart.forEach((item)=>{
            total += parseFloat(item.quantity)*parseFloat(item.precio);
            console.log("Total")
            console.log(total)
        });
        
        settotalCart(total);
    };

    const computarItem = ()=>{
        setitemCart(cart.length);     
    }

    const loadProductos = ()=>{
      const db = getFirestore();
      db.collection("items").get().then(
          items =>{
            let obj = [];
          items.forEach(doc =>{
              obj.push({id: doc.id, ...doc.data() })
              })
          setProducts(obj)    
          }
      ) 
    };

    const buyCart = (user_data)=>{
      const db = getFirestore();
      const data = {
        buyer: user_data,
        items: cart,
        total: totalCart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
      };
      db.collection("ventas").add(data).then(
        ({id})=>{
          setid_comra(id);
          deleteCart();
        }
      ).catch(
        e => console.log (e)
      )
    };
  
    useEffect(() => {
      loadProductos();
      computarTotal();
      computarItem();  
    }, [cart]);
  
    return (
      <Store.Provider
        value={{
          cart,
          products,
          totalCart,
          itemCart,
          id_compra,
          buyCart,
          addItemCart,
          deleteFromCart,
          deleteCart,
          loadProductos
        }}
      >
        {children}
      </Store.Provider>
    );
  };
  
  export default StoreProvider;
