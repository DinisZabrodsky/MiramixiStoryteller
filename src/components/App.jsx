import { Route, Routes } from "react-router-dom";

import {HomePage} from "../page/HomePage";
import { HeaderAndFuter } from "page/HeaderAndFooter";
import { AboutPage } from "page/AboutPage";
import { CrowdfundingPage } from "page/CrowdfundingPage";
import { TwitchUaPage } from "page/TwitchUaPage";
import { MassMediaPage } from "page/MassMediaPage";

export const App = () => {
  return (<>

  <Routes>
    <Route path="/" element={<HeaderAndFuter />}>
      <Route index element={<HomePage />}/>
      <Route path="about" element={<AboutPage />}/>
      <Route path="crowdfunding" element={<CrowdfundingPage />}/>
      <Route path="twitch-ua" element={<TwitchUaPage/>}/>
      <Route path="mass-media" element={<MassMediaPage/>}/>
    </Route>
  </Routes>

  </>);
};
