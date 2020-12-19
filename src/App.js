import { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Context
import LanguageContext from "./context/LanguageContext";

// Styles
import { GlobalStyle } from "./styles/globalStyles";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Biography from "./pages/Biography";

// TODO: needs adding additional routes
// Routes
const routes = [
  {path: "/", name: "Home", Component: Home},
  {path: "/biography", name: "Biography", Component: Biography},
]

function App() {

  // User app language
  const userLang = localStorage.getItem("AL - Lang") ? localStorage.getItem("AL - Lang") : "en";

  // App language
  const langHook = useState(userLang);

  // Location
  const location = useLocation();

  return (
    <LanguageContext.Provider value={langHook}>
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {routes.map(({path, name, Component}) => (
            <Route path={path} key={name} exact>
              <Component />
            </Route>
          ))}
        </Switch>
      </AnimatePresence>
      <Footer />
    </LanguageContext.Provider>
  );
}

export default App;
