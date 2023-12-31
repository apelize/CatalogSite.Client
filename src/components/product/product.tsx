import { FC, useContext } from 'react'
import { CartContext } from '../../ContextProviders/cartContextProvider';
import { CatalogContext } from '../../ContextProviders/catalogContextProvider';
import { DescriptionContext } from '../../ContextProviders/productDescriptionContextProvider';
import { Product } from '../../Entities/product';
import './product.sass'

interface ProductProps{
    product: Product,
}

const ProductItem : FC<ProductProps> = ({product}) => {

    let {setActive, setProduct} = useContext(DescriptionContext)
    let {AddProductToCart} = useContext(CartContext);

  return (
    <div id="product">
        <img onClick={() => {setProduct(product); setActive(true)}} src={product.productImage} alt={product.productImage}/>
        <div onClick={() => {AddProductToCart(product);}}>
            <p>{product.productName}</p>
            <p className='product-price'>{product.productPrice}р</p>
            <p className='hover-text'>Купить</p>
        </div>
    </div>
  )
}

export default  ProductItem