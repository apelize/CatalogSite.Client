
import { useContext, useReducer, useState } from 'react'
import { CartContext } from '../../ContextProviders/cartContextProvider'
import CartItem from '../cartitem/cartitem'
import './cart.sass'


const Cart = () => {
    let {cartProducts, active, setActive} = useContext(CartContext)
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [_, forceUpdate] = useReducer(x => x + 1, 0);
    let handleDeleteItem = () =>{
      forceUpdate();
    }

    let GetCartItems = () =>{
      let keys = Object.keys(cartProducts)
      return keys?.map(
        key => {
          return <CartItem CartProduct={cartProducts[key]} ProductImage={cartProducts[key].ProductImage} UpdateCart={handleDeleteItem}/>
        })
    }

    let SendNotification = () =>{
      let keys = Object.keys(cartProducts)
      let ProductList: string[] = []
      keys.forEach(key => ProductList.push(cartProducts[key].ProductName + "\tx" + cartProducts[key].Count))
      let request = {phoneNumber: phoneNumber, productList: ProductList}
      fetch("http://localhost:5056/order", {method: 'POST', headers:{ "Content-Type": "application/json" }, body: JSON.stringify(request)})
    }

  return (
    <div id={active? "wrapper" : "not-active"} onClick={() => setActive(false)}>
        <div className='cart' onClick={(event) => {event?.stopPropagation()}}>
            <div className='items-wrapper'>
              <p>Корзина</p>
              <hr/>
              <div className='items'>
                {GetCartItems()}
              </div>
            </div>
            <div className='checkout'>
              <p>Данные</p>
              <hr/>
              <p>Ваш Номер</p>
                <input className='phone-checkout' type="text" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                <div></div>
                <button className='checkout-button' onClick={() => {SendNotification()}}>Оформить заказ</button>
            </div>
        </div>
    </div>
  )
}

export default Cart