import { createContext, FC, ReactNode, useState} from 'react'
import { Product } from '../Entities/product'


interface DescriptionContextProps {
    product: Product | undefined,
    active: boolean,
    setProduct: (prod: Product) => void
    setActive: (f: boolean) => void
}

export const DescriptionContext = createContext<DescriptionContextProps>({product: undefined, setProduct: () =>{}, active: false, setActive: () => {}})

type Props ={
    children: ReactNode,
}

const DescriptionContentProvider: FC<Props> = ({children}) => {
    const [product, setProduct] = useState<Product>();
    const [descriptionActive, setDescriptionActive] = useState<boolean>(false)

  return (
    <DescriptionContext.Provider value={{product: product, setProduct: setProduct, active: descriptionActive, setActive: setDescriptionActive}}>
        {children}
    </DescriptionContext.Provider>
  )
}

export default DescriptionContentProvider