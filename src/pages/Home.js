import React, { useState, useEffect, useContext } from 'react';
import { motion } from "framer-motion";

// Context
import LanguageContext from "../context/LanguageContext";

// Content
import Content from "../content/home.json";

// Components
import HomeBanner from "../components/home/HomeBanner";
import HomePress from "../components/home/HomePress";
import HomeProjects from "../components/home/HomeProjects";
import HomeClasses from "../components/home/HomeClasses";
import HomeContact from "../components/home/HomeContact";
import PanelTransition from "../components/panel/PanelTransition";

const Home = () => {

  const [language] = useContext(LanguageContext);
  const [isGerman, setIsGerman] = useState(false);

  // Show the class section only for German language
  useEffect(() => {
    if(language === "de") {
      setIsGerman(true);
    } 
    else {
      setIsGerman(false);
    }
  }, [language]);

  return (
    <motion.div exit="exit">
      <HomeBanner content={Content} language={language} />
      <HomePress content={Content} language={language} />
      <HomeProjects content={Content} language={language} />
      {isGerman && <HomeClasses content={Content} language={language} />}
      <HomeContact content={Content} language={language} />
      <PanelTransition />
    </motion.div>
  )
}

export default Home
