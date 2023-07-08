import { useMediaQuery } from 'react-responsive'
import { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"

import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"

import { mobileResponsiveReduser, tabletResponsiveReduser, desctopResponsiveReduser } from "store/technical/technicalReducer"
import { SocialIcon } from 'components/SocialIcon/SocialIcon'


export const HeaderAndFuter = () => {
    const dispatch = useDispatch()

    const mobileResponsive = useMediaQuery({maxWidth: 743})
    const tabletResponsive = useMediaQuery({minWidth: 744, maxWidth: 1439})
    const desctopResponsive = useMediaQuery({minWidth: 1440})

    useEffect(() => {
        if(mobileResponsive) {
            dispatch(mobileResponsiveReduser(mobileResponsive))
        } else if (tabletResponsive) {
            dispatch(tabletResponsiveReduser(tabletResponsive))
        } else {
            dispatch(desctopResponsiveReduser(desctopResponsive))
        }
    },[dispatch, mobileResponsive, tabletResponsive, desctopResponsive])


    return<>
        <Header />
    
        <Suspense>
            <Outlet/>
        </Suspense>
    
        <Footer />

        <SocialIcon />
    </>
}
