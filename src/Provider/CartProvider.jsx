import { useReducer } from 'react'
import { CartContext } from '../Context'
import CartReducer from '../Reducers/CartReducer'

const initialState = {
      cart: []
}

function CartProvider({ children }) {

      const [cart, dispatch] = useReducer(initialState, CartReducer)
      return (
            <CartContext.Provider value={{ cart, dispatch }}>
                  {children}
            </CartContext.Provider>
      )
}

export default CartProvider
