import { Redirect, Route, Switch } from "react-router-dom";

import Jumbo from "components/Jumbo";
import Concept from "components/Concept";
import About from "components/About";
import BestSeller from "components/BestSeller";
import NewItem from "components/NewItem";
import Info from "components/Info";
import Sns from "components/Sns";
import Footer from "components/Footer";

import AllItem from "components/AllItem";
import ItemDetail from "components/ItemDetail";

import NotFound from "components/NotFound";

const CustomSwitch = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Jumbo />
        <Concept />
        <BestSeller />
        <NewItem />
        <About />
        <Info />
        <Sns />
        <Footer />
      </Route>
      <Route path="/allitem">
        <AllItem />
      </Route>
      <Route path="/itemdetail">
        <ItemDetail />
      </Route>
      <Route exact path="/notfound">
        <NotFound />
      </Route>
      <Route path="/">
        <Redirect to="/notfound" />
      </Route>
    </Switch>
  </>
);

export default CustomSwitch;
