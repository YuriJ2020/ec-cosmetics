import { Redirect, Route, Switch } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";

import Jumbo from "components/Jumbo";
import Concept from "components/Concept";
import About from "components/About";
import BestSeller from "components/BestSeller";

import NewItems from "components/NewItems";
import NewItemDetail from "components/NewItemDetail";

import Shipping from "components/Shipping";

import Info from "components/Info";
import Sns from "components/Sns";
import Footer from "components/Footer";

import AllItems from "components/AllItems";
import ItemDetail from "components/ItemDetail";

import FandQ from "components/FandQ";

import Contact from "components/Contact";

import StoreLocation from "components/StoreLocation";

import NotFound from "components/NotFound";

const CustomSwitch = () => (
  <>
    <Switch>
      <Route exact path="/">
        <ScrollAnimation animateIn="fadeIn">
          <Jumbo />
          <Concept />
          <NewItems />
          <BestSeller />
          <Shipping />
          <About />
          <Info />
          <Sns />
          <Footer />
        </ScrollAnimation>
      </Route>

      <Route path="/about">
        <div style={{ paddingTop: "5rem" }}>
          <About />
        </div>
      </Route>

      <Route path="/fandq">
        <div style={{ paddingTop: "6rem" }}>
          <FandQ />
        </div>
      </Route>

      <Route path="/storelocation">
        <div style={{ paddingTop: "5rem" }}>
          <StoreLocation />
        </div>
      </Route>

      <Route path="/contact">
        <div style={{ paddingTop: "3rem" }}>
          <Contact />
        </div>
      </Route>

      {/* AllItems Routes */}
      <Route path="/allitems">
        <div style={{ paddingTop: "6rem" }}>
          <AllItems />
        </div>
      </Route>
      <Route path="/itemdetail/:aid">
        <div style={{ paddingTop: "8rem" }}>
          <ItemDetail />
        </div>
      </Route>

      {/* NewItems Routes */}
      <Route path="/newitems/">
        <div style={{ paddingTop: "6rem" }}>
          <NewItems />
        </div>
      </Route>
      <Route path="/newitemdetail/:nid">
        <div style={{ paddingTop: "8rem" }}>
          <NewItemDetail />
        </div>
      </Route>

      <Route exact path="/notfound">
        <div style={{ paddingTop: "6rem" }}>
          <NotFound />
        </div>
      </Route>
      <Route path="/">
        <Redirect to="/notfound" />
      </Route>
    </Switch>
  </>
);

export default CustomSwitch;
