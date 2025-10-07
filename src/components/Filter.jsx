import useCart from "../hooks/useCart"

function Filter() {

      const { dispatch } = useCart()

      function handleChange(e) {
            dispatch({
                  type: "sorted",
                  sortBy: e.target.value
            })
      }
      return (
            <>
                  <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Your Products</h2>
                        <div className="flex items-center space-x-2">
                              <span className="text-sm">Sort by:</span>
                              <select onChange={handleChange} className="border rounded-md px-2 py-1 text-sm">
                                    <option value="popularity">Most Popular</option>
                                    <option value="newest">Newest</option>
                                    <option value="price-asc">Price: Low to High</option>
                                    <option value="price-desc">Price: High to Low</option>
                              </select>
                        </div>
                  </div>
            </>
      )
}

export default Filter
