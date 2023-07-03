import { NavLink } from 'react-router-dom'
import cssHeaderMobile from "./HeaderMobileNav.module.scss"
import menuSvg from '../../../image/Header/HeaderMenu.svg'
import { useState } from 'react'



export const HeaderMobileNav = () => {

    const [menu, setMenu] = useState(false)

    const handleChange = () => {
        if(menu) {
            return setMenu(false)
        }
        return setMenu(true)
    }

    return <>
        <button className={cssHeaderMobile.headerButton} onClick={handleChange}>
            <svg >
                {menu ? <use href={menuSvg + "#icon-menu-close"}></use> : 
                    <use href={menuSvg + "#icon-menu-burger"}></use>}
            </svg>
        </button>

        {menu && <div className={cssHeaderMobile.headerMobileConteiner} onClick={handleChange}>
            <nav className={cssHeaderMobile.headerMobilNav}>
                <ul className={cssHeaderMobile.headerMobilList }>
                    <li><NavLink to='/'>Головна</NavLink></li>
                    <li><NavLink to='about'>Про Гру</NavLink></li>
                    <li><NavLink to='https://diniszabrodsky.github.io/MiramixiStoryteller-Marketplace/'>Маркетплейс</NavLink></li>
                    <li><NavLink to='https://diniszabrodsky.github.io/Plantarium/'>Plantarium</NavLink></li>
                    <li><NavLink to='crowdfunding'>Краудфандинг</NavLink></li>
                    <li><NavLink to='twitch-ua'>Twitch ua</NavLink></li>
                    <li><NavLink to='mass-media'>Змі</NavLink></li>
                    <li>
                        <select className={cssHeaderMobile.headerMobilLanguage}>
                            <option value="ua">UA</option>
                            <option value="en">EN</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </div>}
    </>
}