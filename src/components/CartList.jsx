import useCart from "../hooks/useCart"
import SingleCart from "./SingleCart"

function CartList() {
      const { state } = useCart()
      return (
            <>
                  <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
                  {
                        state?.carts?.map((cart) => <SingleCart key={cart.id} cart={cart}></SingleCart>)
                  }
            </>
      )
}

export default CartList
