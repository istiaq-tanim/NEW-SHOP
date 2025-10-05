import CartList from "./CartList";
import OrderSummary from './OrderSummary';

function CartBoard() {
      return (
            <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <CartList></CartList>
                        <OrderSummary></OrderSummary>
                  </div>
            </div>
      )
}

export default CartBoard
