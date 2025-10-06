import useCart from "./useCart"


function useTotal() {
      const { state } = useCart()

      let subTotal = state.carts.reduce((acc, current) => (current.price * current.quantity) + acc, 0)

      let discount = Math.round((subTotal * 20) / 100)

      let total = subTotal === 0 ? 0 : subTotal - (discount + 15)

      return {
            total,
            discount,
            subTotal
      }
}


export default useTotal
