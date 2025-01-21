import { Route } from "react-router-dom";
import Home from "../pages/Home";
import SongInfo from "../pages/SongInfo";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/song/:songRank" element={<SongInfo />} />
  </>
);

export default routes;
