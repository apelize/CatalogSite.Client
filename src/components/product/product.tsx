import { FC, useContext } from 'react'
import { CartContext } from '../../ContextProviders/cartContextProvider';
import { CatalogContext } from '../../ContextProviders/catalogContextProvider';
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
        <div onClick={() => {products.forEach(prod => {if (prod.productId === id) {AddProductToCart(prod);}})}}>
            <p>{productName}</p>
            <p>{productPrice}р</p>
        </div>
    </div>
  )
}

export default  ProductItem