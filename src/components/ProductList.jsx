import ProductCard from "./ProductCard"

function ProductList({ products }) {

  return (
    <div className="product-grid">
      {
        products.length > 0 && (
          products.map(product => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))
        )
      }
    </div>
  )
}

export default ProductList
