import { Footer } from "components/Futer/Futer"
import { Header } from "components/Header/Header"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"


export const HeaderAndFuter = () => {
    return<>
        <Header />
    
        <Suspense>
            <Outlet/>
        </Suspense>
    
        <Footer />
    </>
}
