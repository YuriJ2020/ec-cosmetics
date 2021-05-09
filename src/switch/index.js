import { Redirect, Route, Switch } from "react-router-dom";

import Jumbo from "components/Jumbo";
import Concept from "components/Concept";
import About from "components/About";
import BestSeller from "components/BestSeller";
import NewItems from "components/NewItems";
import Shipping from "components/Shipping";

import Info from "components/Info";
import Sns from "components/Sns";
import Footer from "components/Footer";

import AllItems from "components/AllItems";
import ItemDetail from "components/ItemDetail";

import Contact from "components/Contact";

import NotFound from "components/NotFound";

const CustomSwitch = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Jumbo />
        <Concept />
        <BestSeller />
        <Shipping />
        <NewItems />
        <About />
        <Info />
        <Sns />
        <Footer />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/allitems">
        <AllItems />
      </Route>
      <Route path="/itemdetail/:aid">
        <ItemDetail />
      </Route>
      <Route path="/contact">
        <Contact />
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
