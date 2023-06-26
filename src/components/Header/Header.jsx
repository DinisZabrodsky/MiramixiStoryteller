import { Suspense } from "react";


export function Header () {
    return<>


    <Suspense>
        <Outlet />
    </Suspense>
    </>
}