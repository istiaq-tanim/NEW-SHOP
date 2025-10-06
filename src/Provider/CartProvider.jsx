import { useReducer } from 'react';
import { CartContext } from '../Context';
import CartReducer from '../Reducers/CartReducer';
import products from './../data/products';

const initialState = {
      carts: [],
      products: products,
      searchTerm: ""
}

function CartProvider({ children }) {

      const [state, dispatch] = useReducer(CartReducer, initialState)
      return (
            <CartContext.Provider value={{ state, dispatch }}>
                  {children}
            </CartContext.Provider>
      )
}

export default CartProvider
