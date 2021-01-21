import { createContext } from "react";

// Create global language context and set english as default
const LanguageContext = createContext(["de", () => {}])

export default LanguageContext;