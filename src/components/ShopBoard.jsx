import CartBoard from "./CartBoard"
import ProductBoard from "./ProductBoard"

function ShopBoard() {
      return (
            <main class="container mx-auto px-4 md:px-8 py-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <ProductBoard></ProductBoard>
                        <CartBoard></CartBoard>
                  </div>
            </main>
      )
}

export default ShopBoard
