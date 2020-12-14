// Context
import LanguageContext from "./context/LanguageContext";

// Styles
import { GlobalStyle } from "./styles/globalStyles";

// Components
import Header from "./components/Header";

function App() {

  // TODO: manually set to english but needs changing to useState hook once button to change language is created on navigation
  // App language
  const lang = "en";

  return (
    <LanguageContext.Provider value={lang}>
      <GlobalStyle />
      <Header />
    </LanguageContext.Provider>
  );
}

export default App;
