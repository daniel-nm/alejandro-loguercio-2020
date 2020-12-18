import React, { useContext } from 'react';
import { motion } from "framer-motion";

// Context
import LanguageContext from "../context/LanguageContext";

// Content
import Content from "../content/home.json";

// Components
import HomeBanner from "../components/home/HomeBanner";
import HomePress from "../components/home/HomePress"

const Home = () => {

  const [language] = useContext(LanguageContext);

  return (
    <motion.div exit="exit">
      <HomeBanner content={Content} language={language} />
      <HomePress content={Content} language={language} />
    </motion.div>
  )
}

export default Home