import React from 'react'
import "../../../css/cart/CartItem.css"
import { useDispatch } from 'react-redux'
import { changeCartItemQuantity } from '../../../redux/slice/CartSlice';

const CartItem = ({itemKey, itemImageUrl, itemName, itemQuantity, itemPrice, totalItemPrice}) => {
    const imagePath = `${process.env.PUBLIC_URL}${itemImageUrl}`;
    // console.log("item key : ", itemKey)
    // const [itemQuantity, setItemQuantity] = useState(1);
    // const [totalQuantityPrice, setTotalQuantityPrice] = useState(0);
    // const itemPrice = 100
    const dispatch = useDispatch()

    const changeItemQuantity = (value) => {
        // const index = getItemIndexUsingKey(key)
        // const index = 1
        if (itemQuantity + value >= 1) {
            console.log("key to change : ", itemKey)
            dispatch(changeCartItemQuantity({
                "sku": itemKey,
                "newQuantity": itemQuantity + value,
            }))
            // dispatch({"key": index, "quantity": itemQuantity + value, "totalItemPrice": (itemQuantity + value) * itemPrice })
            // setItemQuantity(itemQuantity + value)
        }
    }

  return (
    <div key={itemKey} className='CartItem-container'>
        <div className='CartItem-image'>
            <img src={imagePath} alt="item" />
        </div>
        <div className='CartItem-details'>
            <span>
                {itemName}
            </span>
            <div className='CartItem-quantity'>
                <div>
                    <button className='CartItem-quantity-button' onClick={() => changeItemQuantity(-1)}>-</button>
                    <span className='CartItem-quantity-value'>{itemQuantity}</span>
                    <button className='CartItem-quantity-button' onClick={() => changeItemQuantity(1)}>+</button>
                    <span className='CartItem-quantity-multiply-sign'>x</span>
                    <span>Rs.{itemPrice}</span>
                </div>
                <div>Rs.{totalItemPrice}</div>
            </div>
        </div>

    </div>
  )
}

export default CartItem
