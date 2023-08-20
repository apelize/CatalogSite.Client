import React, { FC, ReactNode } from 'react';
import { createContext, useState,} from 'react'
import { Product } from '../Entities/product'
import { fetchProducts } from '../scripts/FetchingProductsScript';


interface CatalogContextProps {
    products: Product[],
    setProducts:(products: Product[]) => void,
}

export const CatalogContext = createContext<CatalogContextProps>({products: [], setProducts: () => {}})

type Props ={
    children: ReactNode,
}

const CatalogContentProvider: FC<Props> = ({children}) => {
  const [products,setFetchedProducts] = useState<Product[]>([]);
  if (products.length === 0) fetchProducts().then(prods => setFetchedProducts(prods))
  return (
    <CatalogContext.Provider value={{products: products!, setProducts: setFetchedProducts}}>
        {children}
    </CatalogContext.Provider>
  )
}

export default CatalogContentProvider