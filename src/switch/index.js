import { Redirect, Route, Switch } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";

import Jumbo from "components/Jumbo";
import Video from "components/Video";
import Lead from "components/Lead";
import About from "components/About";
import Categories from "components/Categories";

import NewItems from "components/NewItems";
import NewItemDetail from "components/NewItemDetail";

import AllItems from "components/AllItems";
import ItemDetail from "components/ItemDetail";

import CleanCode from "components/CleanCode";

import Instagram from "components/Instagram";
import MailList from "components/MailList";
import Footer from "components/Footer";

// 個ページ
import Shipping from "components/Shipping";

import Terms from "components/Terms";
import FandQ from "components/FandQ";

import Contact from "components/Contact";

import NotFound from "components/NotFound";

const CustomSwitch = () => (
  <>
    <Switch>
      <Route exact path="/assignment-bewdy-organics/">
        <ScrollAnimation animateIn="fadeIn">
          <Jumbo />
          <Lead />
          <NewItems />
          <CleanCode />
          <Categories />

          <Video />
          <MailList />
          <Instagram />
        </ScrollAnimation>
      </Route>

      <Route path="/assignment-bewdy-organics/about">
        <div style={{ paddingTop: "5rem" }}>
          <About />
        </div>
      </Route>

      <Route path="/assignment-bewdy-organics/fandq">
        <div style={{ paddingTop: "6rem" }}>
          <FandQ />
        </div>
      </Route>

      <Route path="/assignment-bewdy-organics/terms">
        <div style={{ paddingTop: "7rem" }}>
          <Terms />
        </div>
      </Route>

      <Route path="/assignment-bewdy-organics/contact">
        <div style={{ paddingTop: "6rem" }}>
          <Contact />
        </div>
      </Route>

      <Route path="/assignment-bewdy-organics/shipping">
        <div style={{ paddingTop: "7rem" }}>
          <Shipping />
        </div>
      </Route>

      {/* AllItems Routes */}
      <Route path="/assignment-bewdy-organics/allitems">
        <div style={{ paddingTop: "6rem" }}>
          <AllItems />
        </div>
      </Route>
      <Route path="/assignment-bewdy-organics/itemdetail/:aid">
        <div style={{ paddingTop: "8rem" }}>
          <ItemDetail />
        </div>
      </Route>

      {/* NewItems Routes */}
      <Route path="/assignment-bewdy-organics/newitems/">
        <div style={{ paddingTop: "6rem" }}>
          <NewItems />
        </div>
      </Route>
      <Route path="/assignment-bewdy-organics/newitemdetail/:nid">
        <div style={{ paddingTop: "8rem" }}>
          <NewItemDetail />
        </div>
      </Route>

      <Route exact path="/assignment-bewdy-organics/notfound">
        <div style={{ paddingTop: "9rem" }}>
          <NotFound />
        </div>
      </Route>
      <Route path="/assignment-bewdy-organics/">
        <Redirect to="/notfound" />
      </Route>
    </Switch>
    <Footer />
  </>
);

export default CustomSwitch;
