// Context
import LanguageContext from "./context/LanguageContext";

// Styles
import { GlobalStyle } from "./styles/globalStyles";

function App() {

  // TODO: manually set to english but needs changing to useState hook once button to change language is created on navigation
  // App language
  const lang = "en";

  return (
    <LanguageContext.Provider value={lang}>
      <GlobalStyle />
      <div className="App">


      </div>
    </LanguageContext.Provider>
  );
}

export default App;
