
import { getImageUrl } from "../utils"
import Ratings from "./Ratings"
import useCart from './../hooks/useCart';

function ProductCard({ product }) {
      const { state, dispatch } = useCart()
      const handleAddToCart = (product) => {
            dispatch({
                  type: "added_cart",
                  product
            })
      }

      const handleRemove = (id) => {
            dispatch({
                  type: "remove_cart",
                  id
            })
      }
      return (
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <img src={getImageUrl(product.image)} alt="Polo with Tipping Details"
                              className="h-full w-auto object-cover" />
                  </div>
                  <div className="p-4">
                        <h3 className="font-medium">{product.name}</h3>
                        <div className="flex items-center justify-between">
                              <div className="flex items-center my-1">
                                    <Ratings rating={Math.round(product.rating)}></Ratings>
                                    <span className="text-xs text-gray-500 ml-1">{Math.round(product.rating)}/5</span>
                              </div>
                              <span className="text-xs text-gray-700">({product.stock} pcs left)</span>
                        </div>
                        <p className="font-bold">${product.price}</p>
                        {
                              state.carts.some((cart) => cart.id === product.id) ? (<button onClick={() => {
                                    handleRemove(product.id)
                              }} className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">Remove from Cart</button>) : (<button onClick={() => handleAddToCart(product)} disabled={product.stock === 0} className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">Add to Cart</button>)
                        }

                  </div>
            </div >
      )
}

export default ProductCard
