import React, { FC, useContext, useReducer, useState } from 'react'
import { CartContext } from '../../ContextProviders/cartContextProvider'
import { CartProduct } from '../../Entities/cartProduct'
import './cartitem.sass'

interface CartItemProps{
    CartProduct: CartProduct
    ProductImage: string
    UpdateCart : () => void
}

const CartItem: FC<CartItemProps> = ({CartProduct, ProductImage, UpdateCart}) => {
    let {cartProducts, setCartProducts} = useContext(CartContext)
    const [_, forceUpdate] = useReducer(x => x + 1, 0);

  return (
    <div className='cart-product-wrapper'>
        <img src={ProductImage} alt='https://placehold.co/300x300'></img>
        <div className='product-desc'>
            <p className='product-name'>{CartProduct.ProductName}</p>
            <div className='product-count'>
                <button onClick={() => {cartProducts[CartProduct.ProductId].Count++; setCartProducts(cartProducts); forceUpdate()}}>+</button>
                <p className=''>{cartProducts[CartProduct.ProductId].Count}</p>
                <button onClick={() => {if (cartProducts[CartProduct.ProductId].Count > 1){ cartProducts[CartProduct.ProductId].Count--; setCartProducts(cartProducts); forceUpdate()}}}>-</button>
            </div>
        </div>
        <button onClick={() => { delete cartProducts[CartProduct.ProductId]; forceUpdate(); UpdateCart()}}>x</button>
    </div>
  )
}

export default CartItem