import React, { FC, useContext } from 'react'
import { CartContext } from '../../ContextProviders/cartItemsProvider';
import { CatalogContext } from '../../ContextProviders/catalogContentProvider';
import './product.sass'

interface ProductProps{
    id: string,
    productName: string,
    productDescription: string,
    productPrice: number,
    productImage: string
}

const ProductItem : FC<ProductProps> = ({id, productName, productDescription, productPrice, productImage}) => {

    let {products} = useContext(CatalogContext);

    let {AddProductToCart} = useContext(CartContext);

  return (
    <div id="product">
        <img src={productImage} alt={productImage}/>
        <button onClick={() => {products.forEach(prod => {if (prod.productId === id) {AddProductToCart(prod);}})}}>{productName}   {productPrice}р</button>
    </div>
  )
}

export default  ProductItem