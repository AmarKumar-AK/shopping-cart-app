import React, { useEffect, useState } from 'react'

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
    <div className='cart-item'>
        <div className='cart-item-image'>
            <img src={imagePath} alt="item" />
        </div>
        <div className='cart-item-details'>
            <div className='cart-item-name'>
                Apple asfha adfalga dgljdfg gjdfg d gdfhk fgdkgh dgdkhgfd kdhkghkhd dkhgkhfd
            </div>
            <div className='cart-item-quantity'>
                <div>
                    <button className='quantity-button' onClick={() => changeItemQuantity(-1)}>-</button>
                    <span className='quantity-value'>{itemQuantity}</span>
                    <button className='quantity-button' onClick={() => changeItemQuantity(1)}>+</button>
                    <span className='quantity-value'>x</span>
                    <span className='item-price'>Rs.{itemPrice}</span>
                </div>
                <div>Rs.{totalQuantityPrice}</div>
            </div>
        </div>

    </div>
  )
}

export default CartItem
