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
import NotFoundPage from "./components/NotFoundPage";

// Pages
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import ThankYou from "./pages/ThankYou";

// Routes
const routes = [
  {path: "/", name: "Home", Component: Home},
  {path: "/biography", name: "Biography", Component: Biography},
  {path: "/projects", name: "Projects", Component: Projects},
  {path: "/project/:id", name: "Project", Component: Project},
  {path: "/unterricht", name: "Classes", Component: Classes},
  {path: "/contact", name: "Contact", Component: Contact},
  {path: "/privacy-policy", name: "Policy", Component: Policy},
  {path: "/thank-you", name: "ThankYou", Component: ThankYou},
]

function App() {

  // User app language
  const userLang = localStorage.getItem("AL - Lang") ? localStorage.getItem("AL - Lang") : "de";

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
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </LanguageContext.Provider>
  );
}

export default App;
