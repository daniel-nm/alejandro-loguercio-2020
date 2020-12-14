import { createContext } from "react";

// Create global language context and set english as default
const LanguageContext = createContext(["en", () => {}])

export default LanguageContext;