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
      <div className='nav-wrapper'>
        <ul className={isOpen ? "menu-open" : "menu-closed"}>
          <li onClick={() => {setIsOpen(false)}}><NavLink to={"/"}>Главная</NavLink></li>
          <li onClick={() => {setIsOpen(false)}}><NavLink to={"/catalog"}>Каталог Моделей</NavLink></li>
          <li onClick={() => {setIsOpen(false)}}><NavLink to={"/shipping"}>Доставка</NavLink></li>
          <li onClick={() => {setIsOpen(false)}}><NavLink to={"/contacts"}>Контакты</NavLink></li>
          <li onClick={() => {setActive(true); setIsOpen(false); }}><p>Корзина</p></li>
        </ul>
        <div id="cart" onClick={() => { setActive(!active);}}>
          <img src={shopping_cart} alt='cart'></img>
          <div>Корзина</div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar