import React, { useContext} from 'react'
import { Product } from '../../Entities/product';
import { CatalogContext } from '../../ContextProviders/catalogContentProvider';
import ProductItem from '../product/product';
import './catalog.sass'

const Catalog = () => {
  // let product = 
  // [
  //   {
  //     id: 1, 
  //     productName: "product1",
  //     productDescription: "product1Desc",
  //     productPrice: 20,
  //     productImage: "https://placehold.co/400x300"
  //   },
  //   {
  //     id: 2, 
  //     productName: "product2",
  //     productDescription: "product2Desc",
  //     productPrice: 20,
  //     productImage: "https://placehold.co/400x300"
  //   },
  //   {
  //     id: 3, 
  //     productName: "product3",
  //     productDescription: "product3Desc",
  //     productPrice: 20,
  //     productImage: "https://placehold.co/400x300"
  //   }
  // ]



  let func = (products: Product[]) => products?.map(product => { 
    return <ProductItem key={product.productId} id={product.productId} productDescription={product.productDescription} productImage={product.productImage} productName={product.productName} productPrice={product.productPrice}/>
  });

  let {products} = useContext(CatalogContext);
  
  return (
    <div id="catalog">
      {func(products)}
    </div>
  )
}

export default Catalog