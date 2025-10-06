function CartReducer(state, action) {
      switch (action.type) {
            case "added_cart": {
                  const foundProduct = state?.carts?.find((cart) => cart.id == action.product.id)
                  if (!foundProduct) {
                        return {
                              ...state,
                              carts: [
                                    ...state.carts,
                                    {
                                          ...action.product,
                                          quantity: 1
                                    }
                              ]
                        }
                  } else {
                        return {
                              ...state,
                              carts: state.carts.map((cart) => {
                                    if (cart.id === action.product.id) {
                                          return {
                                                ...cart,
                                                quantity: cart.quantity + 1
                                          }
                                    } else {
                                          return cart
                                    }
                              })
                        }
                  }
            }
            case "remove_cart": {
                  return {
                        ...state,
                        carts: state.carts.filter(cart => cart.id !== action.id)
                  }
            }
            default:
                  return state;
      }
}

export default CartReducer