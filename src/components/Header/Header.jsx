import { NavLink} from 'react-router-dom'


import logo from '../../image/Header/GamirareLogo.png'
import cssHeader from "./Header.module.scss"
import { HeaderDesctopNav } from './HeaderDesctopNav/HeaderDesctopNav'
import { HeaderMobileNav } from './HeaderMobileNav/HeaderMobileNav'
import { useSelector } from 'react-redux'

const responsiveState = (state => state.technical)
export function Header () {
    
    const {desctop} = useSelector(responsiveState)

    return  <>
    <header className={cssHeader.header}>
        <div className={cssHeader.headerConteiner}>

            <NavLink to='/'>
                <img  className={cssHeader.headerImage} src={logo} alt="Gamirare Logo"/>
            </NavLink>

           {!desctop ? <HeaderMobileNav /> : <HeaderDesctopNav/>}

        </div>

    </header>
</>}