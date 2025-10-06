import Filter from "./Filter"
import ProductList from "./ProductList"
import useCart from './../hooks/useCart';

function ProductBoard() {
      const { state } = useCart()
      return (
            <>
                  <div className="lg:col-span-2">
                        <Filter></Filter>
                        <ProductList products={state?.products}></ProductList>
                  </div>
            </>
      )
}

export default ProductBoard
