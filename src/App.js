import React, { Fragment, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

const App = () => {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <Fragment>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route exact path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route exact path="/order">
            <Order pizza={pizza} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
};

export default App;
