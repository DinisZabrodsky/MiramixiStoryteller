import { Suspense } from "react";
import {Outlet } from 'react-router-dom'


export function Header () {
    return<>


    <Suspense>
        <Outlet />
    </Suspense>
    </>
}