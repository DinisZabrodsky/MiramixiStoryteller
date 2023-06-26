import { Route, Routes } from "react-router-dom";

import { Header } from "./Header/Header";
import {HomePage} from "../page/HomePage";

export const App = () => {
  return (<>

  <Routers>
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />}/>

    </Route>
  </Routers>

  </>);
};
