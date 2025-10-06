
import useCart from '../hooks/useCart';
import { getImageUrl } from './../utils/index';

function SingleCart({ cart }) {
      const { dispatch } = useCart()

      const handleDelete = (id) => {
            dispatch({
                  type: "remove_cart",
                  id
            })
      }

      const handleAdd = (product) => {
            dispatch({
                  type: "added_cart",
                  product
            })
      }

      const handleDecrease = (id) => {
            dispatch({
                  type: "decrease_cart",
                  id
            })
      }

      return (
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                        <img src={getImageUrl(cart.image)} alt="Gradient Graphic T-shirt"
                              className="h-full w-auto object-cover" />
                  </div>
                  <div className="flex-grow">
                        <div className="flex justify-between">
                              <h3 className="font-medium">{cart.name}</h3>
                              <button onClick={() => handleDelete(cart.id)}><span className="text-red-500 text-sm cursor-pointer">×</span></button>
                        </div>
                        <p className="text-sm text-gray-500">Size: Large</p>
                        <p className="text-sm text-gray-500">Color: White</p>
                        <div className="flex justify-between items-center mt-2">
                              <p className="font-bold">${cart.price}</p>
                              <div className="flex items-center space-x-2">
                                    <button onClick={() => handleDecrease(cart.id)} className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer">−</button>
                                    <span className="text-sm">{cart.quantity}</span>
                                    <button onClick={() => handleAdd(cart)} className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer">+</button>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default SingleCart
