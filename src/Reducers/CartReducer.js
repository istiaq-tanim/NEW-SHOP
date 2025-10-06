function CartReducer(state, action) {
      switch (action.type) {
            case "added_cart": {
                  const foundProduct = state?.carts?.find((cart) => cart.id === action.product.id)
                  if (!foundProduct) {
                        return {
                              ...state,
                              carts: [
                                    ...state.carts,
                                    {
                                          ...action.product,
                                          quantity: 1
                                    }
                              ],
                              products: state?.products?.map((item) => item.id === action.product.id ? { ...item, stock: item.stock - 1 } : item)
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
                              }),
                              products: state?.products?.map((item) => item.id === action.product.id ? { ...item, stock: item.stock - 1 } : item)
                        }
                  }
            }
            case "remove_cart": {
                  const findIndex = state.carts.findIndex(item => item.id === action.id)
                  return {
                        ...state,
                        carts: state.carts.filter(cart => cart.id !== action.id),
                        products: state?.products?.map((item) => item.id === action.id ? { ...item, stock: item.stock + state.carts[findIndex].quantity } : item)
                  }
            }

            case "decrease_cart": {
                  const findIndex = state.carts.findIndex(item => item.id === action.id)

                  if (state.carts[findIndex].quantity > 1) {
                        return {
                              ...state,
                              carts: state.carts.map((item) => item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item),
                              products: state?.products?.map((item) => item.id === action.id ? { ...item, stock: item.stock + 1 } : item)
                        }
                  } else {
                        return {
                              ...state,
                              carts: state.carts.filter(cart => cart.id !== action.id),
                              products: state?.products?.map((item) => item.id === action.id ? { ...item, stock: item.stock + state.carts[findIndex].quantity } : item)
                        }
                  }
            }
            default:
                  return state;
      }
}

export default CartReducer