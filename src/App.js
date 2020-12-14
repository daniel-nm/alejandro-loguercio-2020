import { useState } from "react";

// Context
import LanguageContext from "./context/LanguageContext";

// Styles
import { GlobalStyle } from "./styles/globalStyles";

// Components
import Header from "./components/Header";

function App() {

  // User app language
  const userLang = localStorage.getItem("AL - Lang") ? localStorage.getItem("AL - Lang") : "en";

  // App language
  const langHook = useState(userLang);

  return (
    <LanguageContext.Provider value={langHook}>
      <GlobalStyle />
      <Header />
    </LanguageContext.Provider>
  );
}

export default App;
