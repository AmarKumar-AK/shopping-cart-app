import React, { useEffect, useState } from 'react'
import "../../../css/cart/CartItem.css"

const CartItem = () => {
    const imagePath = `${process.env.PUBLIC_URL}/static/images/products/fruit-n-veg/apple.jpg`;
    const [itemQuantity, setItemQuantity] = useState(1);
    const [totalQuantityPrice, setTotalQuantityPrice] = useState(0);
    const itemPrice = 100

    const changeItemQuantity = (value) => {
        if (itemQuantity + value >= 1) {
            setItemQuantity(itemQuantity + value)
        }
    }

    useEffect(() => {
        setTotalQuantityPrice(itemQuantity * 100)
    }, [itemQuantity])

  return (
    <div className='CartItem-container'>
        <div className='CartItem-image'>
            <img src={imagePath} alt="item" />
        </div>
        <div className='CartItem-details'>
            <span>
                Apple asfha adfalga dgljdfg gjdfg d gdfhk fgdkgh dgdkhgfd kdhkghkhd dkhgkhfd
            </span>
            <div className='CartItem-quantity'>
                <div>
                    <button className='CartItem-quantity-button' onClick={() => changeItemQuantity(-1)}>-</button>
                    <span className='CartItem-quantity-value'>{itemQuantity}</span>
                    <button className='CartItem-quantity-button' onClick={() => changeItemQuantity(1)}>+</button>
                    <span className='CartItem-quantity-multiply-sign'>x</span>
                    <span>Rs.{itemPrice}</span>
                </div>
                <div>Rs.{totalQuantityPrice}</div>
            </div>
        </div>

    </div>
  )
}

export default CartItem
