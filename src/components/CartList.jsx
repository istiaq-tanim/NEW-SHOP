import useCart from "../hooks/useCart"
import SingleCart from "./SingleCart"

function CartList() {
      const { state } = useCart()
      return (
            <>
                  <h2 className="text-2xl font-bold mb-10">YOUR CART</h2>
                  {
                        state.carts.length > 0 ? (state?.carts?.map((cart) => <SingleCart key={cart.id} cart={cart}></SingleCart>)) : <div className="text-2xl text-red-400 flex justify-center items-center">There is no Selected Products In Cart</div>
                  }
            </>
      )
}

export default CartList
