import { createContext, FC, ReactNode, useState} from 'react'
import { CartProduct } from '../Entities/cartProduct'
import { Product } from '../Entities/product'


interface CartContextProps {
    cartProducts: CartProduct[],
    AddProductToCart:(product: Product) => void,
}

export const CartContext = createContext<CartContextProps>({cartProducts: [], AddProductToCart: () => {}})

type Props ={
    children: ReactNode,
}

const CartContentProvider: FC<Props> = ({children}) => {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

    const AddProductToCart = (product: Product) =>
    {
        let flag : boolean = false;
        cartProducts.forEach(prod => 
        {
            if (prod.ProductId === product.productId) { prod.Count++; flag = true;}

        })
        if (flag === false)
        {
            let newProduct = new CartProduct(product.productId, 1)
            cartProducts.push(newProduct)
        }         
        setCartProducts(cartProducts)
    }
  return (
    <CartContext.Provider value={{cartProducts: cartProducts!, AddProductToCart: AddProductToCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContentProvider