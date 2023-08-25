
import { useContext, useReducer, useState } from 'react'
import { CartContext } from '../../ContextProviders/cartContextProvider'
import { SendNotification } from '../../scripts/SendOrderNotification'
import CartItem from '../cartitem/cartitem'
import './cart.sass'


const Cart = () => {
    let {cartProducts, active, setActive} = useContext(CartContext)
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [, forceUpdate] = useReducer(x => x + 1, 0);
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
                <input placeholder='Номер телефона' className='phone-checkout' type="text" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                <div className='empty'></div>
                <button className='checkout-button' onClick={() => {SendNotification(cartProducts, phoneNumber!); setActive(false)}}>Оформить заказ</button>
            </div>
        </div>
    </div>
  )
}

export default Cart