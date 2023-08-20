import { NavLink } from 'react-router-dom'
import './navbar.sass'
import shopping_cart from '../../assets/shopping_cart.png'
import { CartContext } from '../../ContextProviders/cartContextProvider'
import { useContext, useState } from 'react'

const Navbar = () => {
  let {active, setActive} = useContext(CartContext)
  const [isOpen, setIsOpen] = useState<Boolean>(false)

  return (
    <nav id="nav">
      <div id="menu">
        <p>Fakel.by</p>
        <span onClick={() => {setIsOpen(!isOpen)}}></span>
      </div>
      <ul className={isOpen ? "menu-open" : "menu-closed"}>
        <li><NavLink to={"/"}>Главная</NavLink></li>
        <li><NavLink to={"/catalog"}>Каталог</NavLink></li>
        <li><NavLink to={"/shipping"}>Доставка</NavLink></li>
        <li><NavLink to={"/contacts"}>Контакты</NavLink></li>
        <li><NavLink to={"/feedback"}>Отзывы</NavLink></li>
        <li onClick={() => {setActive(true); setIsOpen(!isOpen); }}><p>Корзина</p></li>
      </ul>
      <div id="cart" onClick={() => { setActive(!active);}}>
        <img src={shopping_cart} alt='cart'></img>
        <div>Корзина</div>
      </div>
    </nav>
  )
}

export default Navbar