import { NavLink} from 'react-router-dom'


import logo from '../../image/Header/GamirareLogo.png'
import cssHeader from "./Header.module.scss"
import { HeaderDesctopNav } from './HeaderDesctopNav/HeaderDesctopNav'
import { useMediaQuery } from 'react-responsive'
import { HeaderMobileNav } from './HeaderMobileNav/HeaderMobileNav'


export function Header () {
    const mobileHeader = useMediaQuery({
        query: '(max-width: 1439px)',
    })

    return  <>
    <header className={cssHeader.header}>
        <div className={cssHeader.headerConteiner}>

            <NavLink to='/'>
                <img  className={cssHeader.headerImage} src={logo} alt="Gamirare Logo"/>
            </NavLink>

           {mobileHeader ? <HeaderMobileNav /> : <HeaderDesctopNav/>}

        </div>

    </header>
</>}