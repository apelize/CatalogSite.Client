import { useContext} from 'react'
import { Product } from '../../Entities/product';
import { CatalogContext } from '../../ContextProviders/catalogContextProvider';
import ProductItem from '../product/product';
import './catalog.sass'

const Catalog = () => {

  let mapProducts = (products: Product[]) => products?.map(product => { 
    return <ProductItem key={product.productId} id={product.productId} productDescription={product.productDescription} productImage={product.productImage} productName={product.productName} productPrice={product.productPrice}/>
  });

  let {products} = useContext(CatalogContext);
  
  return (
    <div id="catalog">
      {mapProducts(products)}
    </div>
  )
}

export default Catalog