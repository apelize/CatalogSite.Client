import { NavLink } from 'react-router-dom'
import './footer.sass'
import whatsapp from '../../assets/whatsapp.png'
import viber from '../../assets/viber.png'

const Footer = () => {
  return (
    <div id="footer">
        <ul>
            <li><NavLink to={"/"}>Главная</NavLink></li>
            <li><NavLink to={"/catalog"}>Каталог</NavLink></li>
            <li><NavLink to={"/shipping"}>Доставка</NavLink></li>
            <li><NavLink to={"/contacts"}>Контакты</NavLink></li>
        </ul>
        <div id="contacts">
            <div id="whatsapp">
                <img src={whatsapp} alt="whatsapp"/>
                <p>+375336404951 </p>
            </div>
            <div id="viber">
                <img src={viber} alt="viber" />
                <p>+375336404951</p>
            </div>
        </div>
    </div>
  )
}

export default Footer