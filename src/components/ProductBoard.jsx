import { useState } from "react"
import products from "../data/products"
import Filter from "./Filter"
import ProductList from "./ProductList"

function ProductBoard() {
      const [productItems, setProducts] = useState(products)
      return (
            <>
                  <div className="lg:col-span-2">
                        <Filter></Filter>
                        <ProductList products={productItems}></ProductList>
                  </div>
            </>
      )
}

export default ProductBoard
