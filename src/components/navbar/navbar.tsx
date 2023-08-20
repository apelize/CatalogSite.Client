import { NavLink } from 'react-router-dom'
import './navbar.sass'
import shopping_cart from '../../assets/shopping_cart.png'
import { CartContext } from '../../ContextProviders/cartContextProvider'
import { useContext } from 'react'

const Navbar = () => {
  let {active, setActive} = useContext(CartContext)

  return (
    <nav id="nav">
      <div id="menu">
        <span></span>
      </div>
      <ul>
        <li><NavLink to={"/"}>Главная</NavLink></li>
        <li><NavLink to={"/catalog"}>Каталог</NavLink></li>
        <li><NavLink to={"/shipping"}>Доставка</NavLink></li>
        <li><NavLink to={"/contacts"}>Контакты</NavLink></li>
        <li><NavLink to={"/feedback"}>Отзывы</NavLink></li>
      </ul>
      <div id="cart" onClick={() => {setActive(!active)}}>
        <img src={shopping_cart} alt='cart'></img>
        <div>Корзина</div>
      </div>
    </nav>
  )
}

export default Navbar