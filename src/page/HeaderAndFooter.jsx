import { useMediaQuery } from 'react-responsive'
import { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"

import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"

import { addResponsive } from "store/technical/technicalReducer"


export const HeaderAndFuter = () => {
    const dispatch = useDispatch()

    const mobileHeader = useMediaQuery({
        query: '(max-width: 1439px)',
    })

    useEffect(() => {
        dispatch(addResponsive(mobileHeader))
    },[dispatch, mobileHeader])


    return<>
        <Header />
    
        <Suspense>
            <Outlet/>
        </Suspense>
    
        <Footer />
    </>
}
