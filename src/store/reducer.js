import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'

import { sustemReducer } from "./sustem/sustemReducer";
import { technicalReducer } from "./technical/technicalReducer";

const persisSustem = {
    key: 'sustem',
    storage
}

const persistSustemReduser = persistReducer(persisSustem, sustemReducer)


export const reducer = {
    sustem: persistSustemReduser,
    technical: technicalReducer,
    
}