import React, { useContext } from "react";
import Layout from "./Layout";
import Main from "./components/main/Main";
import Contexts, { myContext } from "./context";
import AboutUs from "./components/AboutUs";
import { Route, Switch } from "react-router-dom";
import ContactUs from "./components/ContactUs";

const App = () => {
  const context = useContext(myContext);
  return (
    <Contexts>
      <Layout>
        <Switch>

          <Route path="/" exact>
            <Main />
          </Route>

          <Route path="/about">
            <AboutUs/>
          </Route>

          <Route path="/contact">
            <ContactUs/>
          </Route>

        </Switch>
      </Layout>
    </Contexts>
  );
};

export default App;
