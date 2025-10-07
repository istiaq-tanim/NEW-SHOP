import useCart from './../hooks/useCart';
import Filter from "./Filter";
import ProductList from "./ProductList";

function ProductBoard() {
      const { state } = useCart()
      const { searchTerm, products, sortBy } = state

      let filterProduct = [...products]
      if (searchTerm) {
            filterProduct = filterProduct.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      }

      switch (sortBy) {
            case "newest":
                  filterProduct = filterProduct.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  break
            case "popularity":
                  filterProduct = filterProduct.sort((a, b) => b.rating - a.rating)
                  break
            case "price-asc":
                  filterProduct = filterProduct.sort((a, b) => a.price > b.price ? 1 : - 1)
                  break
            case "price-desc":
                  filterProduct = filterProduct.sort((a, b) => b.price > a.price ? 1 : -1)
                  break
            default:
                  break
      }

      return (
            <>
                  <div className="lg:col-span-2">
                        <Filter></Filter>
                        <ProductList products={filterProduct}></ProductList>
                  </div>
            </>
      )
}

export default ProductBoard
