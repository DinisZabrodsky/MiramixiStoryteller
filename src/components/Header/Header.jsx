import { NavLink} from 'react-router-dom'


import logo from '../../image/Header/GamirareLogo.png'
import cssHeader from "./Header.module.css"


export function Header () {
    return  <>
    <header className={cssHeader.header}>
        <div className={cssHeader.headerConteiner}>

            <NavLink to='/'>
                <img  className={cssHeader.headerImage} src={logo} alt="Gamirare Logo"/>
            </NavLink>

            <nav>
                <ul className={cssHeader.headerList }>
                    <li><NavLink to='/'>Головна</NavLink></li>
                    <li><NavLink to='about'>Про Гру</NavLink></li>
                    <li><NavLink to='https://diniszabrodsky.github.io/MiramixiStoryteller-Marketplace/'>Маркетплейс</NavLink></li>
                    <li><NavLink to='crowdfunding'>Краудфандинг</NavLink></li>
                    <li><NavLink to='twitch-ua'>Twitch ua</NavLink></li>
                    <li><NavLink to='mass-media'>Змі</NavLink></li>
                </ul>
            </nav>

            <div>
                <select className={cssHeader.headerLanguage}>
                    <option value="ua">UA</option>
                    <option value="en">EN</option>
                </select>
            </div>

        </div>

    </header>
</>}