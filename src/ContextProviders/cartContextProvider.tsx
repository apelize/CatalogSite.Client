import { createContext, FC, ReactNode, useState} from 'react'
import { CartProduct } from '../Entities/cartProduct'
import { Product } from '../Entities/product'


interface CartContextProps {
    cartProducts: Record<string, CartProduct>,
    AddProductToCart:(product: Product) => void,
    active: boolean,
    setCartProducts: (prods: Record<string, CartProduct>) => void,
    setActive: (f: boolean) => void
}

export const CartContext = createContext<CartContextProps>({cartProducts: {}, setCartProducts: () =>{}, AddProductToCart: () => {}, active: false, setActive: () => {}})

type Props ={
    children: ReactNode,
}

const CartContentProvider: FC<Props> = ({children}) => {
    const [cartProducts, setCartProducts] = useState<Record<string, CartProduct>>({});
    const [cartActive, setCartActive] = useState<boolean>(false)

    const AddProductToCart = (product: Product) =>
    {
        if (cartProducts[product.productId] !== undefined) {cartProducts[product.productId].Count++;}
        else
        {
            let newProduct = new CartProduct(product.productId, product.productName, product.productImage, 1)
            cartProducts[newProduct.ProductId] = (newProduct);
        }   
        setCartProducts(cartProducts)
    }
  return (
    <CartContext.Provider value={{cartProducts: cartProducts!, setCartProducts: setCartProducts, AddProductToCart: AddProductToCart, active: cartActive, setActive: setCartActive}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContentProvider