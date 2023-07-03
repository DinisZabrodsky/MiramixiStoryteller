import { NavLink} from 'react-router-dom'
import cssHeaderDesck from './HeaderDesctopNav.module.scss'

export const HeaderDesctopNav = () => {
    return <>
        <nav className={cssHeaderDesck.headerNav}>
                <ul className={cssHeaderDesck.headerList }>
                    <li><NavLink to='/'>Головна</NavLink></li>
                    <li><NavLink to='about'>Про Гру</NavLink></li>
                    <li><NavLink to='https://diniszabrodsky.github.io/MiramixiStoryteller-Marketplace/'>Маркетплейс</NavLink></li>
                    <li><NavLink to='https://diniszabrodsky.github.io/Plantarium/'>Plantarium</NavLink></li>
                    <li><NavLink to='crowdfunding'>Краудфандинг</NavLink></li>
                    <li><NavLink to='twitch-ua'>Twitch ua</NavLink></li>
                    <li><NavLink to='mass-media'>Змі</NavLink></li>
                    <li>
                        <select className={cssHeaderDesck.headerLanguage}>
                            <option value="ua">UA</option>
                            <option value="en">EN</option>
                        </select>
                    </li>
                </ul>
            </nav>
    </>
}